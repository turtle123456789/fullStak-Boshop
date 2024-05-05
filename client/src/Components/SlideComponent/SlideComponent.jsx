import Slider from "react-slick";
import CardProductComponent from "../CardProductComponent/CardProductComponent";
import './style.scss'

const SlideComponent = ()=>{
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        centerPadding: "0px",

      };
    return(
        <Slider {...settings}>
            <div className="slideCenter"><CardProductComponent/></div>
            <div className="slideCenter"><CardProductComponent/></div>
            <div className="slideCenter"><CardProductComponent/></div>
            <div className="slideCenter"><CardProductComponent/></div>
            <div className="slideCenter"><CardProductComponent/></div>
            <div className="slideCenter"><CardProductComponent/></div>
        </Slider>
    )
}
export default SlideComponent