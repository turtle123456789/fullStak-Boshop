
import { Button, Image } from 'react-bootstrap'
import helpline from '../../assets/icon/helpline.svg' 
import login from '../../assets/icon/login.svg' 
import shoppingCart from '../../assets/icon/shopping-cart.svg' 
import Logo from '../../assets/images/Logo.png'
import bannerTop from '../../assets/images/bannerTop.png'
import loupe from '../../assets/icon/loupe.svg'
import './style.scss'
import { Link } from 'react-router-dom'
const HeaderComponent = ()=>{
    return(
        <header className="header ">
            <Image src={bannerTop} fluid/>
            <div className="header_menu appcontainer">
                <Link  to='/' className="header_menu_logo">
                    <Image src={Logo}/>
                </Link>
                <div className="header_menu_navbar">
                    <form action="">
                        <input type="text" placeholder="Tìmkiếm..."/>
                        <Button><Image src={loupe}/></Button>
                    </form>
                    <div className="menu_navbar_uses">
                        <Link to="/product">Chăm sóc da mặt</Link>
                        <Link to="/product">Chăm sóc toàn thân</Link>
                        <Link to="/product">Chăm sóc tóc</Link>
                        <Link to="/product">Sale</Link>
                    </div>
                </div>
                <div className="header_menu_other">
                    <Link><Image src={helpline}/></Link>
                    <span>0795718425</span>
                    <div>
                        <Image src={login}/><Link to='/login'>Đăng nhập</Link>/<Link to='/register'>Đăng ký</Link>
                    </div>
                    <div>
                        <Link to="/checkoutpage"><Image src={shoppingCart}/></Link><span>5</span>
                    </div>
                </div>
            </div>
        </header>
    
    )
}
export default HeaderComponent