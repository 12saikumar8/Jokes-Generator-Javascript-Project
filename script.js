const joketext = document.querySelector("#joke");


async function getjoke(){
    const jokeData = await fetch("https://v2.jokeapi.dev/joke/Programming?idRange=0-300", {
});
const jokeObj = await jokeData.json();
console.log(jokeObj.joke)
joketext.innerHTML = jokeObj.joke
}