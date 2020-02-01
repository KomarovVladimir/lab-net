//styles
import "../css/vendors/bootstrap.css";
import "normalize.css";
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import "../scss/main.scss";
import "animate.css/animate.min.css";

//js
import "./header";
import WOW from "wow.js/dist/wow.min.js";
import "owl.carousel/dist/owl.carousel.min.js";

new WOW().init();

$(document).ready(function(){
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        nav: true,
        navContainerClass: "owl-nav carousel__pagination",
        navClass: ["carousel__arrow carousel__arrow_left", "carousel__arrow carousel__arrow_right"],
        navText: ""
    });
    const items =$(".owl-item").length;
    $(`<span id='carousel-pagination' class='carousel__page'>1 / ${items}</span>`).insertAfter(".carousel__arrow_left");
    let paginator = $("#carousel-pagination");

    owl.on("changed.owl.carousel", function(e) {
        $(paginator).text(`${e.item.index + 1} / ${items}`);
    });
});