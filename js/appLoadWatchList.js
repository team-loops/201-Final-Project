'use strict'
const watchLaterContainer = document.getElementById('watch-later-list');
let fetchedMedia = localStorage.getItem('saved-items');
let parsedMedia = JSON.parse(fetchedMedia);

console.log(parsedMedia);

function renderSavedForLater() {

  let unorderedListElement = document.createElement('ul');

  parsedMedia.forEach(media => {
      let listElem = document.createElement('li');
      listElem.textContent = media.name;
      listElem.id = media.name;
      let listImgElem = document.createElement('img');
      listImgElem.src = media.src;
      listImgElem.alt = media.name;
      listElem.appendChild(listImgElem);
      unorderedListElement.appendChild(listElem);
  });
  watchLaterContainer.appendChild(unorderedListElement);
}

renderSavedForLater();