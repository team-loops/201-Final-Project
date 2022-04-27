'use strict'

//--------------------GLOBAL VARIABLES/IMPORTS
const mediaObjectsArray = [];

let mediaArray = [];





//--------------------DOM REFERENCES
const quizResultsContainer = document.getElementById('quiz-results');
const watchLaterContainer = document.getElementById('watch-later-list');
const quizFormContainer = document.getElementById('movie-quiz');
quizFormContainer.addEventListener('submit', quizFormHandler);




//--------------------CONSTRUCTORS







//--------------------CONSTRUCTOR METHODS
function Media(name, mediaType, genre, year, src = '', alt = '', href = '') {
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
    return Math.floor(Math.random() * 100000);
}


//--------------------FUNCTIONS

function createMediaObjects() {
    mediaObjectsArray.forEach(mediaObject => {
        window[`${mediaObject.name}`] = new Media(mediaObject.name, mediaObject.mediaType, mediaObject.genre, mediaObject.year);
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
    let prefMediaType = '';
    let prefGenre = '';
    let prefDecade = 0;

    if (document.getElementById('rd-movie').checked) {
        prefMediaType = 'Movie';
    } else if (document.getElementById('rd-tv').checked) {
        prefMediaType = 'TV';
    }

    if (document.getElementById('rd-drama').checked) {
        prefGenre = 'Drama';
    } else if (document.getElementById('rd-action').checked) {
        prefGenre = 'Action';
    }

    if (document.getElementById('rd-1980').checked) {
        prefDecade = 1980;
    } else if (document.getElementById('rd-1990').checked) {
        prefDecade = 1990;
    } else if (document.getElementById('rd-2000').checked) {
        prefDecade = 2000;
    } else if (document.getElementById('rd-2010').checked) {
        prefDecade = 2010;
    }
    console.log(prefMediaType, prefGenre, prefDecade);

    renderFilteredList(prefMediaType, prefGenre, prefDecade);
}

function renderFilteredList(prefMediaType, prefGenre, prefDecade) {
    let filteredList = [];
    for (let i = 0; i < mediaArray.length; i++) {
        if (mediaArray[i].mediaType === prefMediaType &&
            mediaArray[i].genre === prefGenre &&
            (mediaArray[i].year >= prefDecade && mediaArray[i].year < (prefDecade + 9))) {
            filteredList.push(mediaArray[i])
        }
    }
    console.log(filteredList);

    let unorderedListElem = document.createElement('ul');

    filteredList.forEach(mediaObj => {
        let listItemElem = document.createElement('li');
        let titleElem = document.createElement('p');
        let yearElem = document.createElement('p');
        let genreElem = document.createElement('p');
        let saveButtonElem = document.createElement('button');
        titleElem.textContent = mediaObj.name;
        yearElem.textContent = String(mediaObj.year);
        genreElem.textContent = mediaObj.genre;
        saveButtonElem.textContent = 'Save For Later';
        saveButtonElem.addEventListener('submit', 'saveMediaForLater');
        listItemElem.appendChild(titleElem);
        listItemElem.appendChild(yearElem);
        listItemElem.appendChild(genreElem);
        listItemElem.appendChild(saveButtonElem);
        unorderedListElem.appendChild(listItemElem);
    });
    quizResultsContainer.appendChild(unorderedListElem);
}


function selectMediaHandler(event) {
    event.preventDefault();

    let selectedMedia = mediaArray.filter(mediaObj => mediaObj[`${event.target.name.value}`]);
    localStorage.setItem('selected-media', JSON.stringify(selectedMedia));
}




//--------------------FUNCTION CALLS

let Media1 = new Media("Fight Club", "Movie", "Drama", 1999);
let Media2 = new Media("The Dark Knight", "Movie", "Action", 2008);
let Media3 = new Media("Forrest Gump", "Movie", "Drama", 1994);
let Media4 = new Media("Goodfellas", "Movie", "Drama", 1990);
let Media5 = new Media("Inception", "Movie", "Action", 2010);
let Media6 = new Media("Pulp Fiction", "Movie", "Drama", 1994);
let Media7 = new Media("Se7en", "Movie", "Drama", 1995);
let Media8 = new Media("The Shawshank Redemption", "Movie", "Drama", 1994);
let Media9 = new Media("The Godfather", "Movie", "Drama", 1972);
let Media10 = new Media("The Matrix", "Movie", "Action", 1999);
let Media11 = new Media("Avatar: The Last Airbender", "TV", "Action", 2005);
let Media12 = new Media("The Mandalorian", "TV", "Action", 2019);
let Media13 = new Media("Succession", "TV", "Drama", 2018);
let Media14 = new Media("The Sopranos", "TV", "Drama", 1999);
let Media15 = new Media("House", "TV", "Drama", 2004);
let Media16 = new Media("Breaking Bad", "TV", "Drama", 2008);
let Media17 = new Media("Black Mirror", "TV", "Drama", 2011);
let Media18 = new Media("Better Call Saul", "TV", "Drama", 2015);
let Media19 = new Media("Battlestar Galactica", "TV", "Action", 2004);
let Media20 = new Media("Game of Thrones", "TV", "Action", 2011);