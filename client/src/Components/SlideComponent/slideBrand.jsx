import Slider from "react-slick";
import './style.scss'
import CardBrandComponent from "../CardBrandComponent/CardBrandComponent";

const SlideComponentbrand = ()=>{
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
      };
    return(
        <Slider {...settings} style={{maxWidth: '850px',justifyContent:'space-between'}}>
            <div className="slideCenter"><CardBrandComponent/></div>
            <div className="slideCenter"><CardBrandComponent/></div>
            <div className="slideCenter"><CardBrandComponent/></div>
            <div className="slideCenter"><CardBrandComponent/></div>
            <div className="slideCenter"><CardBrandComponent/></div>
            <div className="slideCenter"><CardBrandComponent/></div>
        </Slider>
    )
}
export default SlideComponentbrand