// Tu códgigo aquí
let displayJoke = document.querySelector ("#display-joke")

let button = document.querySelector('#get-joke')
button.addEventListener('click', updateInfo)

var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let chuckNorris = JSON.parse(this.responseText)
                displayJoke.innerHTML = chuckNorris["value"]
            }
            if (this.readyState < 4 && this.status > 200) {
                displayJoke.innerHTML = "Ups! Parece que algo ha ido mal..."
            }
        };

        function updateInfo() {
            xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
            xhttp.send();
        }