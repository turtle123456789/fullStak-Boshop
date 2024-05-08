import Slider from "react-slick";
import CardProductComponent from "../CardProductComponent/CardProductComponent";
import './style.scss'

const SlideComponent = (props)=>{
    const {numberslide, numberShow} = props
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: numberShow,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay:true,
        centerPadding: "0px",

      };
    return(
        <Slider {...settings}>
            {Array.from({length:numberslide},(_,index)=>(
                <div className="slideCenter" key={index}>
                    <CardProductComponent  numberShow={1}/>
                </div>
            ))}
        </Slider>
    )
}
export default SlideComponent