const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = 8000;

// Middleware pour lire le JSON 
app.use(express.json());

// --- CONFIGURATION SWAGGER ---
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Le Phare Blanc',
            version: '1.0.0',
            description: 'Documentation POC - Coordination Front-Back & DDD',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: 'Serveur de développement Local',
            },
        ],
    },
    // Utilisation de __filename pour éviter les erreurs de majuscules sur Docker/Linux
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
        <p>Statut : 🟢 Opérationnel</p>
        <p>Accéder à la <a href="/api-docs">Documentation Swagger (UI)</a></p>
    `);
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
        message: "Le Phare Blanc répond correctement",
        timestamp: new Date()
    });
});

// --- LANCEMENT DU SERVEUR ---
// On écoute sur 0.0.0.0 pour Docker
app.listen(PORT, '0.0.0.0', () => {
    console.log(`SERVEUR DÉMARRÉ SUR LE PORT ${PORT}`);
    console.log(`SWAGGER : http://localhost:${PORT}/api-docs`);
});

// Simulation de connexion DB (pour ne pas bloquer le serveur si elle échoue)
setTimeout(() => {
    console.log("Tentative de connexion à PostgreSQL...");
}, 2000);