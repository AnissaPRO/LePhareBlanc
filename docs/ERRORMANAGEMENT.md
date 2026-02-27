# Stratégie de Gestion des Erreurs - Le Phare Blanc

Cette matrice définit la communication entre le Backend (Infrastructure) et le Frontend pour garantir une expérience utilisateur (UX) fluide et un debugging efficace.

| Code HTTP | Type d'erreur | Contexte Métier (Le Phare Blanc) | Action Front-end (UX) |
| :--- | :--- | :--- | :--- |
| **301 / 308** | Redirection | Le produit ou l'article a été déplacé. | Redirection automatique vers la nouvelle URL. |
| **400** | **Bad Request** | **Validation DDD échouée** (ex: taux de sucre < 2g). | Message d'alerte précis (Toast) via la réponse du Domaine. |
| **401** | Unauthorized | Session expirée ou utilisateur non identifié. | Redirection vers l'onboarding / page de connexion. |
| **403** | Forbidden | Accès restreint (ex: stagiaire tentant d'accéder à l'admin). | Affichage d'une page d'interdiction d'accès. |
| **404** | Not Found | Produit, article ou utilisateur inexistant. | Affichage de la vue "404 - Page non trouvée". |
| **422** | Unprocessable Entity | Erreur de formulaire (format email invalide, etc.). | Mise en évidence des champs en erreur sur le formulaire. |
| **500** | **Internal Error** | Crash serveur ou perte de connexion DB. | **Déclenchement de l'Error Boundary** (écran de secours). |
| **503** | Service Unavailable | Maintenance du serveur ou surcharge. | Message "Revenez bientôt" avec bouton de retry. |

