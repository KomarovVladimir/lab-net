//styles
import "normalize.css";
import "../scss/main.scss";
import "animate.css/animate.min.css";
import "../css/vendors/bootstrap.css";

//js
import "./header";
import WOW from "wow.js/dist/wow.min.js";
import "./bootstrap.js";

new WOW().init();

// //init bootstrap's carousel
// $('.carousel').carousel({
//     interval: 2000
// });