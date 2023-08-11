function start() {
  let counterEle = document.querySelector(".counter");
  let currVal = 0;

  function counterUpdate() {
    if (currVal === 100) {
      return;
    }
    currVal += Math.floor(Math.random() * 4) + 1;

    if (currVal > 100) {
      currVal = 100;
    }
    counterEle.textContent = currVal;

    let delay = Math.floor(Math.random * 100) + 50;
    setTimeout(counterUpdate, delay);
  }
  counterUpdate();
}
start();

gsap.to(".counter", 0.25, {
  delay: 1.5,
  opacity: 0,
});

gsap.to(".bar", 1.5, {
  delay: 2.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".h1", 1.5, {
  delay: 2.85,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".hero", 2, {
  delay: 3.5,
  y: 400,
  ease: "power4.inOut",
});
