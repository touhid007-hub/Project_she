const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Knew it,You love me a lot! 😘";
  gif.src =
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTB5eHcxenR2NnI0YmF4Y21jdXFsZXJmc3d3Y21qY2lxNGJleXNrZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jtoxkCzzdm3pmzGgjz/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
