# Guidelines de Contribution - Le Phare Blanc

Bienvenue sur le projet ! Pour maintenir une qualité de code optimale et assurer le bon fonctionnement de nos automatisations, merci de respecter les règles suivantes.

---

## 1. Workflow des Branches

Notre projet utilise une automatisation **Branch-First**.

### Création d'une nouvelle fonctionnalité
Pour toute nouvelle idée ou fonctionnalité non répertoriée :
1. Créez une branche localement avec le préfixe `feat/` (ex: `feat/systeme-badges`).
2. Pushez la branche sur le dépôt distant.
3. **Automation :** Un ticket (Issue) sera automatiquement créé sur le Board GitHub.
4. Liez manuellement ce ticket à l'Epic correspondante dans le projet.

### Travail sur un ticket existant
Si vous travaillez sur une sous-tâche déjà présente dans le backlog :
- Nommez votre branche : `issue-[ID]-[nom_court]` (ex: `issue-12-api-auth`).
- L'automation ignorera cette branche pour éviter les doublons de tickets.

---

## 2. Standards de Commits

Nous suivons la convention **Conventional Commits** pour faciliter le Semantic Versioning :

- `feat:` Une nouvelle fonctionnalité (ex: `feat: ajout du scroll infini`).
- `fix:` Une correction de bug.
- `docs:` Modification de la documentation.
- `style:` Changements cosmétiques (CSS, formatage) sans impact logique.
- `refactor:` Modification du code qui ne change pas le comportement.

> **Note :** Pour fermer un ticket automatiquement à la fusion, ajoutez `Closes #ID` dans le message de votre dernier commit ou de votre Pull Request.

---

## 3. Environnement de Développement

Pour garantir la parité des environnements, l'usage de **Docker** est obligatoire.

1. **Build initial :** `docker-compose up --build`
2. **Tests :** Avant chaque Push, vérifiez que votre code passe les tests locaux (ou attendez le retour de la CI sur GitHub).

---

## 4. Processus de Review

1. Une fois le développement terminé, ouvrez une **Pull Request (PR)** vers la branche `develop`.
2. La **CI (GitHub Actions)** va vérifier automatiquement le build et la qualité du code.
3. Un autre membre de l'équipe doit valider la PR (Review) avant le merge final.
4. Une fois mergée, la branche de travail doit être supprimée.

---

## 5. Gestion de Projet

- **Estimation :** Chaque tâche doit avoir une valeur dans le champ "Estimation" avant d'être passée en `In Progress`.
- **Labels :** Utilisez systématiquement les labels `Front-end`, `Back-end` ou `Fullstack` pour permettre le filtrage du board.
