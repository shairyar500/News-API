// by default function tesla is fetched
fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-07-25&sortBy=publishedAt&apiKey=36328e6c0287414690386093381be26a'
  ). then( function (response){
  console.log(response, 'Response');
  return  response.json();
}).then(myArray)
.catch(function (err) {
  console.log(err);
});;
function myArray(obj){
  let Array = obj.articles;
  console.log(Array);
  console.log(typeof Array);

  document.querySelector("#main").innerHTML =(Array.map(articles => 
    `
      <div class="card" >
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p>
         <a href="#" class="btn btn-primary" onclick= "getElementbyId('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
         </div>
      </div>`
).join(''));}

function modernCars(){

fetch('https://newsapi.org/v2/everything?q=apple&from=2021-08-24&to=2021-08-24&sortBy=popularity&apiKey=36328e6c0287414690386093381be26a'). then( function (response){
  console.log(response, 'Response');
  return  response.json();
}).then(myArray)
.catch(function (err) {
  console.log(err);
});;
function myArray(obj){
  let Array = obj.articles;
  console.log(Array);
  console.log(typeof Array);
  document.querySelector("#main").innerHTML =(Array.map(articles => 
    `
      <div class="card" >
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p>
         <a href="#" class="btn btn-primary" onclick= "getElementbyId('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
         </div>
      </div>`
).join(''));}}

function appleNews() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=69601cff58d54dfcb52579c18c850a24')
  .then(function(response){
    return response.json();
  }).then(newsArray)
  .catch(function(err){
      console.log(err);
  });
  function newsArray(obj){
    let business = obj.articles;
    console.log(business);
    console.log(typeof business);
    document.querySelector('#main').innerHTML= (business.map(articles =>
     `
     
     <div class="card">
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
        <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p><br>
         <a href="#" class="btn btn-primary" onclick= "getElementById('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
        </div>
      </div>
     
     `
      ).join(''));
    }}
