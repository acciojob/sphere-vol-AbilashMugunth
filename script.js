let calculate = document.getElementById("calculate");


function volume_sphere() {
  let radiusInput = document.getElementById("radius").value;
  let volumeInput = document.getElementById("volume");
  let volume = (4 / 3) * Math.PI * Math.pow(radiusInput, 3);
  volumeInput.value = volume;
}

calculate.addEventListener("click", () => {
  volume_sphere();
});
