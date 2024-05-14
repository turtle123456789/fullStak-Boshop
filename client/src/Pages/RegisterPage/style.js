import styled from "styled-components";
import '../../App.scss'
export const LayoutRegister = styled.div`
    margin: 0 150px;
    font-size: 16px;
    button{
        background: var(--pink);
        padding: 10px 30px; 
        border-radius: 10px; 
        cursor: pointer; 
        margin: 20px;
        border: 1px solid #dba8a8;
        &:hover{
            background: #ee9aa7;
        }
    }
`