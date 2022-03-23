# Les cycles de viue d'un composant React

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

PHASE DE MONTAGE 

-------------------------------------

## 1. Constructor

Première méthode appelée par React, utilisé pour configurer notre classe elle même (pas l'affichage)

## 1.5 componentWillMount

Cette méthode était appelée juste AVANT le render. ATTENTION cette méthode est obsolète, et ne doit plus être utilisée. 

Pourquoi ? Parce qu'elle a lieu avant le render, et donc le render n'aura lieu qu'une cette méthode terminée -> ça retarde l'affichage de mon composant. Ce qui est contraire à la philosophie de React.

## 2. Render

La méthode  utilisée par React pour savoir quoi afficher dans le DOM. Dés que cette méthode est exécutée, le composant existe effectivement dans le DOM

## 3. componentDidMount

Cette méthode est appelée une seule fois après le tout premier render. Elle me permet de faire du code qui sera lancé automatiquement juste après que mon composant existe réellement dans le DOM.

* Je peux y placer du code pour lancer une requête sur un serveur.
* Je peux lancer un setTimeout ou un setInterval

---------------------------------------

Phase de Mise à jour

Dés que le state change, ou que les props reçus par le composant changent, React va Réexécuter la méthode **Render**

## 4. Render

La méthode est rééxécutée

## 5. componentDidUpdate

Si jamais j'ai besoin de faire une nouvelle requête parce qu'un élément de mon state a changé, je peux le faire ici.

Exemple: si dans mon state je stocke un numéro de page de résultat, par défaut disons que au didMount je lance ma requête pour avoir les résultats de la page 1. Une fois mon composant affiché, l'user peut cliquer sur le bouton pour voir la page 2. Je peux donc en profiter pour faire une nouvelle requête, cette fois en demandant la page 2 des résultats

Exemple plus détaillé

L'user clic sur "page suivante"
React appelle la méthode render();
React appelle didUpdate()
  Dans le didUpdate
    Je met 'loading: true' dans mon state
    Je lance ma requete, et je donne un callback pour quand je reçois les résultats.
    Dans mon callback, je mets loading à false, et les résultats dans mon state
    React appelle a nouveau render
    Render affiche un Loader (ou un message "chargement en cours")

----------------------------------------------------------------

Phase de démontage

## 6. componentWillUnmount

Cette méthode sera exécutée juste AVANT que React retire le composant du DOM.

Cette méthode est généralement utilisée pour faire du nettoyage. Par exemple: Arrêter un setInterval. Ou alors, si j'utilisais un système de websocket, je peux couper la connexion au moment où mon composant ne sera plus affiché

