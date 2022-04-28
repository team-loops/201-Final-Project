'use strict'

//--------------------GLOBAL VARIABLES/IMPORTS
let mediaObjectsArray = [];
let mediaArray = [];
let savedMediaList = [];


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

    let existingResults = document.querySelector('#filtered-list');
    if (existingResults) {
        existingResults.remove();
    }

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

function saveMediaForLater(event) {
    console.log(event.target.id);
    let savedMovie = {};
    for (let i = 0; i < mediaArray.length; i++) {
        console.log(mediaArray);
        if (mediaArray[i].src === event.target.id) {
            savedMovie = mediaArray[i];
        }
    }
    savedMediaList.push(savedMovie);
    
    localStorage.removeItem('saved-items');
    localStorage.setItem('saved-items',JSON.stringify(savedMediaList));
}

function renderFilteredList(prefMediaType, prefGenre, prefDecade) {

    let filteredList = [];
    for (let i = 0; i < mediaArray.length; i++) {
        console.log(prefMediaType, prefGenre, prefDecade);
        console.log(mediaArray[i]);
        if (mediaArray[i].mediaType === prefMediaType &&
            mediaArray[i].genre === prefGenre &&
            (prefDecade <= mediaArray[i].year && mediaArray[i].year <= (prefDecade + 9))) {
            filteredList.push(mediaArray[i])
        }
    }

    console.log(filteredList);

    let unorderedListElem = document.createElement('ul');
    if (!filteredList[0]) {
        unorderedListElem = document.createElement('p');
        unorderedListElem.textContent = 'No Results!';
    } else {
        filteredList.forEach(mediaObj => {
            let listItemElem = document.createElement('li');
            let titleElem = document.createElement('p');
            let yearElem = document.createElement('p');
            let genreElem = document.createElement('p');
            let imgContainerElem = document.createElement('div');
            let imgElem = document.createElement('img');
            let saveButtonElem = document.createElement('button');

            titleElem.textContent = mediaObj.name;
            yearElem.textContent = String(mediaObj.year);
            genreElem.textContent = mediaObj.genre;
            imgElem.src = mediaObj.src;
            imgElem.alt = mediaObj.name.replace(' ', '');
            imgContainerElem.className = 'img-container';
            imgContainerElem.appendChild(imgElem);
            saveButtonElem.textContent = 'Save For Later';
            saveButtonElem.id = mediaObj.src;
            saveButtonElem.addEventListener('click', saveMediaForLater);

            listItemElem.appendChild(saveButtonElem);
            listItemElem.appendChild(titleElem);
            listItemElem.appendChild(yearElem);
            listItemElem.appendChild(genreElem);
            listItemElem.appendChild(imgContainerElem);
            unorderedListElem.appendChild(listItemElem);
        });
    }

    unorderedListElem.id = 'filtered-list';
    quizResultsContainer.appendChild(unorderedListElem);
    console.log(quizResultsContainer);
}


//--------------------FUNCTION CALLS

let Media1 = new Media("Fight Club", "Movie", "Drama", 1999, './img/fightclub.jpg');
let Media2 = new Media("The Dark Knight", "Movie", "Action", 2008, './img/darkknight.jpg');
let Media3 = new Media("Forrest Gump", "Movie", "Drama", 1994, './img/ForrestGump.jpg');
let Media4 = new Media("Goodfellas", "Movie", "Drama", 1990, './img/goodfellas.jpg');
let Media5 = new Media("Inception", "Movie", "Action", 2010, './img/Inception.jpg');
let Media6 = new Media("Pulp Fiction", "Movie", "Drama", 1994, './img/pulpfiction.jpg');
let Media7 = new Media("Se7en", "Movie", "Drama", 1995, './img/Se7en.jpg');
let Media8 = new Media("The Shawshank Redemption", "Movie", "Drama", 1994, './img/shawshank.jpg');
let Media9 = new Media("The Godfather", "Movie", "Drama", 1972, './img/thegodfather.jpg');
let Media10 = new Media("The Matrix", "Movie", "Action", 1999, './img/thematrix.jpg');
let Media11 = new Media("Avatar: The Last Airbender", "TV", "Action", 2005, './img/avatarairbender.jpg');
let Media12 = new Media("The Mandalorian", "TV", "Action", 2019, './img/themandalorian.jpg');
let Media13 = new Media("Succession", "TV", "Drama", 2018, './img/succession.jpg');
let Media14 = new Media("The Sopranos", "TV", "Drama", 1999, './img/sopranos.jpg');
let Media15 = new Media("House", "TV", "Drama", 2004, './img/house.jpg');
let Media16 = new Media("Breaking Bad", "TV", "Drama", 2008, './img/breakingbad.jpg');
let Media17 = new Media("Black Mirror", "TV", "Drama", 2011, './img/blackmirror.jpg');
let Media18 = new Media("Better Call Saul", "TV", "Drama", 2015, './img/bettercallsaul.jpg');
let Media19 = new Media("Battlestar Galactica", "TV", "Action", 2004, './img/battlestar.jpg');
let Media20 = new Media("Game of Thrones", "TV", "Action", 2011, './img/gameofthrones.jpg');