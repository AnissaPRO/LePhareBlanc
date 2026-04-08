const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { Client } = require('pg');

const app = express();
const PORT = 8000;

// --- CONFIGURATION CORS ---
const cors = require('cors');
app.use(cors()); // Autorise toutes les origines

// Middleware pour lire le JSON
app.use(express.json());

// --- CONFIGURATION BASE DE DONNÉES ---
// On se connecte au service "db" défini dans le docker-compose
const client = new Client({
  connectionString: 'postgres://user:password@db:5432/postgres',
});

client
  .connect()
  .then(() => {
    console.log('CONNEXION RÉUSSIE : Le Backend parle à PostgreSQL !');
    return client.query(
      'CREATE TABLE IF NOT EXISTS test_db (id SERIAL PRIMARY KEY, message TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)',
    );
  })
  .then(() => console.log("Table 'test_db' prête."))
  .catch((err) => console.error('ERREUR CONNEXION DB :', err.stack));

// --- CONFIGURATION SWAGGER ---
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Le Phare Blanc',
      version: '1.0.0',
      description:
        'Documentation POC - Coordination Front-Back & Persistance SQL',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Serveur Local (Docker)',
      },
    ],
  },
  apis: [__filename],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// --- ROUTES ---

/**
 * @openapi
 * /:
 *   get:
 *     description: Page d'accueil de l'API
 *     responses:
 *       200:
 *         description: Succès
 */
app.get('/', (req, res) => {
  res.send(`
        <h1>API Le Phare Blanc</h1>
        <p>Statut : Opérationnel</p>
        <p>Accéder à la <a href="/api-docs">Documentation Swagger (UI)</a></p>
    `);
});

/**
 * @openapi
 * /db-test:
 *   post:
 *     description: Tester la persistance en base de données
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message enregistré en base !
 */
app.post('/db-test', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      throw new Error('Validation failed: Message is empty');
    }
    const result = await client.query(
      'INSERT INTO test_db (message) VALUES ($1) RETURNING *',
      [message],
    );
    res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (err) {
    const isDev = process.env.NODE_ENV === 'development';
    res.status(500).json({
      code: 'ERR_SQL_PERSISTENCE',
      message: isDev
        ? `Erreur SQL détaillée : ${err.message}`
        : "Une erreur est survenue lors de l'enregistrement.",
      details: isDev ? err.stack : 'Action non autorisée en production',
    });
  }
});

/**
 * @openapi
 * /status:
 *   get:
 *     description: Vérification du statut du serveur
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Le Phare Blanc répond',
    timestamp: new Date(),
  });
});

// --- GESTION 404 API ---
// Cette route est placée après toutes les autres. Si aucune n'a matché, on tombe ici.
app.use((req, res) => {
  res.status(404).json({
    code: 'ERR_NOT_FOUND',
    status: 404,
    message: `Désolé,la route API '${req.originalUrl}' n'existe pas sur ce serveur.`,
    severity: 'warning',
    suggestion: "Vérifiez l'URL ou consultez la documentation /api-docs",
    timestamp: new Date(),
  });
});

// --- MIDDLEWARE D'ERREUR GLOBAL (PROTECTION CRASH) ---
app.use((err, req, res, next) => {
  console.error(' [CRASH SERVEUR] ', err.stack);
  res.status(500).json({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Le serveur a rencontré un problème inattendu.',
  });
});

// --- LANCEMENT DU SERVEUR ---
app.listen(PORT, '0.0.0.0', () => {
  console.log(`SERVEUR DÉMARRÉ SUR LE PORT ${PORT}`);
  console.log(`SWAGGER : http://localhost:${PORT}/api-docs`);
});
