document.querySelector("body").addEventListener("mousemove", eyeMove);

function eyeMove() {
  const eye = document.querySelectorAll(".eye");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (5000 / Math.PI) * -1 + 180;
    eye.style.transform = `rotate(${rot}deg)`;
  });
}
