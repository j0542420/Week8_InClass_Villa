"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Jose VIlla
      Date:   5/5/2025

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
      // step 3 declaring variables
      let codeValue = postalCode.value;
      let countryValue = country.value;
      // step 3b declaring empty variables
      place.value = "";
      region.value = "";

      // // step 3c usinf fetch method to access the API where country is the value of CountryValue
      // // where code is the value of codeValue
      // fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
      // // step 3d adding a then() method to parse the JSON
      // .then(promise => promise.json())
      // // step 3e adding another then() method 
      // .then(json => {
      //       place.value = json.places[0]["place name"];
      //       region.value = json.places[0]["state abbreviation"];
      // })
      // .catch(console.log("failed"))


      // using JSON
      let xhr = new XMLHttpRequest();
      let url = `http://api.zippopotam.us/${countryValue}/${codeValue}`

      xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200)
            {    
                  let json = (JSON.parse(xhr.response));
                  place.value = json.places[0]["place name"];
                  region.value = json.places[0]["state abbreviation"];
            }
      }
      xhr.open("GET", url,true);
      xhr.send();
}



