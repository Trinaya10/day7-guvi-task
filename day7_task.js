//Get all the countries from Asia continent /region using Filter function


/*var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://restcountries.com/v3.1/all");
TODORequest.addEventListener('load', function (){
  console.log(this.response)
  var countrydata=JSON.parse(this.response)
  var asia= countries(countrydata,'Asia')
  iterate(asia)
});

TODORequest.send()
function countries(country,region){
return country.filter((element) => 
{
if(element.continents=='Asia')
{
return element.region
}
})



}


function iterate(data = []) {
  for (var x = 0; x < data.length; x++) {
    console.log(data[x].region)
  }
}*/

//Get all the countries with a population of less than 2 lakhs using Filter function
/*var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://restcountries.com/v3.1/all");
TODORequest.addEventListener('load', function (){
  var pops=JSON.parse(this.response)
  var lessthanpop= countries(pops)
  iterate(lessthanpop)
});

TODORequest.send()
function countries(populations){
return populations.filter((element) => (element.population < 200000))



}


function iterate(data = []) {
  for (var x = 0; x < data.length; x++) {
    console.log(data[x].population)
  }
}*/
//Print the following details name, capital, flag, using forEach function


/*var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://restcountries.com/v3.1/all");
TODORequest.addEventListener('load', function () {
  var responseData = JSON.parse(this.response);
 
  iterate(responseData);
});

TODORequest.send();



function iterate(data = []) {
  data.forEach(function (item) {
    console.log("Name:", item.name);
    console.log("Capital:", item.capital);
    console.log("Flag:", item.flag);
  });
} */

//Print the total population of countries using reduce function

/*var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://restcountries.com/v3.1/all");
TODORequest.addEventListener('load', function () {
  var countries = JSON.parse(this.response);
  var total = totalpopulation(countries);
  iterate(total);
});

TODORequest.send();

function totalpopulation(countries) {
  return countries.reduce((carry, country) => {
    if (country.population) {
      return carry + country.population;
    } else {
      return carry;
    }
  }, 0);
}

function iterate(data = []) {
  console.log(data);
}*/

/*var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://restcountries.com/v3.1/all");
TODORequest.addEventListener('load', function () {
  var specificcrcy = JSON.parse(this.response);
  iterate(specificcrcy);
});

TODORequest.send();


function iterate(data = []) {
for(var i=0;i<data.length;i++)
{
if(data[i].currencies==='USD')
{
console.log(data[i].name);
}
}
}*/









