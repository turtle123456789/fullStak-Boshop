import { Button, CloseButton, Form, Image, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cod from '../../assets/icon/cod.svg'
import vnpay from '../../assets/icon/vnpay.svg'
import sendMoney from '../../assets/icon/send-money.svg'
import ReCAPTCHA from "react-google-recaptcha";
import './style.scss'
import oder1 from '../../assets/images/Oder/oder1.png'
import { useState } from 'react'
import FormCountComponent from '../../Components/FormCountComponent/FormCountComponent'
const CheckoutPage = () => {
    const [captcha, setCaptcha] = useState("")
    const handleCaptcha=(value)=>{
        setCaptcha(value)
    }
    return(
        <div className="checkoutpage">
            <div>
                <div>
                    <h1>Thông tin vận chuyển</h1>
                    <h4>Bạn đã có tài khoản? <Link>Đăng nhập ngay</Link></h4>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" className='me-3 ' placeholder="Họ và tên" />
                        <Form.Control type="tel" className='ma-3 ' placeholder="Số điện thoại" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control type="text" placeholder="Địa chỉ" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTempAddress">
                        <Form.Select className='me-3' aria-label="Default select example">
                            <option>Chọn Tỉnh/Thành</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select className='me-3' aria-label="Default select example">
                            <option>Chọn Quận/Huyện</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example">
                            <option>Chọn Phường/Xã</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control type="text" placeholder="Ghi chú thêm (Ví dụ: Giao giờ hành chính)" />
                    </Form.Group>
                </Form>
                <h1>Hình thức thanh toán</h1>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Radio  aria-label="Radio button for following text input" />
                        <Image src={cod}/>
                        <span>COD <br /> Thanh toán khi nhận hàng</span>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Radio  aria-label="Radio button for following text input" />
                        <Image src={vnpay}/>
                        <span>Thẻ ATM / Internet Banking <br /> Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card) <br /> VNPay QR</span>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Radio  aria-label="Radio button for following text input" />
                        <Image src={sendMoney}/>
                        <span>Chuyển khoản</span>
                    </InputGroup>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <ReCAPTCHA
                        sitekey="6LfhxtgpAAAAANORv6R7s5oRKCxkhLy_fdlU_aKf"
                        onChange={handleCaptcha}
                    />,
                </div>
                <Button variant="secondary" disabled={!captcha}>Thanh toán</Button>
            </div>
            <div>
                <h1>Giỏ hàng</h1>
                <div className="checkoutpage_product">
                    <div>
                        <div><Image src={oder1}/><span>4</span></div>
                        <div>
                            <div>
                                <h4>Nước Tẩy Trang Làm Sạch Sâu 3 In 1 L'Oreal Micellar Water Deep Cleansing | 400ML</h4>
                                <CloseButton />
                            </div>
                            <div>
                                <FormCountComponent/>
                                <div>
                                    <h3>339.000 đ</h3>
                                    <h4>400.000 đ</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={oder1}/><span>4</span></div>
                        <div>
                            <div>
                                <h4>Nước Tẩy Trang Làm Sạch Sâu 3 In 1 L'Oreal Micellar Water Deep Cleansing | 400ML</h4>
                                <CloseButton />
                            </div>
                            <div>
                                <FormCountComponent/>
                                <div>
                                    <h3>339.000 đ</h3>
                                    <h4>400.000 đ</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={oder1}/><span>4</span></div>
                        <div>
                            <div>
                                <h4>Nước Tẩy Trang Làm Sạch Sâu 3 In 1 L'Oreal Micellar Water Deep Cleansing | 400ML</h4>
                                <CloseButton />
                            </div>
                            <div>
                                <FormCountComponent/>
                                <div>
                                    <h3>339.000 đ</h3>
                                    <h4>400.000 đ</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Mã giảm giá"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        Áp dụng
                        </Button>
                    </InputGroup>
                </div>
                <div className='checkoutpage_totalprice'>
                    <div>
                        <h4>Tạm tính</h4> 
                        <div>
                            <h4>839.000 đ</h4>
                            <p>(tiết kiệm 88k)</p>
                        </div>
                    </div>
                    <div>
                        <h4>Giảm giá</h4> 
                        <div>
                            <h4>0 đ</h4>
                        </div>
                    </div>
                    <div>
                        <h4>Phí giao hàng</h4> 
                        <div>
                            <h4>Miễn phí</h4>
                        </div>
                    </div>
                    <div>
                        <h4>Tổng</h4> 
                        <div>
                            <h3>839.000 đ</h3>
                            <p>(Đã giảm 26% trên giá gốc)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckoutPage