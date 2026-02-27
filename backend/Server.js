const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { Client } = require('pg');

const app = express();
const PORT = 8000;

// Middleware pour lire le JSON 
app.use(express.json());

// --- CONFIGURATION BASE DE DONNÉES ---
// On se connecte au service "db" défini dans ton docker-compose
const client = new Client({
    connectionString: 'postgres://user:password@db:5432/user'
});

client.connect()
    .then(() => {
        console.log("CONNEXION RÉUSSIE : Le Backend parle à PostgreSQL !");
        return client.query('CREATE TABLE IF NOT EXISTS test_db (id SERIAL PRIMARY KEY, message TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
    })
    .then(() => console.log("Table 'test_db' prête."))
    .catch(err => console.error("ERREUR CONNEXION DB :", err.stack));

// --- CONFIGURATION SWAGGER ---
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Le Phare Blanc',
            version: '1.0.0',
            description: 'Documentation POC - Coordination Front-Back & Persistance SQL',
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
 * get:
 * description: Page d'accueil de l'API
 * responses:
 * 200:
 * description: Succès
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
 * post:
 * description: Tester la persistance en base de données
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * message:
 * type: string
 * responses:
 * 201:
 * description: Message enregistré en base !
 */
app.post('/db-test', async (req, res) => {
    try {
        const { message } = req.body;
        const result = await client.query('INSERT INTO test_db (message) VALUES ($1) RETURNING *', [message]);
        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de l'insertion SQL", details: err.message });
    }
});

/**
 * @openapi
 * /status:
 * get:
 * description: Vérification du statut du serveur
 * responses:
 * 200:
 * description: OK
 */
app.get('/status', (req, res) => {
    res.json({ 
        status: "ok", 
        message: "Le Phare Blanc répond",
        timestamp: new Date()
    });
});

// --- LANCEMENT DU SERVEUR ---
app.listen(PORT, '0.0.0.0', () => {
    console.log(`SERVEUR DÉMARRÉ SUR LE PORT ${PORT}`);
    console.log(`SWAGGER : http://localhost:${PORT}/api-docs`);
});