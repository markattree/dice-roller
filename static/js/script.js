window.onload = () => {
  document.getElementById("d4").addEventListener("click", (_) => {
    rollDice(4)
  });
  document.getElementById("d6").addEventListener("click", (_) => {
    rollDice(6)
  });
  document.getElementById("d8").addEventListener("click", (_) => {
    rollDice(8)
  });
  document.getElementById("d10").addEventListener("click", (_) => {
    rollDice(10)
  });
  document.getElementById("d12").addEventListener("click", (_) => {
    rollDice(12)
  });
  document.getElementById("d20").addEventListener("click", (_) => {
    rollDice(20)
  });
}

function rollDice(numberOfFaces) {
  updateResult("--")
  return axios.get(`https://www.random.org/integers/?num=1&min=1&max=${numberOfFaces}&col=1&base=10&format=plain&rnd=new`)
    .then(response => {
      updateResult(response.data);
    })
    .catch(_ => {
      updateResult("Error");
    })
}

function updateResult(value) {
  document.getElementById("result").innerHTML = value;
}