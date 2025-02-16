const root = document.documentElement;
const marquee1ElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee1-elements-displayed");
const marquee1Content = document.querySelector("ul.marquee1-content");

root.style.setProperty("--marquee1-elements", marquee1Content.children.length);

for(let i=0; i<marquee1ElementsDisplayed; i++) {
  marquee1Content.appendChild(marquee1Content.children[i].cloneNode(true));
}