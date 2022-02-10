const newArray = [];

function getCustomerNumber() {
  return Math.floor(Math.random() * 32);
}

function creatBar() {
  const newBar = document.createElement("div");
  const queueSize = getCustomerNumber();

  newBar.classList.add("bar");
  newBar.style.height = `${queueSize * 3}px`;

  newArray.unshift(document.querySelector("main").appendChild(newBar));
}

function displayBar() {
  if (newArray.length < 40) {
    creatBar();
  } else {
    creatBar();
    newArray.length = 40;

    newArray[newArray.length - 1].remove();
  }
  setTimeout(displayBar, 1000);
}

displayBar();
