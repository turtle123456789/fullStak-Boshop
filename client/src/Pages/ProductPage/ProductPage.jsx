import { Accordion, Button, Carousel, Form, Image } from 'react-bootstrap'
import bannerProduct0 from '../../assets/images/bannerProduct0.png'
import bannerProduct1 from '../../assets/images/bannerProduct1.png'
import './style.scss'
import CardProductComponent from '../../Components/CardProductComponent/CardProductComponent'
import ReactPaginate from 'react-paginate'
const ProductPage = ()=>{
    return(
    <div className="LayoutProductPage">
        <div className="LayoutProductPage_left">
            <span>Danh mục</span>
            <h3>CHĂM SÓC TÓC & DA ĐẦU</h3>
            <div>
                <Accordion defaultActiveKey={['0','1','2','3','4','5']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>DANH MỤC SẢN PHẨM</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Dầu gội - Dầu xả"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox1"
                                    label="Kem ủ"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox2"
                                    label="Dầu dưỡng tóc"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox3"
                                    label="Chăm sóc da mặt"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox4"
                                    label="Trang điểm"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox5"
                                    label="Chăm sóc cơ thể"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox6"
                                    label="Nước hoa"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox7"
                                    label="Thực phẩm chức năng"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>GIÁ</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="0 đ - 100.000 đ"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="100.000 đ - 200.000 đ"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="200.000 đ - 300.000 đ"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="300.000 đ - 400.000 đ"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="400.000 đ - 500.000 đ"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Trên 500.000 đ"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>THƯƠNG HIỆU</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Vacosi (2)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Bird House (5)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="LAMEILA (3)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="HALIO (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="H.SKIN (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="BNBG (2)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="LIFETRONS (5)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Foreo (3)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Bibury (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Liplce (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Mentholatum (5)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Miracle Apo (3)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="I'M MEME (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="SECRET KEY (7)"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>CÔNG DỤNG</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Dưỡng ẩm (2)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Làm sáng da (5)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Chống nắng (3)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Làm sạch da (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Ngừa, giảm mụn (7)"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>LOẠI DA</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Mọi loại da (2)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Da dầu (5)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Da khô (3)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Da thường (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Da hỗn hợp (7)"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>KẾT CẤU</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Dạng lỏng (2)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Dạng kem (5)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Dạng gel (3)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Dạng miếng (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Dạng giấy (7)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox0"
                                    label="Dạng dầu (2)"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div>
                    <Button>Áp dụng</Button>
                </div>
            </div>
        </div>
        <div className="LayoutProductPage_right">
            <div className="LayoutProductPage_right_banner">
                <Carousel controls={false} indicators={false} pause={false} slide={false}>
                    <Carousel.Item interval={2000}>
                        <Image src={bannerProduct0}/>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Image src={bannerProduct1}/>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className="LayoutProductPage_right_products">
                <CardProductComponent numberShow={16}/>
            </div>
            <div>
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
        </div>
    </div>
    )
}
export default ProductPage