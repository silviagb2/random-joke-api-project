const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function(){
    getRandomJoke();
})

function getRandomJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    //Promesas
    .then(response => response.json()) //Transformamos la respuesta y la mandamos al siguiente then
    .then(data => jokeDIV.innerHTML = `${data.value}`); // Si tenemos que poner muchas cosas es mejor poner aquí una función y marcar en la función lo que queremos que se haga con los datos
    //catch(error => console.log(error)) --- Si algo va mal lo capturamos con el catch. En este caso solo se mostraría el error por consola.
}

function onerror(){
     jokeDIV.textContent = 'There was an error!';  
}
