'use strict'

//--------------------GLOBAL VARIABLES/IMPORTS



  


  
//--------------------DOM REFERENCES

  

  

  

//--------------------CONSTRUCTORS

  

  



//--------------------CONSTRUCTOR METHODS

  

  

  

//--------------------FUNCTIONS

  

  

  

//--------------------EVENT LISTENERS

  

  

  

//--------------------EVENT HANDLERS
function selectHandler(event) {
  let = event.target.alt;

  for (let i = 0; i < MediaArray.length; i++) {
    if (media === MediaArray[i].MediaName) {
      MediaArray[i].clicks++;
    }
  }

  totalRounds--;

  if (totalRounds === 0) {
    mediaContainer.removeEventListener('click', selectHandler);
    renderMediaChart(); // renders chart once all chosen rounds are complete

    let stringifiedMedia = JSON.stringify(MediaArray); // 1. Stringifies MediaArray for local storage

    localStorage.setItem('media', stringifiedMedia); // 2. Sets stringified MediaArray into local storage
  }

  renderMedia();
  

  

//--------------------FUNCTION CALLS