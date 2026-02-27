const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = 8000;

// --- CONFIGURATION SWAGGER ---
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Le Phare Blanc',
            version: '1.0.0',
            description: 'Documentation de l\'API pour le POC Le Phare Blanc (Coordination Front-Back)',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./server.js'], 
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
 * description: Retourne le nom de l'API.
 */
app.get('/', (req, res) => {
    res.send('<h1>API Le Phare Blanc</h1><p>Statut : Opérationnel</p><p>Allez sur <a href="/api-docs">/api-docs</a> pour la documentation.</p>');
});

/**
 * @openapi
 * /status:
 * get:
 * description: Route pour le stagiaire - Vérification du statut
 * responses:
 * 200:
 * description: Succès
 */
app.get('/status', (req, res) => {
    res.json({ status: "ok", message: "Le Phare Blanc est en ligne" });
});

// --- LANCEMENT ---
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
    console.log(`Documentation Swagger sur http://localhost:${PORT}/api-docs`);
});