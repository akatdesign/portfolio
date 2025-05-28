import Lenis from "lenis";
/**
 * イージング関数
 * @see https://easings.net/ja
 * @param {number} x アニメーションの進行度（正規化された0から1までの値）
 * @return {number} イージングを適用した後の進行度（正規化された0から1までの値）
 */

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
