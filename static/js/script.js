const dice = ["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100"];

window.onload = () => {

  dice.forEach(die => {
    document.getElementById(die).addEventListener("click", _ => {
      let quantity = document.getElementById(`${die}-quantity`).value;
      rollDice(die.substring(1), quantity)
    })
  })
}

function rollDice(numberOfFaces, numberOfDice) {
  updateResult("--")
  updateRolled("--")

  axios.get(`https://www.random.org/integers/?num=${numberOfDice}&min=1&max=${numberOfFaces}&col=${numberOfDice}&base=10&format=plain&rnd=new`)
    .then(response => {
      let rolled = '';
      let result = '';

      if (numberOfDice > 1) {
        rolled = response.data;
        let values = response.data.split("\t")
        result = getSumOfList(values)
      } else {
        result = response.data;
        rolled = response.data;
      }

      updateResult(result)
      updateRolled(rolled)
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

function getSumOfList(list) {
  return list.reduce((a, b) => {
    return parseInt(a) + parseInt(b)
  }, 0)
}