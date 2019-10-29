import { TimelineMax } from "gsap/all"

export default function svgAnimations(animations, base) {
  Object.keys(animations).map((txt, i) => {
    const [src, parent] = [
      base.replace("<!>", txt),
      document.getElementById(txt),
    ]

    fetch(src)
      .then(res => res.text())
      .then(svg => {console.log(new TimelineMax());
        parent.innerHTML = svg + parent.innerHTML;
        return !i ? animations[txt](`#${txt}`, new TimelineMax()) : null;
      })
  })
}
