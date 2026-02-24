# pipelines

## main.yml
La pipeline *main.yml* permet de vérifier la bonne syntaxe du code sur les branches suivant la convention de nommage des branches:
* main
* develop
* feat/{nom de la feature}
* fix/{nom du fix}
* docs/{élément ajouter à la documentation}



## create-issue.yml
La pipeline *create-issue.yml* va crée une nouvelle issue pour chaque branche crée, l'issue crée servira de pont entre une US/Epic créé et devra donc être liés entre elles.

# Issues

## Suivi de travail:
Aucun logiciel de suivi de travail ne sera utilisé pour ce projet. Il est donc important de rédiger des issues propres, de faire un suivi sur celles- ci régulièrement. Ces Issues serviront donc d'outils de suivi des tâches. Pour un suivi plus structuré voir [la roadmap](https://github.com/users/AnissaPRO/projects/4).

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
