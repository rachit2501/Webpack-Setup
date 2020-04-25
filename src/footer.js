import { red, blue } from "./button-styles";
//appends prefetch attribute to rel in link in html .... which makes the loading of chucnk when the browser is idle
const getLodash = ()=>import(/* webpackPrefetch: true */"lodash");
const top = document.createElement("div");
top.innerText = "Top of Footer";
top.style = red;
const bottom = document.createElement("div");
bottom.innerText = "Bottom of Footer";
bottom.style = blue;

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
