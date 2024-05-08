import { Image, ProgressBar } from "react-bootstrap"
import './style.scss'
import product1 from '../../assets/images/Products/product1.png'
import StarRatings from "react-star-ratings"
import heart from '../../assets/icon/heart.svg'
import shoppingCart from '../../assets/icon/shopping-cart.svg'
import { Link } from "react-router-dom"
const CardProductComponent = (props) =>{
    const {numberShow} = props
    return(<>
            {Array.from({length:numberShow},(_,index)=>(
                <div key={`product-${index}`}>
                    <div  className="cardProduct">
                        <div className="cardProduct_img">
                            <Image src={product1}/>
                        </div>
                        <Link to={'/productdetail'}>
                            <div className="cardProduct_content">
                                <span className="cardProduct_content_name crop-text1">
                                    BNBG
                                </span>
                                <p className="cardProduct_content_infor crop-text2">
                                    Son Tint Bóng Căng Mọng Hàn Quốc ROMAND Juicy Lasting Tint đa dạng màu phù hợp nhiều tông da
                                </p>
                                <div className="cardProduct_content_inforPrice">
                                    <div>
                                        <span className="priceDiscount">339.000 đ</span>
                                        <span className="priceOrigin">400.000 đ</span>
                                    </div>
                                    <span className="percent">10%</span>
                                </div>
                                <div className="cardProduct_commentInfor">
                                    <div >
                                        <StarRatings
                                        rating={2.5}
                                        starRatedColor={"var(--green)"}
                                        name='rating'
                                        />
                                        <span className="cardProduct_commentInforcommentNumber">
                                            (16)
                                        </span>
                                        <span className="cardProduct_commentInforbuyNumber">
                                            <Image src={shoppingCart}/><span>1000</span>
                                        </span>
                                    </div>
                                    <div className="buttonLike">
                                        <Image src={heart}/>
                                    </div>
                                </div>
                                <ProgressBar now={10} label={60} min={0} max={60}/>
                            </div>
                        </Link>
                    </div> 
                </div>
            ))}
        </>
    )
}
export default CardProductComponent