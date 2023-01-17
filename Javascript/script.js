const bigImg = document.querySelector(".big-img");
const smallImg = document.querySelector(".small-img");
const smallImages = document.querySelectorAll(".small");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const all = document.querySelectorAll(".rounded-4");
const images = document.querySelector(".images");
const close = document.querySelector(".close");
const header = document.getElementsByName("nav");
const left = document.querySelector(".left");

for (let i = 0; i < smallImg.children.length; i++) {
  smallImg.children[i].addEventListener("click", function () {
    smallImages.forEach((small) => {
      small.classList.remove("blur");
    });
    smallImg.children[i].classList.add("blur");
    for (let j = 0; j < bigImg.children.length; j++) {
      bigImg.children[j].classList.remove("d-flex");
      bigImg.children[j].classList.add("d-none");
    }
    bigImg.children[i].classList.add("d-flex");
    bigImg.children[i].classList.remove("d-none");
  });
}
let index;

for (let i = 0; i < bigImg.children.length; i++) {
  if (bigImg.children[i].classList.contains("d-flex") == true) {
    index = i;
  }
}

next.addEventListener("click", function () {
  all.forEach(function (img) {
    img.classList.add("d-none");
  });
  index = (index + 1) % bigImg.children.length;
  bigImg.children[index].classList.remove("d-none");
});
prev.addEventListener("click", function () {
  all.forEach(function (img) {
    img.classList.add("d-none");
  });
  index = (index - 1 + bigImg.children.length) % bigImg.children.length;
  bigImg.children[index].classList.remove("d-none");
});

// bigImg.children[0].addEventListener('click', function(){
//     document.body.classList.add('body')
// })

all.forEach(function (img) {
  img.addEventListener("click", function () {
    // document.body.classList.add('body')
    images.classList.add("zoom");
    prev.classList.remove("d-none");
    next.classList.remove("d-none");
    close.classList.remove("d-none");
  });
});

close.addEventListener("click", function () {
  images.classList.remove("zoom");
  prev.classList.add("d-none");
  next.classList.add("d-none");
  close.classList.add("d-none");
});

// the start of part two

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const increment = document.querySelector(".increment");
let count = 0;
plus.addEventListener("click", function () {
  count++;
  increment.innerHTML = count;
});
minus.addEventListener("click", function () {
  if (count === 0) {
    count = count;
  } else {
    count--;
    increment.innerHTML = count;
  }
});

const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("d-none");
  if (notify.innerHTML == 0) {
    cartFilled.classList.add("d-none");
    cartEmpty.classList.remove("d-none");
  } else {
    cartFilled.classList.remove("d-none");
    cartEmpty.classList.add("d-none");
  }
});

const notify = document.querySelector(".notify");

if (notify.innerHTML == 0) {
  notify.classList.add("d-none");
} else {
  notify.classList.remove("d-none");
}

const btnCart = document.querySelector(".btn-cart");

const cartEmpty = document.querySelector(".cart-empty");
const cartFilled = document.querySelector(".cart-filled");

btnCart.addEventListener("click", function () {
  let nber = increment.innerHTML;
  notify.classList.remove("d-none");
  notify.innerHTML = nber;
  if (notify.innerHTML == 0) {
    cartFilled.classList.add("d-none");
    cartEmpty.classList.remove("d-none");
  } else {
    cartFilled.classList.remove("d-none");
    cartEmpty.classList.add("d-none");
  }
  let price = "$" + 125.0;
  let total = 125 * nber;
  multiply.innerHTML = price + ' * '+ nber
  result.innerHTML = "$" + total;
});

const result = document.querySelector(".result");
const multiply = document.querySelector('.multiply')
const erase = document.querySelector('.delete')

erase.addEventListener('click', function(){
    cartFilled.classList.add('d-none')
    cartEmpty.classList.remove('d-none')
    count = 0
    increment.innerHTML = 0
    notify.innerHTML = 0
})

