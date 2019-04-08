let places = [];

const domStringBuilder = (arrayToPrint) => {
let domString = '';
    arrayToPrint.forEach((place) => {
        domString += `  <div class="col-4">`;
        domString += `    <div class="card">`;
        domString += `      <h3 class="cityState">${place.cityState}</h3>`;
        domString += `      <div class="image"><img src=${place.cityImage} style="width:50%"></div>`;
        domString += `      <div class="favoriteRestaurant"><p>Favorite Restaurant:${place.favoriteRestaurant}</p></div>`;
        domString += `      <div class="favoriteBar"><p>Favorite Bar: ${place.favoriteBar}</p></div>`;
        domString += `      <div class="favoriteHotel"><p>Favorite Hotel: ${place.favoriteHotel}</p></div>`;
        domString += `      <div class="favoriteTouristAttraction"><p>Favorite Tourist Attraction: ${place.favoriteTouristAttraction}</p></div>`;
        domString += `   </div>`;
        domString += ` </div>`;
    });
    printToDom('main-content', domString);


};



const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
   
};


function executeThisCodeAfterFileLoads(){

    const data = JSON.parse(this.responseText);
    places = data.places;
    console.log('yep 1!');
    domStringBuilder(data.places);
    console.log('yep 2!');

};

function executeThisCodeifXHRFails() {
    console.log('OhShit');

};
const getPlacesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeifXHRFails);
    myRequest.open('GET', './DB/places.json');
    myRequest.send();

};



const init = () => {
    getPlacesData();
    domStringBuilder(places);

};

init();