///////////// {TEAM NAME} /////////////
/// Matt Jett and Rhiannon Sparling ///
///////////////////////////////////////

const getStuff = 'https://gist.githubusercontent.com/MattJett-EWU/aa422a6d2e0740b05ae9c4e08a3eed7b/raw/cd3b9d8cfb714cbfe0d0ebff0e5ff067f12e5ee4/puppyRecipe.json';

let doStuff = function(data) 
{
  // Variables
  let title, ingredients, href, thumbnail;
  
  // Header of page and title from JSON
  $("#titleOfPage").text("🐕 " + data.title);
  
  // LOOP: JSON data parsing
  for (let i = 0; i < data.results.length; i++) 
  {
    title = data.results[i].title;
    ingredients = data.results[i].ingredients;
    href = data.results[i].href;
    thumbnail = data.results[i].thumbnail;
    
    const template = `<div id="recipe">
                      <h2 id="recipeTitle">${title}</h2> 
                      <a href="${href}"><img id="thumb" href="${href}" src="${thumbnail}"/></a>
                      <p id="ingreds"><b>Ingredients: </b>${ingredients}</p>
                      </div>`;
    
    
    $('#app').append(template); 
  }  
};

$.getJSON(getStuff, doStuff);