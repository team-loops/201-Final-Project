'use strict'

//--------------------GLOBAL VARIABLES/IMPORTS
const mediaObjectsArray = [];

let mediaArray = [];

  


  
//--------------------DOM REFERENCES
const quizResultsContainer = document.getElementById('quiz-results');
const watchLaterContainer = document.getElementById('watch-later-list');
const quizFormContainer = document.querySelector('movie-quiz');

  

  

//--------------------CONSTRUCTORS

  

  



//--------------------CONSTRUCTOR METHODS
function Media(name, mediaType, genre, year, src='',alt='',href='') {
    this.name = name,
    this.mediaType = mediaType,
    this.genre = genre,
    this.year = year,
    this.src = src,
    this.alt = alt,
    this.href = href,
    mediaArray.push(this)
}
  

function sessionIdGenerator() {
    return Math.floor(Math.random()*100000);
}


//--------------------FUNCTIONS

function createMediaObjects() {
    mediaObjectsArray.forEach(mediaObject=>{
        eval(`let ${window[mediaObject.name] = new Media(mediaObject.name, mediaObject.mediaType, mediaObject.genre, mediaObject.year)}`);
    })
}

function renderMediaForLater() {

    let unorderedListElement = document.createElement('ul');

    mediaArray.forEach(media => {
        let listElem = document.createElement('li');
            listElem.textContent = media.name;
            listElem.id = media.name;
        let listImgElem = document.createElement('img');
            listImgElem.src = media.src;
            listImgElem.alt = media.name;
            listElem.appendChild(listImgElem);
        unorderedListElement.appendChild(listElem);
        });
    quizFormContainer.appendChild(unorderedListElement);
}
  
  

  

//--------------------EVENT LISTENERS

  

  

  

//--------------------EVENT HANDLERS

function quizFormHandler(event) {
    // Event Listener for Submit button
    event.preventDefault();

    let sessionPrefs = {};
    sessionPrefs.sessionId = sessionIdGenerator();
    sessionPrefs.genre = event.target.prefGenre.value;
    sessionPrefs.mediaType = event.target.prefMediaType.value;
    sessionPrefs.decade = event.target.prefDecade.value;
    
    localStorage.setItem('session-prefs', JSON.stringify(sessionPrefs));
    
}


function selectMediaHandler(event) {
    event.preventDefault();

    let selectedMedia = mediaArray.filter(mediaObj => mediaObj[`${event.target.name.value}`]);
    localStorage.setItem('selected-media', JSON.stringify(selectedMedia));
}
  

  

//--------------------FUNCTION CALLS