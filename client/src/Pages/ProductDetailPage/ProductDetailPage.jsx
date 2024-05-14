import { useEffect, useState } from "react";
import productdetail0 from '../../assets/images/ProductDetails/productdetail0.png'
import productdetail1 from '../../assets/images/ProductDetails/productdetail1.png'
import productdetail2 from '../../assets/images/ProductDetails/productdetail2.png'
import productdetail3 from '../../assets/images/ProductDetails/productdetail3.png'
import productdetail4 from '../../assets/images/ProductDetails/productdetail4.png'
import shoppingCart from '../../assets/icon/shopping-cart.svg'
import shoppingCartWhite from '../../assets/icon/shopping-cartwhite.svg'
import creditCard from '../../assets/icon/credit-card.svg'
import heart from '../../assets/icon/heart.svg'
import Slider from "react-slick"
import { Button, Image, Modal, Nav, ProgressBar, Table } from "react-bootstrap";
import './style.scss'
import StarRatings from "react-star-ratings";
import SlideComponent from "../../Components/SlideComponent/SlideComponent";
import ReactPaginate from "react-paginate";
import FormCountComponent from "../../Components/FormCountComponent/FormCountComponent";
const ProductDetailPage = ()=>{
    const [changeImg,setChangeImg] = useState(productdetail0)
    const [activeCapacity, setActiveCapacity] = useState(null);
    const [show, setShow] = useState(false);
    const [rating, setRating] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const changeRating = (newRating, name) => {
        let updatedRating = newRating;
        if (newRating === 1) updatedRating = 1;
        if (newRating === rating) updatedRating -= 1;
        setRating(updatedRating);
    };
    const handleCapacityClick = (capacity) => {
        setActiveCapacity(capacity);
    };
    const handleChangeImg=(src)=>{
        setChangeImg(src)
    }
    const showFeedback= ()=>{
        document.getElementById("productDetail_reviews_feedback").style.display = "block"
    }
    const handleSelect = (eventKey)=>{
        document.querySelectorAll('.link-index').forEach(link => {
            link.classList.remove('active');
        });
        const selectedNavLink = document.querySelector(`.${eventKey}`);
        console.log('selectedNavLink', selectedNavLink)
        if (selectedNavLink) {
            selectedNavLink.classList.add('active');
        }
    }
    
    useEffect(()=>{
        document.querySelector('.link-0').classList.add("active");
    })
    const settings = {
        infinite: true,
        slidesToScroll: 1,
        speed: 500,
        slidesToShow: 5,
        swipeToSlide: true,
      };
    return(
        <div className="productDetail">
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body><Image src={productdetail0}/></Modal.Body>
                </Modal>
                <div className="productDetail_img">
                    <div>
                        <Image src={changeImg}/>
                    </div>
                    <Slider {...settings}>
                        <div onClick={()=>handleChangeImg(productdetail0)}>
                            <Image src={productdetail0}/>
                        </div>
                        <div onClick={()=>handleChangeImg(productdetail1)}>
                            <Image src={productdetail1}/>
                        </div>
                        <div onClick={()=>handleChangeImg(productdetail2)}>
                            <Image src={productdetail2}/>
                        </div>
                        <div onClick={()=>handleChangeImg(productdetail3)}>
                            <Image src={productdetail3}/>
                        </div>
                        <div onClick={()=>handleChangeImg(productdetail4)}>
                            <Image src={productdetail4}/>
                        </div>
                    </Slider>
                </div>
                <div className="productDetail_inf">
                    <div>
                        <h4>L'OREAL &gt;</h4>
                        <Image src={heart}/>
                    </div>
                    <h1>Nước Tẩy Trang Làm Sạch Sâu 3 In 1 L'Oreal Micellar Water Deep Cleansing</h1>
                    <div className="productDetail_inf_comment">
                        <StarRatings
                            rating={2.5}
                            starRatedColor={"var(--green)"}
                            name='rating'
                        />
                        <span>4 đánh giá</span>
                        <span><Image src={shoppingCart}/>1.145 đã bán</span>
                    </div>
                    <div className="productDetail_inf_price">
                        <div>
                            <h2>339.000 đ</h2>
                            <h3>400.000 đ</h3>
                            <span>15%</span>
                        </div>
                        <p>(Tiết kiệm: <span>61.000 đ</span>)</p>
                    </div>
                    <span>Dung tích</span>
                    <div className="productDetail_inf_capacity">
                        <div className={`capacity ${activeCapacity === "400ML" ? "active" : ""}`} onClick={() => handleCapacityClick("400ML")}>
                        400ML
                        </div>
                        <div className={`capacity ${activeCapacity === "95ML" ? "active" : ""}`} onClick={() => handleCapacityClick("95ML")}>
                        95ML
                        </div>
                    </div>
                    <span>Số lượng</span>
                    <FormCountComponent/>
                    <div className="productDetail_inf_button">
                        <Button><div><Image src={shoppingCartWhite}/></div> THÊM VÀO GIỎ HÀNG</Button>
                        <Button><div><Image src={creditCard}/></div> MUA NGAY</Button>
                    </div>
                </div>
            </div>
            <div>
                <Nav variant="underline" defaultActiveKey="link-0" onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="link-0">Thông số sản phẩm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Thành phần sản phẩm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Hướng dẫn sử dụng</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="productDetail_specifications link-index link-0">
                    <h3>Thông số sản phẩm</h3>
                    <Table bordered hover >
                        <tbody>
                            <tr>
                                <td>Barcode</td>
                                <td>6923700987782</td>
                            </tr>
                            <tr>
                                <td>Thương hiệu</td>
                                <td>L'OREAL</td>
                            </tr>
                            <tr>
                                <td>Giới tính</td>
                                <td>Nam & Nữ</td>
                            </tr>
                            <tr>
                                <td>Xuất xứ</td>
                                <td>Pháp</td>
                            </tr>
                            <tr>
                                <td>Loại da</td>
                                <td>Da dầu</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
                <div className="productDetail_ingredient link-index link-1">
                    <h3>Thành phần sản phẩm</h3>
                    <div>
                        <h4>1. L'Oréal Paris Micellar Water 3-in-1 Deep Cleansing Even For Sensitive Skin (Xanh dương đậm) <br />Thành phần sản phẩm:</h4>
                        <ul>
                            <li>Có hai lớp chất lỏng giúp hòa tan chất bẩn và loại bỏ toàn bộ lớp trang điểm hiệu quả, kể cả lớp trang điểm lâu trôi và không thấm nước chỉ trong một bước.</li>
                            <li>Lớp Micellar chứa các hạt mixen siêu nhỏ len lỏi sâu và dễ dàng lấy đi bụi bẩn, dầu thừa, lớp trang điểm và chất bẩn khác mà không làm khô da. Thành phần đầy đủ: Aqua / Water, Cyclopentasiloxane, Isohexadecane, Potassium Phosphate, Sodium Chloride, Dipotassium Phosphate, Disodium Edta, Decyl Glucoside, Hexylene Glycol, Polyaminopropyl Biguanide, CI 61565 / Green 6</li>
                        </ul>
                        <h4>2. L'Oréal Paris Micellar Water 3-in-1 Refreshing Even For Sensitive Skin (Xanh dương nhạt) <br />Thành phần sản phẩm:</h4>
                        <ul>
                            <li>Nước khoáng lấy từ những ngọn núi ở Pháp: làm dịu và giúp làn da trông tươi tắn lên sau khi tẩy trang. Thành phần đầy đủ: Aqua / Water, Hexylene Glycol, Glycerin, Poloxamer 184, Disodium Cocoamphodiacetate, Disodium Edta, BHT , Polyaminopropyl Biguanide</li>
                        </ul>
                        <h4>3. L'Oréal Paris Micellar Water 3-in-1 Moisturizing Even For Sensitive Skin (Hồng) <br />Thành phần sản phẩm:</h4>
                        <ul>
                            <li>Chiết xuất hoa hồng Pháp: cân bằng độ ẩm & làm mềm mịn da, làn da vẫn đủ độ ẩm sau khi tẩy trang. Thành phần đầy đủ: Aqua / Water, Hexylene Glycol, Glycerin, Rosa Gallica Flower Extract, Sorbitol, Poloxamer 184, Disodium Cocoamphodiacetate, Disodium Edta, Propylene Glycol, BHT , Polyaminopropyl Biguanide</li>
                        </ul>
                        <h4>4. L'Oréal Paris Revitalift Crystal Purifying Micellar Water (Trắng) <br />Thành phần sản phẩm:</h4>
                        <ul>
                            <li>Công nghệ micelles: hoạt động như một nam châm làm sạch, loại bỏ 5 loại tạp chất có trên da bạn hằng ngày, giúp lỗ chân lông thoáng sạch.</li>
                            <li>Glycerin: giúp cấp nước và giữ độ ẩm cho da, phục hồi và duy trì vẻ ngoài khỏe khoắn. Thành phần đầy đủ: Aqua / Water, Hexylene Glycol, Glycerin, Rosa Gallica Flower Extract, Sorbitol, Poloxamer 184, Disodium Cocoamphodiacetate, Disodium Edta, Propylene Glycol, BHT , Polyaminopropyl Biguanide</li>
                        </ul>
                        <h4>5. L'Oreal Paris Revitalift Hyaluronic Acid Hydrating Micellar Water (Tím) <br />Thành phần sản phẩm:</h4>
                        <ul>
                            <li>Hyaluronic Acid: giúp làm dịu và cấp ẩm da căng mọng từ bên trong, nuôi dưỡng da khỏe mạnh và sáng bóng. Thành phần đầy đủ: Aqua / Water, Hexylene Glycol, Glycer.</li>
                        </ul>
                    </div>
                </div>
                <div className="productDetail_manual link-index link-2">
                    <h3>Hướng dẫn sử dụng</h3>
                    <ul>
                        <li>Lắc đều sản phẩm Nước Tẩy Trang L'Oreal trước khi sử dụng.</li>
                        <li>Đổ nước tẩy trang thấm ướt vừa đủ lên miếng bông tẩy trang.</li>
                        <li>Nhẹ nhàng lau lên mặt, mắt và môi theo chuyển động tròn (Riêng đối với vùng mắt, bạn hãy giữ miếng bông tẩy trang trên mắt vài giây để nước tẩy trang thấm sâu và cuốn đi lớp make-up dễ dàng hơn).</li>
                        <li>Sử dụng để tẩy trang nhanh (không cần rửa lại với nước) khi bận rộn hoặc ở những nơi thiếu nước: khi đi du lịch, đi spa, đi gym, v.v...</li>
                        <li>Khuyến khích sử dụng quy trình chăm sóc da hoàn chỉnh để có hiệu quả dưỡng da tốt nhất (Nước tẩy trang - Sữa rửa mặt - Nước hoa hồng - Kem dưỡng).</li>
                    </ul>
                </div>
            </div>
            <div className="productDetail_reviews">
                <h3>Đánh giá</h3>
                <div className="productDetail_reviews_start">
                    <div>
                        <p>4.8</p>
                        <StarRatings
                            rating={4.8}
                            starRatedColor={"var(--green)"}
                            name='rating'
                        />
                        <br />
                        <span>(22 đánh giá)</span>
                    </div>
                    <div >
                        <li>
                            <StarRatings
                                rating={5}
                                starRatedColor={"var(--green)"}
                                name='rating'
                            />
                            <ProgressBar now={15} min={0} max={22}/>
                            <span>(15)</span>
                        </li>
                        <li>
                            <StarRatings
                                rating={4}
                                starRatedColor={"var(--green)"}
                                name='rating'
                            />
                            <ProgressBar now={5} min={0} max={22}/>
                            <span>(5)</span>
                        </li>
                        <li>
                            <StarRatings
                                rating={3}
                                starRatedColor={"var(--green)"}
                                name='rating'
                            />
                            <ProgressBar now={2} min={0} max={22}/>
                            <span>(2)</span>
                        </li>
                        <li>
                            <StarRatings
                                rating={2}
                                starRatedColor={"var(--green)"}
                                name='rating'
                            />
                            <ProgressBar now={0} min={0} max={22}/>
                            <span>(0)</span>
                        </li>
                        <li>
                            <StarRatings
                                rating={1}
                                starRatedColor={"var(--green)"}
                                name='rating'
                            />
                            <ProgressBar now={0} min={0} max={22}/>
                            <span>(0)</span>
                        </li>
                    </div>
                    <div>
                        <p>Chia sẻ đánh giá của bạn về sản phẩm này</p>
                        <Button onClick={showFeedback}>Viết đánh giá</Button>
                    </div>
                </div>
                <div className="productDetail_reviews_header">
                    <p>22 đánh giá cho sản phẩm này</p>
                    <select>
                        <option>Hôm nay</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div id="productDetail_reviews_feedback">
                    <p>Đánh giá về sản phẩm này</p>
                    <StarRatings
                        rating={rating}
                        changeRating={changeRating}
                        starRatedColor={"var(--green)"}
                        name='rating'
                    />
                    <p>Mô tả chi tiết</p>
                    <textarea placeholder="Nhập mô tả tại đây"></textarea>
                    <span>Thêm hình sản phẩm nếu có (tối đa 5 hình):</span><Button>Chọn hình</Button>
                    <div className="productDetail_reviews_imgs">
                        <div>
                            <Image onClick={handleShow} src={productdetail0}/>
                        </div>
                        <div>
                            <Image onClick={handleShow} src={productdetail0}/>
                        </div>
                    </div>
                </div>
                <div className="productDetail_reviews_comment">
                    <div>
                        <div>
                            <div>
                                <StarRatings
                                    rating={5}
            
                                    starRatedColor={"var(--green)"}
                                    name='rating'
                                />
                                <span>Đỗ Ngọc Trúc Vy</span> 
                                <span>Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml</span>
                            </div>
                            <span>23: 39 | 31/01/2023</span>
                        </div>
                        <span>Anh mình da dầu xài nắp màu xanh nhạt rất ok không bị kích ứng đâu nha màu nay thì không mùi khi xài rất dễ chịu còn mình hay make up nên xài bản màu xanh đậm khi xài phải lắc nó lên sau khi tẩy xong thì còn lại một ít dầu trên mặt mình nhưng rửa xơ lại là ok hai bản này sài xong da sạch không đâu rát không khích ứng không mùi nói chung là rất ok nha</span>
                        <div className="productDetail_reviews_imgs">
                            <div>
                                <Image onClick={handleShow} src={productdetail0}/>
                            </div>
                            <div>
                                <Image onClick={handleShow} src={productdetail0}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <StarRatings
                                    rating={5}
            
                                    starRatedColor={"var(--green)"}
                                    name='rating'
                                />
                                <span>Đỗ Ngọc Trúc Vy</span> 
                                <span>Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml</span>
                            </div>
                            <span>23: 39 | 31/01/2023</span>
                        </div>
                        <span>Anh mình da dầu xài nắp màu xanh nhạt rất ok không bị kích ứng đâu nha màu nay thì không mùi khi xài rất dễ chịu còn mình hay make up nên xài bản màu xanh đậm khi xài phải lắc nó lên sau khi tẩy xong thì còn lại một ít dầu trên mặt mình nhưng rửa xơ lại là ok hai bản này sài xong da sạch không đâu rát không khích ứng không mùi nói chung là rất ok nha</span>
                        <div className="productDetail_reviews_imgs">
                            <div>
                                <Image onClick={handleShow} src={productdetail0}/>
                            </div>
                            <div>
                                <Image onClick={handleShow} src={productdetail0}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <StarRatings
                                    rating={5}
            
                                    starRatedColor={"var(--green)"}
                                    name='rating'
                                />
                                <span>Đỗ Ngọc Trúc Vy</span> 
                                <span>Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml</span>
                            </div>
                            <span>23: 39 | 31/01/2023</span>
                        </div>
                        <span>Anh mình da dầu xài nắp màu xanh nhạt rất ok không bị kích ứng đâu nha màu nay thì không mùi khi xài rất dễ chịu còn mình hay make up nên xài bản màu xanh đậm khi xài phải lắc nó lên sau khi tẩy xong thì còn lại một ít dầu trên mặt mình nhưng rửa xơ lại là ok hai bản này sài xong da sạch không đâu rát không khích ứng không mùi nói chung là rất ok nha</span>
                        <div className="productDetail_reviews_imgs">
                            <div>
                                <Image onClick={handleShow} src={productdetail0}/>
                            </div>
                            <div>
                                <Image onClick={handleShow} src={productdetail0}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <StarRatings
                                    rating={5}
            
                                    starRatedColor={"var(--green)"}
                                    name='rating'
                                />
                                <span>Đỗ Ngọc Trúc Vy</span> 
                                <span>Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml</span>
                            </div>
                            <span>23: 39 | 31/01/2023</span>
                        </div>
                        <span>Anh mình da dầu xài nắp màu xanh nhạt rất ok không bị kích ứng đâu nha màu nay thì không mùi khi xài rất dễ chịu còn mình hay make up nên xài bản màu xanh đậm khi xài phải lắc nó lên sau khi tẩy xong thì còn lại một ít dầu trên mặt mình nhưng rửa xơ lại là ok hai bản này sài xong da sạch không đâu rát không khích ứng không mùi nói chung là rất ok nha</span>
                        <div className="productDetail_reviews_imgs">
                            <div>
                                <Image onClick={handleShow} src={productdetail0}/>
                            </div>
                            <div>
                                <Image onClick={handleShow} src={productdetail0}/>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate
                    nextLabel=" "
                    // onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    pageCount={4}
                    previousLabel=""
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
            <div className="productDetail_related">
                <h3>Sản phẩm liên quan</h3>
                <SlideComponent numberslide={7} numberShow={5}/>
            </div>
        </div>
    )
}
export default ProductDetailPage