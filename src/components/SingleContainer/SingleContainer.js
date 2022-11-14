import Wrapper from "./SingleContainer.styled";
import {useNavigate} from "react-router-dom";

function SingleContainer({name, image, otherView, id, obj}) {
    const navigate = useNavigate();

    const clickHandler = (countryName) => {
        if (otherView) {
            navigate(`/${countryName}/${id}`, {state: obj})
        } else {
            navigate(`/${countryName}`)

        }
    }
    return (
        <Wrapper>
            <div className={otherView ? "image2" : "image"}>
                <img src={image} alt="zdjęcie" onClick={() => clickHandler(name)}></img>
                <p>{name}</p>
            </div>
        </Wrapper>
    );
}


export default SingleContainer;