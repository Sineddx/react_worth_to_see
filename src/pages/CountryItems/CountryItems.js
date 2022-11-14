import {useAppContext} from "../../context/appContext";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {worthToSeeList} from "../../utils/worthToSeeList";
import {CountryItem} from "../../components";
import {SingleContainer} from '../../components'
import Wrapper from "./CountryItems.styled";


function CountryItems(props) {
    const {changeHeaderText} = useAppContext()
    const {country} = useParams()

    useEffect(() => {
        return () => {
            changeHeaderText(country)
        };
    }, []);

    return (
        <Wrapper>
            {worthToSeeList.map((item, index) => {
            if(item.country===country){
                return <SingleContainer key={index} name={item.name} image={item.img[0]} otherView={true} id={item.id} obj={item}/>
            }
            return null;
        })}
        </Wrapper>
    );
}

export default CountryItems;