const nBtn = document.querySelector("#btn-No");
const yBtn = document.querySelector("#btn-Yes");
const image = document.querySelector("#img");
const caption = document.querySelector(".caption");
const sy = ["-", "+"];
const expression = [
  "https://media.tenor.com/3VRjsijNpDoAAAAi/yaseen.gif",
  "https://media.tenor.com/JvT9okzjIxUAAAAi/peachcat-and-goma-peachcat.gif",
];
let n_times_hover = 0;
nBtn.addEventListener("mousemove", (a) => {
  a.preventDefault();
  const x = Math.floor(Math.random() * 200);
  const y = Math.floor(Math.random() * 100);
  const i = Math.floor(Math.random() * 2);
  if (n_times_hover > 15) {
    image.setAttribute("src", expression[0]);
  } else if (n_times_hover > 30) {
    image.setAttribute("src", expression[1]);
  }
  console.log(n_times_hover);
  n_times_hover += 1;
  nBtn.style.translate = `${sy[i]}${x}px ${sy[1]}${y}px`;
});
yBtn.addEventListener("mouseover", () => {
  image.setAttribute(
    "src",
    "https://media.tenor.com/0tkCPVxDt1kAAAAi/dudu.gif"
  );
});

yBtn.addEventListener("click", (a) => {
  a.preventDefault();
  caption.querySelector(".img").src =
    "https://media1.tenor.com/m/K0EsVmke16IAAAAC/frog-run.gif";
  nBtn.remove();
  image.setAttribute(
    "src",
    "https://media.tenor.com/eiMqmu0vXz8AAAAi/kiss.gif"
  );
  caption.querySelector(".text").innerText = "Thank You my pookiewookie!";
  nBtn.remove();
  yBtn.remove();
});
