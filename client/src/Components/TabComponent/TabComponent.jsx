import { Nav } from "react-bootstrap"
import './style.scss'
const TabComponent= (props)=>{
    const {changeStyle, myRefs} = props
    const handleSelect = (eventKey)=>{
        changeStyle(eventKey)
    }
    return(
        <Nav variant="pills" defaultActiveKey="ref1" onSelect={handleSelect} >
            <Nav.Item>
                <Nav.Link eventKey="ref1" >Trang điểm môi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="ref2" >Trang điểm mặt</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="ref3" >Trang điểm mắt</Nav.Link>
            </Nav.Item>
        </Nav>
    )   
}
export default TabComponent