import Wrapper from "./Header.styled";
import {useAppContext} from "../../context/appContext";
import {AiFillHome} from 'react-icons/ai'
import {useNavigate} from "react-router-dom";

function Header(props) {
    const navigate = useNavigate()
    const {headerText} = useAppContext()
    const handleClick = () => {
        navigate("/")
    }
    return (
        <Wrapper>
            <div className="main-header">
                <div className="clickable">
                    <p onClick={handleClick}><AiFillHome/></p>
                </div>
                <div>
                    <p>{headerText}</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default Header;