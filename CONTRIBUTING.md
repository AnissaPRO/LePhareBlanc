# Guide de Contribution 

Merci de vouloir contribuer au projet **Le Phare Blanc** ! Pour maintenir la qualité du code, merci de suivre ces étapes.

## Installation du projet
Pour configurer votre environnement de développement local :

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/AnissaPRO/LePhareBlanc.git]
   cd LePhareBlanc

2. **Installer les dépendances :**
   ```bash
   npm install

3. **Lancer le projet :**
   ```bash
   npm start


# pipelines

## main.yml
La pipeline *main.yml* permet de vérifier la bonne syntaxe du code sur les branches suivant la convention de nommage des branches:
* main
* develop
* feat/{nom de la feature}
* fix/{nom du fix}
* docs/{élément ajouter à la documentation}

## create-issue.yml
La pipeline *create-issue.yml* va crée une nouvelle issue pour chaque branche crée, l'issue crée servira de pont entre une US/Epic créé et devra donc être liés entre elles. Elle a été mise en place pour les branches fix/ qui necessite une prise en charge rapide lorsque l'on a un problème dans notre code.

# Issues

## Suivi de travail:
Nous avons utilisé GitHub Projects. 
GitHub Projects permet de voir notre backlog sous plusieurs angles, ce qui est crucial pour le suivi :

Tableaux Kanban : Pour voir l'état d'avancement (À faire, En cours, Terminé).

Listes : Pour une vue condensée du backlog, idéale pour les réunions de planification.

Tableaux de bord : Pour ajouter des champs personnalisés (Estimation de temps, Priorité haute/basse, Itération/Sprint).
On peux le retrouver à cette adresse : https://github.com/users/AnissaPRO/projects

## Issue template : 

Dans ce projet on retrouve 2 templates utilisables et conseillé pour créer de nouvelles issue. Ces templates permettent à créer un environnement homogène d'Epic et d'User story.

### epics

Un template d'issue pour créer un Epic type. Un titre type ainsi qu'une description type sont à rédiger en suivant le modèle. 

 |à compléter|description|
 |-----------|-----------|
 |**``{scope}``**|le scope que l'epic décrit, à noter que les User stories ne doivent pas préciser le scope étant toujours lié à un epic.|
 |**``{titre}``**|le titre décrivant succinctement l'Epic, à approfondir dans la description|
 |``User stories liés``|Listé toutes les users stories qui constituent l'Epic|
 |``Dépendances``|Listé toutes les issues externes dont l'epic dépend|
    
### User Story

Un template d'issue pour créer une User Story type. Un titre type ainsi qu'une description type sont à rédiger en suivant le modèle. 

|à compléter|description|
|-----------|-----------|
|**``{titre}``**|le titre décrivant succinctement la User story, à approfondir dans la description|
|``User story``|Simple phrase à remplir suivant le schéma **"En tant que ... je veux ... afin de ..."**|
|``Dépendances``|Listé toutes les issues externes dont la User Story dépend|
|``Critères d'acceptation``|Listé tout les éléments concrets permettant de considérer cette User story comme terminé|
