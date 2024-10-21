let btn = document.getElementById("incrementBtn");

btn.addEventListener("click", () => {
  let count = document.getElementById("counter");

  let counterNum = parseInt(count.innerText);

  alert(counterNum);
  count.innerText = counterNum + 1;
});
