'use strict'

//--------------------GLOBAL VARIABLES/IMPORTS
let mediaArray = [];


  


  
//--------------------DOM REFERENCES

  

  

  

//--------------------CONSTRUCTORS

  

  



//--------------------CONSTRUCTOR METHODS
const Media(name, mediaType, genre, year, src='',alt='',href='') {
    this.name = name,
    this.mediaType = mediaType,
    this.genre = genre,
    this.year = year,
    this.src = src,
    this.alt = alt,
    this.href = href,
    mediaArray.push(this)
}
  

  

  

//--------------------FUNCTIONS
function renderMediaForLater(parentElement) {

    // Uncomment below if we want to pass in Parent Element as argument.
    // let parentElement = document.querySelector('canvas #watch-later-list');

    let unorderedListElement = document.createElement('ul');
    parentElement.appendChild(unorderedListElement);

    mediaArray.forEach(media => 
        {let listElem = document.createElement('li');
        listElem.textContent = media.name;
        listElem.id = media.name;
        let listImgElem = document.createElement('img');
        listImgElem.src = media.src;
        listImgElem.alt = media.name;
        listElem.appendChild(listImgElem);
        });
    
}
  
  

  

//--------------------EVENT LISTENERS

  

  

  

//--------------------EVENT HANDLERS

function quizFormHandler(event) {
    // Event Listener for Submit button
    event.preventDefault();
    let pref1 = document.querySelector('input radio ');

    
}

  

  

//--------------------FUNCTION CALLS