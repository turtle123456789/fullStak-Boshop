import { Carousel, Image } from "react-bootstrap"
import perfumeBottle from '../../assets/icon/perfume-bottle.svg'
import personalHygiene from '../../assets/icon/personal-hygiene.svg'
import functionalFoods from '../../assets/icon/functional-foods.svg'
import makeup from '../../assets/icon/makeup.svg'
import antiAge from '../../assets/icon/anti-age.svg'
import hair from '../../assets/icon/hair.svg'
import greater from '../../assets/icon/greater.svg'
import mainBanner from '../../assets/images/mainBanner.png'
import mainBanner1 from '../../assets/images/mainBanner1.png'
import smallBanner from '../../assets/images/smallBanner.png'
import thunder from '../../assets/icon/thunder.svg'
import './style.scss'
import { Link } from "react-router-dom"
import Countdown, { zeroPad } from "react-countdown"
import SlideComponent from "../../Components/SlideComponent/SlideComponent"
import SlideComponentbrand from "../../Components/SlideComponent/slideBrand"
import TabComponent from "../../Components/TabComponent/TabComponent"
import CardProductComponent from "../../Components/CardProductComponent/CardProductComponent"
import { useEffect, useRef } from "react"

    const HomePage = ()=>{
        
        const myRefs = useRef({
            ref1: null,
            ref2: null,
            ref3: null
        });
        const changeStyle = (refName)=>{
            Object.values(myRefs.current).forEach(ref => {
                if (ref !== myRefs.current[refName]) {
                    ref.style.display = 'none';
                }
            });
            myRefs.current[refName].style.display = "flex"
        }
        useEffect(()=>{
            myRefs.current.ref1.style.display = "flex"
        },[])
        return(
        <>
            <div className="banner">
                <div className="banner_link">
                    <li>
                        <Link>
                            <div><Image src={hair}/> <span>Chăm sóc tóc & da  đầu</span></div>
                            <Image src={greater}/>
                        </Link>
                        <section className="banner_navbar2">
                            <ul>
                                <span><Link to="home">Dầu gội - Dầu  xả</Link></span>
                                <li><Link to="home">Trị gàu</Link></li>
                                <li><Link to="home">Trị gãy rụng</Link></li>
                                <li><Link to="home">Trị tóc bạc</Link></li>
                                <li><Link to="home">Làm mượt tóc</Link></li>
                                <li><Link to="home">Làm dày tóc</Link></li>
                                <li><Link to="home">Phục hồi tóc hư tổn</Link></li>
                                <li><Link to="home">Thư giãn thải độc</Link></li>
                            </ul>
                            <ul>
                                <span><Link to="home">Kem ủ</Link></span>
                                <li><Link to="home">Kem ủ dày mượt tóc</Link></li>
                                <li><Link to="home">Kem ủ làm dày tóc</Link></li>
                                <li><Link to="home">Kem ủ phục hồi tóc hư tổn</Link></li>
                                <li><Link to="home">Kem ủ cho tóc nhuộm</Link></li>
                                <li><Link to="home">Kem ủ cho tóc uốn</Link></li>
                            </ul>
                            <ul>
                                <span><Link to="home">Dẫu dưỡng tóc</Link></span>
                                <li><Link to="home">Tinh chất dưỡng tóc</Link></li>
                                <li><Link to="home">Thuốc nhuộm</Link></li>
                                <li><Link to="home">Keo xịt tóc</Link></li>
                            </ul>   
                        </section>
                    </li>
                    <li>
                        <Link>
                            <div><Image src={antiAge}/> <span>Chăm sóc da mặt</span></div>
                            <Image src={greater}/>
                        </Link>
                        <section className="banner_navbar2">
                            <ul>
                                <span><Link to="home">Chống nắng</Link></span>
                                <li><Link to="home">Dưỡng ẩm/Lotion</Link></li>
                                <li><Link to="home">Dưỡng ẩm/Lotion</Link></li>
                                <li><Link to="home">Mặt nạ</Link></li>
                                <li><Link to="home">Tẩy tế bào chết</Link></li>
                                <li><Link to="home">Xịt khoáng</Link></li>
                                <li><Link to="home">Tinh chất/Serum</Link></li>
                                <li><Link to="home">Sữa rửa mặtToner</Link></li>
                            </ul>
                            <ul>
                                <span><Link to="home">Da mặt</Link></span>
                                <li><Link to="home">Làm sáng da</Link></li>
                                <li><Link to="home">Làm dịu da</Link></li>
                                <li><Link to="home">Chống lão hoá</Link></li>
                                <li><Link to="home">Giảm nếp nhăn</Link></li>
                                <li><Link to="home">Cấp ẩm - Cấp nước</Link></li>
                                <li><Link to="home">Giữ ẩm</Link></li>
                                <li><Link to="home">Trị mụn - thâm</Link></li>
                                <li><Link to="home"> Trị nám - Tàn nhang</Link></li>
                                <li><Link to="home">Trị sẹo</Link></li>
                            </ul>
                            <ul>
                                <span><Link to="home">Tẩy trang</Link></span>
                                <li><Link to="home">Khăn/Bông tẩy trang</Link></li>
                                <li><Link to="home">Tẩy trang cho mắt</Link></li>
                                <li><Link to="home">Tẩy trang môi</Link></li>
                                <li><Link to="home">Tẩy trang mặt</Link></li>
                            </ul>   
                            <ul>
                                <span><Link to="home">Chăm sóc mắt</Link></span>
                                <li><Link to="home">Thuốc nhỏ mắt</Link></li>
                                <li><Link to="home">Mặt nạ mắt</Link></li>
                                <li><Link to="home">Dưỡng mắt</Link></li>
                                <li><Link to="home">Dưỡng mi mắt / chân mày</Link></li>
                            </ul>  
                        </section>
                    </li>
                    <li>
                        <Link>
                            <div><Image src={makeup}/> <span>Trang điểm</span></div>
                            <Image src={greater}/>
                        </Link>
                        <section className="banner_navbar2">  
                            <ul>
                                <span><Link to="home">Trang điểm mặt</Link></span>
                                <li><Link to="home">BB - CC - DD Cream</Link></li>
                                <li><Link to="home">Che khuyết điểm</Link></li>
                                <li><Link to="home">Dầu lót - Gel lót</Link></li>
                                <li><Link to="home">Kem lót</Link></li>
                                <li><Link to="home">Kem nền</Link></li>
                                <li><Link to="home">Phấn nền</Link></li>
                                <li><Link to="home">Phấn nước</Link></li>
                                <li><Link to="home">Phấn phủ</Link></li>
                                <li><Link to="home">Má hồng</Link></li>
                                <li><Link to="home">Tạo khối - Highlight</Link></li>
                            </ul>
                            <ul>
                                <span><Link to="home">Trang điểm mắt</Link></span>
                                <li><Link to="home">Kẻ chân mày</Link></li>
                                <li><Link to="home">Che khuyến điểm mắt</Link></li>
                                <li><Link to="home">Kem lót mắt</Link></li>
                                <li><Link to="home">Kẻ mắt</Link></li>
                                <li><Link to="home">Phấn mắt</Link></li>
                                <li><Link to="home">Mascara</Link></li>
                                <li><Link to="home">Mi giả - Dán mi</Link></li>
                                <li><Link to="home">Lens</Link></li>
                            </ul>
                            <ul>
                                <span><Link to="home">Trang điểm môi</Link></span>
                                <li><Link to="home">Kẻ viền môi</Link></li>
                                <li><Link to="home">Tẩy tế bào chết môi</Link></li>
                                <li><Link to="home">Che khuyết điểm môi</Link></li>
                                <li><Link to="home">Mặt nạ cho môi</Link></li>
                                <li><Link to="home">Son dưỡng môi</Link></li>
                                <li><Link to="home">Son bóng</Link></li>
                                <li><Link to="home">Son lì</Link></li>
                                <li><Link to="home">Son High End</Link></li>
                                <li><Link to="home">Son khoá môi</Link></li>
                            </ul>   
                            <ul>
                                <span><Link to="home">Dụng cụ trang điểm</Link></span>
                                <li><Link to="home">Cọ/Dụng cụ trang điểm</Link></li>
                                <li><Link to="home">Mút trang điểm</Link></li>
                                <li><Link to="home">Nhíp/Dao cạo</Link></li>
                                <li><Link to="home">Bấm mi</Link></li>
                                <li><Link to="home">Lông mi giả</Link></li>
                            </ul>   
                        </section>
                    </li>
                    <li>
                        <Link>
                            <div><Image src={personalHygiene}/> <span>Chăm sóc cơ thể</span></div>
                            <Image src={greater}/>
                        </Link>
                        <section className="banner_navbar2">
                            <ul>
                                <span><Link to="home">Dưỡng thể</Link></span>
                                <li><Link to="home">Sữa tắm</Link></li>
                                <li><Link to="home">Tẩy tế bào chết Body</Link></li>
                                <li><Link to="home">Chống nắng body</Link></li>
                                <li><Link to="home">Xà bông tắm</Link></li>
                                <li><Link to="home">Dầu massage/Dầu nóng</Link></li>
                                <li><Link to="home">Tinh dầu</Link></li>
                                <li><Link to="home">Rửa tay</Link></li>
                                <li><Link to="home">Khẩu trang</Link></li>
                                <li><Link to="home">Khăn giấy/khăn ướt</Link></li>
                            </ul>
                            <ul>
                                <span><Link to="home">Chăm sóc răng miệng</Link></span>
                                <li><Link to="home">Kem đánh răng</Link></li>
                                <li><Link to="home">Bàn chải đánh răng</Link></li>
                                <li><Link to="home">Nước súc miệng</Link></li>
                                <li><Link to="home">Chỉ nha khoa</Link></li>
                                <li><Link to="home">Tẩy trắng răng</Link></li>
                                <li><Link to="home">Trị hôi miệng</Link></li>
                            </ul>
                            <ul>
                                <span><Link to="home">Khử mùi</Link></span>
                                <li><Link to="home">Lăn khử mùi</Link></li>
                                <li><Link to="home">Sáp khử mùi</Link></li>
                                <li><Link to="home">Xịt thơm body</Link></li>
                                <li><Link to="home">Nến thơm</Link></li>
                            </ul>   
                            <ul>
                                <span><Link to="home">Tẩy lông/Cạo râu</Link></span>
                                <li><Link to="home">Kem tẩy lông</Link></li>
                                <li><Link to="home">Dao cạo cho nữ</Link></li>
                                <li><Link to="home">Dao cạo râu</Link></li>
                                <li><Link to="home">Bọt cạo râu</Link></li>
                            </ul>  
                        </section>
                    </li>
                    <li>
                        <Link>
                            <div><Image src={perfumeBottle}/> <span>Nước hoa</span></div>
                            <Image src={greater}/>
                        </Link>
                        <section className="banner_navbar2">
                            <ul>
                                <span><Link to="home">Nước hoa mini</Link></span>
                            </ul>
                            <ul>
                                <span><Link to="home">Nước hoa nam</Link></span>
                            </ul>
                            <ul>
                                <span><Link to="home">Nước hoa nữ</Link></span>
                            </ul>
                            <ul>
                                <span><Link to="home">Nước hoa Unisex</Link></span>
                            </ul>
                        </section>
                    </li>
                    <li>
                        <Link>
                            <div><Image src={functionalFoods}/> <span>Thực phẩm chức năng</span></div>
                            <Image src={greater}/>
                        </Link>
                        <section className="banner_navbar2">
                            <ul>
                                <span><Link to="home">Hỗ trợ giảm cân</Link></span>
                            </ul>
                            <ul>
                                <span><Link to="home">Hỗ trợ làm đẹp</Link></span>
                            </ul>
                            <ul>
                                <span><Link to="home">Tăng cường sức khoẻ</Link></span>
                            </ul>
                            <ul>
                                <span><Link to="home">Nuôi dưỡng mái tóc</Link></span>
                            </ul>
                        </section>
                    </li>
                </div>
                <div className="banner_slideBig">
                    <Carousel controls={false} indicators={false} pause={false} slide={false}>
                        <Carousel.Item interval={2000}>
                            <Image src={mainBanner}/>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <Image src={mainBanner1}/>
                        </Carousel.Item>
                    </Carousel>
                    
                </div>
                <div className="banner_slideSmall">
                    <Carousel controls={false} indicators={false} pause={false} slide={false}>
                        <Carousel.Item interval={2000}>
                            <Image src={smallBanner}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="homeSale">
                <div className="homeSale_header">
                    <div>
                        <Image src={thunder}/>
                        <h3>HOT DEAL ĐANG DIỄN RA</h3>
                        <span>Kết thúc trong</span>
                        <Countdown
                            date={Date.now() + 7200000}
                            renderer={({ hours, minutes, seconds, completed }) => {
                                if (completed) {
                                    return (
                                        <span>
                                        00:00:00
                                        </span>
                                    );
                                } else {
                                // Định dạng thời gian đếm ngược
                                return (<>
                                    <span className="timeCountDown">{zeroPad(hours)}</span>:<span className="timeCountDown">{zeroPad(minutes)}</span>:<span className="timeCountDown">{zeroPad(seconds)}</span>
                                </>);
                                }
                            }}
                            />
                    </div>
                    <Link to="home">Xem thêm</Link>

                </div>
            <SlideComponent numberslide={10} numberShow={5}/>
            </div>
            <div className="brand">
                <div>
                    <h1>Thương hiệu nổi bật</h1>
                    <p>Boshop tự hào là Đại lý phân phối chính thức của hơn 100 thương hiệu mỹ phẩm hàng đầu</p>
                    <Link>Xem tất cả các thương hiệu &rarr;</Link>
                </div>
                <SlideComponentbrand/>
            </div>
            <div className="bestSale">
                <div>
                    <h2>BEST SELLER</h2>
                    <TabComponent changeStyle={changeStyle} myRefs={myRefs}/>
                </div>
                <div className="bestSale_template">
                    <div ref={el => myRefs.current.ref1 = el} className="LayoutComponents">
                        <CardProductComponent numberShow={10}/>
                    </div>
                    <div ref={el => myRefs.current.ref2 = el} className="LayoutComponents">
                        <CardProductComponent numberShow={20}/>
                    </div>
                    <div ref={el => myRefs.current.ref3 = el} className="LayoutComponents">
                        <CardProductComponent numberShow={9}/>
                    </div>
                </div>
                <div>
                    <Link>Xem thêm &rarr;</Link>
                </div>
            </div>
            </>
        )
    }
    export default HomePage