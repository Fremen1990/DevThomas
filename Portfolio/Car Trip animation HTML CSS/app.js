const btnLetsGo = document.getElementById("go");
const background = document.querySelector(".car-trip__background");
const vehicle = document.querySelector(".car-trip__car");
let buttonFlagGo = false;

btnLetsGo.addEventListener("click", () => {
  startStopBtn();
});

const startStopBtn = () => {
  if (buttonFlagGo) {
    background.classList.remove("car-trip__background-stop");
    background.classList.add("car-trip__background");
    vehicle.classList.remove("car-trip__car");
    vehicle.classList.add("car-trip__car-start");
    btnLetsGo.classList.remove("car-trip__stop");
    buttonFlagGo = !buttonFlagGo;
    console.log(buttonFlagGo);
    setTimeout(
      (showStopBtn = () => {
        btnLetsGo.classList.add("car-trip__stop");
        btnLetsGo.innerHTML = "STOP!";
      }),
      1000
    );
  } else {
    if (!buttonFlagGo) {
      background.classList.remove("car-trip__background");
      background.classList.add("car-trip__background-stop");
      vehicle.classList.remove("car-trip__car-start");
      vehicle.classList.add("car-trip__car");
      btnLetsGo.classList.remove("car-trip__stop");
      btnLetsGo.classList.add("car-trip__go");
      btnLetsGo.innerHTML = "LET'S GO!!";
      buttonFlagGo = !buttonFlagGo;
      console.log(buttonFlagGo);
    }
  }
};
