# 🏛️ Le Phare Blanc

## 1. Contexte & Vision
**Le Phare Blanc** est une plateforme communautaire dédiée à la transparence sur l'industrie du sucre. 
Le projet se veut être un guide (un phare) dans le brouillard des sucres cachés. 
- **Fonctionnalité principale :** Un centre de ressources collaboratif où les utilisateurs (les "Gardiens") dénoncent les pratiques industrielles et s'entraident.
- **Philosophie :** Priorité à la bienveillance et à l'action collective plutôt qu'au simple calcul de calories.

## 2. Installation (Setup)
Le projet utilise Docker pour isoler le Front (React) et le Back (C#/SQL).
1. `git clone https://github.com/votre-repo/le-phare-blanc.git](https://github.com/AnissaPRO/LePhareBlanc`
2. `docker-compose up --build`
3. Accès : Front sur `localhost:3000`, API sur `localhost:8000`.

## 3. Stratégie de Versioning & Branches
Nous suivons le **Semantic Versioning** (v1.0.0) :
- `feat/` : Nouvelles fonctionnalités (Profil, Badges).
- `fix/` : Corrections.
- `docs/` : Amélioration de la documentation.
  
Toute Pull Request doit être validée par le binôme (Front/Back) avant fusion dans `main`.
