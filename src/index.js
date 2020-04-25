import nav from "./nav";
// import { footer } from "./footer";
const gsap = ()=>import('gsap');
const getFooter = ()=>import(/* webpackChunkName: "footer" */ "./footer");
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);
const setButtonStyles = (style)=>import(`./buttonStyles/${style}`)

button.addEventListener('click',e=>{
    getFooter().then(footerModule=>{
        document.body.appendChild(footerModule.footer)
    })
    gsap().then(g=>console.log(g))

    setButtonStyles("red").then(s=>{
        debugger;
        button.style =s.default
    })
})
document.body.appendChild(image);
