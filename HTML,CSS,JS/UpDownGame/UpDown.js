const random = Math.ceil((Math.random() * 100) / 1);

const input = document.getElementsByTagName("input")[0];

const button = document.getElementsByTagName("button")[0];

const numbers = document.getElementsByClassName("number")[0];

const error = document.getElementById("Error");

const UpDown = document.querySelector(".UpDown");

console.log(UpDown);

function buttonClickEvant() {
  if (input.value >= 0 && input.value <= 100) {
    const num = document.createElement("p");
    num.innerText = input.value;
    numbers.appendChild(num);

    error.style.backgroundColor = "transparent";
    error.innerText = "";

    if (input.value < random) {
      console.log("Up");
      UpDown.innerText = "Up";
    } else if (input.value > random) {
      console.log("Down");
      UpDown.innerText = "Down";
    } else {
      console.log("정답");
      alert("정답입니다.");
      location.reload();
    }
  } else {
    console.log("에러입니다");
    error.style.backgroundColor = "red";
    error.innerText = "0 부터 100까지의 값만 입력 가능합니다";
  }

  input.value = "";
}

function keypressEvent(e) {
  if (e.key === "Enter" && input.value !== "") {
    buttonClickEvant();
  }
}

button.addEventListener("click", buttonClickEvant);
window.addEventListener("keypress", keypressEvent);
