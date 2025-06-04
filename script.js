function play() {
  // Disable button during animation
  const button = document.querySelector("button");
  button.disabled = true;
  
  // Add rolling class to dice
  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");
  
    dice1.style.animation = 'none';
    dice2.style.animation = 'none';
    void dice1.offsetWidth;
    void dice2.offsetWidth;
    dice1.style.animation =  null;
    dice2.style.animation = null;

  // Generate random numbers
  const randomNumber1 = Math.ceil(Math.random() * 6);
  const randomNumber2 = Math.ceil(Math.random() * 6);

  // Update dice images after a short delay
  setTimeout(() => {
    dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    // Update result text
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "Player 1 Wins! 🎉";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").textContent = "Player 2 Wins! 🎉";
    } else {
      document.querySelector("h1").textContent = "Draw! 🤝";
    }

    // Re-enable button
    button.disabled = false;
  }, 500); // Match this with the CSS animation duration
}

const element = document.querySelector("button");
element.addEventListener("click", () => play());   


