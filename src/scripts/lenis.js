import Lenis from "lenis";

const easePutQuart = (x) => {
  return 1 - Math.pow(1 - x, 4);
};

const lenis = new Lenis({
  lerp: 0.2,
  duration: 1,
  easing: easePutQuart,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
