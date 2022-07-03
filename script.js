let jokebox = document.querySelector(".content");

async function getData() {
  const response = await fetch('jokes.json')
  try{
    const data = await response.json();
  const joke= await data[Math.floor(Math.random() * 979)]
    return displayJoke(joke);
  }
  catch{
    console.error("Error fetching data: " + JSON.stringify(response));
  }
}

function displayJoke(joke){
  jokebox.textContent = JSON.stringify(joke);
}



let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

next.addEventListener('click', ()=>{
  window.sessionStorage.setItem('previousJoke', jokebox.textContent);
  getData();
})

previous.addEventListener('click', ()=>{
  // if (window.sessionStorage.getItem('previousJoke') !== null){
  //   console.log(window.sessionStorage.getItem('previousJoke'));
  // }
  // else{
  //   console.log(window.sessionStorage.getItem('previousJoke'),"ERROR");
  // }
  window.sessionStorage.getItem('previousJoke') === null ? jokebox.textContent = "No previous Joke ,Please Click next" :jokebox.textContent = window.sessionStorage.previousJoke;
});
getData();

