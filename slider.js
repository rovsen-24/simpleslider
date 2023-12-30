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

let img = getComputedStyle(image)

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

prev.onclick = function () {
  dots.childNodes[i].classList.remove("active");
  i--;
  change();
  dots.childNodes[i].classList.add("active");
};

next.onclick = function () {
  dots.childNodes[i].classList.remove("active");
  i++;
  change();
  dots.childNodes[i].classList.add("active");
};

function change() {
  if (i == links.length) {
    i = 0;
  }
  if (i == -1) {
    i = links.length - 1;
  }
  image.src = links[i];
}







