#  Le Phare Blanc

## Contexte
**Le Phare Blanc** est une plateforme collaborative de sensibilisation aux dangers du sucre caché.
Le projet se veut être un guide (un phare) dans le brouillard des sucres cachés. 

- **Fonctionnalité principale :** Un centre de ressources collaboratif où les utilisateurs dénoncent les pratiques industrielles et s'entraident.
- **Philosophie :** Priorité à la bienveillance et à l'action collective plutôt qu'au simple calcul de calories.

[![Board Project] : https://github.com/users/AnissaPRO/projects/4
[![CI Pipeline] : https://github.com/AnissaPRO/LePhareBlanc/actions

## Installation (Setup)
Le projet utilise Docker pour isoler le Front (React) et le Back (C#/SQL).
1. `git clone https://github.com/AnissaPRO/LePhareBlanc`
2. `docker-compose up --build`
3. Accès : Front sur `localhost:3000`, API sur `localhost:8000`.

## Stratégie de Versioning & Branches
Nous suivons le **Semantic Versioning** (v1.0.0) :
- `feat/issue-[ID]-[nom]` : Nouvelles fonctionnalités (Profil, Badges).
- `fix/issue-[ID]-[nom]`   : Corrections.
- `docs/issue-[ID]-[nom]` : Amélioration de la documentation.
  
Toute Pull Request doit être validée par le binôme (Front/Back) avant fusion dans `main`.


## Structure du projet
- `frontend/` : Application React/Next (Port 3000)
- `backend/` : API Node/Python (Port 8000)
- `.github/workflows/` : Automations (CI & Création de tickets)
- `docker-compose.yml` : Orchestration des services

## Workflow & Automations 
Nous avons mis en place une gestion de projet automatisée :

Branch-First : Toute branche créée avec le préfixe feat/ génère automatiquement un ticket sur notre board si il n'est pas déjà existant.

Hiérarchie : Structure en 4 EPICS avec sous-tâches Front/Back liées.

CI/CD : Analyse automatique du code à chaque Pull Request.

[!IMPORTANT]
Consultez nos Guidelines de contribution pour le détail du branching (SemVer) et des conventions de commits.

## Gestion de Projet
Le suivi est centralisé sur notre Board Kanban :

Backlog : Vision long terme.

Sprint 0 : Initialisation technique et infrastructure.

Estimations : Charge de travail évaluée en points.

Nous avons crée des templates pour la création des Epics ainsi que des US pour faciliter les pré recquis que ces tickets devront disposer.
