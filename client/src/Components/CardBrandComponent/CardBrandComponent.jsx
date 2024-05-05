import { Image } from 'react-bootstrap'
import brand from '../../assets/images/Brand/brand1.png'
import './style.scss'
const CardBrandComponent = ()=>{
    return(
        <div className="cardBrand">
            <Image src={brand}/>
            <span>La Roche-Posay</span>
        </div>
    )
}
export default CardBrandComponent