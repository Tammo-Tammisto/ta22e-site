async function logChuck() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await response.json();
    document.getElementById("demo").innerHTML =(joke.value);
  }

  logChuck()