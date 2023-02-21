gsap.from(".logo", { duration: 1, x: -100, autoAlpha: 0 });

gsap.from(".navitem", {
  duration: 1,
  x: -10,
  autoAlpha: 0,
  stagger: 0.1,
});

const tl = gsap.timeline();

tl.from(".title", {
  duration: 0.5,
  y: 100,
  autoAlpha: 0,
  delay: 1,
});

tl.from(".tagline, .desc", {
  duration: 0.5,
  y: 100,
  autoAlpha: 0,
});

tl.from(".beercan", {
  duration: 0.5,
  y: -850,
});

tl.to(".beercan", {
  duration: 1,
  y: -15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
