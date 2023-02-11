const btn = document.getElementById("duration");
var monthly = 0;
btn.addEventListener("click", (e) => {
  monthly++;
  if (monthly % 4 == 0) {
    document.getElementById("basic").innerHTML =
      '<span class="text-2xl">&dollar;</span>199.99';

    document.getElementById("prof").innerHTML =
      '<span class="text-2xl">&dollar;</span>249.99';

    document.getElementById("master").innerHTML =
      '<span class="text-2xl">&dollar;</span>399.99';
  } else {
    document.getElementById("basic").innerHTML =
      '<span class="text-2xl">&dollar;</span>19.99';
    document.getElementById("prof").innerHTML =
      '<span class="text-2xl">&dollar;</span>24.99';
    document.getElementById("master").innerHTML =
      '<span class="text-2xl">&dollar;</span>39.99';
  }
});
