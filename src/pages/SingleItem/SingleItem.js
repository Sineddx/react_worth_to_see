import {useLocation, useNavigate} from "react-router-dom";
import Wrapper from "./SingleItem.styled";
import ImageGallery from "react-image-gallery";
import {useEffect, useState} from "react";
import {useAppContext} from "../../context/appContext";

function SingleItem(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const {changeHeaderText} = useAppContext()
    const prepareImages = () => {
        let result = [];
        location.state.img.map((image) => {
            return result.push({original: image, thumbnail: image})
        })
        return result;
    }
    useEffect(() => {
        return () => {
            changeHeaderText(location.state.name)
        };
    }, []);
    const handleClick = () => {
        navigate("https://www.google.com")
    }

    return (
        <Wrapper>
        <div className="first-half">
            <ImageGallery  items={prepareImages(location.state.img)}/>
        </div>
        <div className="second-half">
            <div className="desc"><p>Opis</p>{location.state.desc}</div>
            <div className="links"><p>Link</p><a href={`${location.state.link}`} className="btn">Strona główna obiektu</a></div>
        </div>
    </Wrapper>

    );
}

export default SingleItem;