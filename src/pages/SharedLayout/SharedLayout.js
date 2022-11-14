import {Outlet} from "react-router-dom";
import Wrapper from './SharedLayout.styled'
import {Header} from "../../components";

function SharedLayout(props) {
    return (
        <Wrapper>
            <Header/>
            <Outlet/>
        </Wrapper>
    );
}

export default SharedLayout;