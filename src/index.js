import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import {footer} from './footer';
import './button.css';
import './footer.css';
import imageUrl from './download.jpeg';
import makeImage from './image';

const image = makeImage(imageUrl);
const button  = makeButton("Button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);