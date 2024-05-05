import { Button, Image } from "react-bootstrap"
import authentic from '../../assets/images/authentic.png'
import cashOnDelivery from '../../assets/images/cash-on-delivery.png'
import returnBox from '../../assets/images/return-box.png'
import skinCare from '../../assets/images/skin-care.png'
import logo from '../../assets/images/Logo.png'
import locationPin from '../../assets/icon/location-pin.svg'
import phone from '../../assets/icon/phone.svg'
import email from '../../assets/icon/email.svg'
import visa from '../../assets/images/visa.png'
import vnpay from '../../assets/images/vnpay.png'
import jcb from '../../assets/images/jcb.png'
import moit from '../../assets/images/moit.png'
import masterCard from '../../assets/images/masterCard.png'
import './style.scss'
const FooterComponent = ()=>{
    return(
    <footer className="footer">
        <div className="footer_top">
            <div>
                <Image src={authentic}/>
                <span>Mỹ phẩm chính hãng</span>
                <p>Sản phẩm đa dạng, giá tốt nhất từ các thương hiệu uy tín</p>
            </div>
            <div>
                <Image src={cashOnDelivery}/>
                <span>Giao hàng toàn quốc</span>
                <p>Miễn phí vận chuyển đơn hàng từ 99k</p>
            </div>
            <div>
                <Image src={returnBox}/>
                <span>7 ngày đổi trả miễn phí</span>
                <p>Chính sách hậu mãi hấp dẫn, luôn đảm bảo quyền lợi khách hàng</p>
            </div>
            <div>
                <Image src={skinCare}/>
                <span>Miễn phí tư vấn các vấn đề về da</span>
                <p>Liên hệ Hotline 1900 7101 để được tư vấn</p>
            </div>
        </div>
        <div className="appcontainer">
            <div className="footer_main">
                <div style={{maxWidth:"410px"}}>
                    <h3>Thông tin liên hệ</h3>
                    <div className="footer_main_logo">
                        <Image src={logo}/>
                    </div>
                    <p>Chuỗi Cửa Hàng Phân Phối Mỹ Phẩm Chính Hãng Giá Tốt với 100+ thương hiệu chuyên sỉ & lẻ tại TP. Hồ Chí Minh. Hoạt động vững mạnh từ năm 2011.</p>
                    <br />
                    <p>HỘ KINH DOANH BO SHOP</p>
                    <p>Giấy chứng nhận đăng ký kinh doanh số 41O8026919, Mã số thuế số 0314070738, cấp ngày 04 tháng 10 năm 2013 tại Thành phố Hồ Chí Minh</p>
                    <ul>
                        <span><Image src={locationPin}/>HỆ THỐNG CỬA HÀNG</span>
                        <li>Chi nhánh 153 Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh</li>
                        <li>Chi nhánh 117 Vũ Huy Tấn, Phường 03, Quận Bình Thạnh, Thành phố Hồ Chí Minh</li>
                        <li>Chi nhánh 679A Âu Cơ, Phường Tân Thành, Quận Tân Phú, Thành phố Hồ Chí Minh</li>
                        <li>Chi nhánh 006 Quang Trung, Phường 10, Quận Gò Vấp, Thành phố Hồ Chí Minh</li>
                    </ul>
                    <span><Image src={phone}/>0773322152 - 0795718425</span>
                    <br />
                    <span><Image src={email}/>phamducquy140302@gmail.com</span>
                </div>
                <div>
                    <h3>Về chúng tôi</h3>
                    <li>Câu chuyện thương hiệu</li>
                    <li>Thương hiệu</li>
                    <li>Tin tức</li>
                    <li>Kinh nghiệm làm đẹp</li>
                    <li>Hệ thống cửa hàng</li>
                    <li>Tuyển dụng</li>
                </div>
                <div>
                    <h3>Chính sách</h3>
                    <li>Chính sách bảo mật</li>
                    <li>Chính sách giao hàng</li>
                    <li>Chính sách đổi trả</li>
                    <li>Điều khoản sử dụng</li>
                    <li>Hướng dẫn mua hàng</li>
                </div>
                <div style={{maxWidth:"240px",width:"100%"}}>
                    <h3>Đăng ký nhận tin</h3>
                    <form action="">
                        <input type="text" placeholder="Nhập địa chỉ email" />
                        <Button>Đăng ký</Button>
                    </form>
                    <h3>Phương thức thanh toán</h3>
                    <div>
                        <div>
                            <Image src={visa}/>
                        </div>
                        <div>
                            <Image src={masterCard}/>
                        </div>
                        <div>
                            <Image src={jcb}/>
                        </div>
                        <div>
                            <Image src={vnpay}/>
                        </div>
                    </div>
                    <Image src={moit}/>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default FooterComponent