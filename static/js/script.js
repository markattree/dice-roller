window.onload = () => {
  document.getElementById("d2").addEventListener("click", (_) => {
    let quantity = document.getElementById("d2-quantity").value
    rollDice(2, quantity)
  });
  document.getElementById("d4").addEventListener("click", (_) => {
    let quantity = document.getElementById("d4-quantity").value
    rollDice(4, quantity)
  });
  document.getElementById("d6").addEventListener("click", (_) => {
    let quantity = document.getElementById("d6-quantity").value
    rollDice(6, quantity)
  });
  document.getElementById("d8").addEventListener("click", (_) => {
    let quantity = document.getElementById("d8-quantity").value
    rollDice(8, quantity)
  });
  document.getElementById("d10").addEventListener("click", (_) => {
    let quantity = document.getElementById("d10-quantity").value
    rollDice(10, quantity)
  });
  document.getElementById("d12").addEventListener("click", (_) => {
    let quantity = document.getElementById("d12-quantity").value
    rollDice(12, quantity)
  });
  document.getElementById("d20").addEventListener("click", (_) => {
    let quantity = document.getElementById("d20-quantity").value
    rollDice(20, quantity)
  });
  document.getElementById("d100").addEventListener("click", (_) => {
    let quantity = document.getElementById("d100-quantity").value
    rollDice(100, quantity)
  });
}

function rollDice(numberOfFaces, numberOfDice) {
  updateResult("--")
  updateRolled("--")
  return axios.get(`https://www.random.org/integers/?num=${numberOfDice}&min=1&max=${numberOfFaces}&col=1&base=10&format=plain&rnd=new`)
    .then(response => {
      if (numberOfDice > 1) {
        let values = response.data.split("\n");
        values.pop();
        let rolled = values.join(" ");
        let result = values.reduce((a, b) => {
          return parseInt(a) + parseInt(b)
        }, 0)
        updateRolled(rolled)
        updateResult(result);
      } else {
        updateResult(response.data)
        updateRolled(response.data)
      }
    })
    .catch(error => {
      console.error(error);
      updateResult("Error");
    })
}

function updateResult(value) {
  document.getElementById("result").innerHTML = value;
}

function updateRolled(value) {
  document.getElementById("rolled").innerHTML = value;
}