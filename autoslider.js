function doc(val) {
  return document.getElementById(val);
}

let links = [
  "randy-tarampi-U2eUlPEKIgU-unsplash.jpg",
  "drew-beamer-Vc1pJfvoQvY-unsplash.jpg",
  "carolyn-christine-D7bmnvGJA2Q-unsplash.jpg",
];

let dots = doc("dots");
let image = doc("image");
let prev = doc("prev");
let next = doc("next");
let prog = doc("progress");

let i = 0;
for (let link of links) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.onclick = function () {
    image.src = link;
    dots.childNodes[i].classList.remove("active");
    i = links.findIndex(function (val) {
      return val == link;
    });
    dots.childNodes[i].classList.add("active");
    //dot.onclick func is equal to this.link
  };
  dots.appendChild(dot);
}
dots.childNodes[i].classList.add("active");

function change() {
  image.src = links[i];
  dots.childNodes[i].classList.remove("active");
  i++;
  if (i == links.length) {
    i = 0;
  }
  dots.childNodes[i].classList.add("active");
}

function progress() {
  let a = 0;
  setInterval(() => {
    a++;
    prog.style.width = a + "%";
    if (a == 100) {
      a = 0;
      change();
    }
  }, 50);
}
progress();
