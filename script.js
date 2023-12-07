let volumeInput = document.getElementById("volume");
let calculate = document.getElementById("calculate");

function volume_sphere() {
  let radiusInput = document.getElementById("radius").value;

  const volume = (4 / 3) * Math.PI * Math.pow(radiusInput, 3);
  console.log(radiusInput);
  console.log(volume);
  volumeInput.value = volume;
}

calculate.addEventListener("click", () => {
  volume_sphere();
});
