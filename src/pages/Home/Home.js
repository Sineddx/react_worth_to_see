import {countries} from "../../utils/countries";
import {SingleContainer} from '../../components'
import Wrapper from './Home.styled'
import {useAppContext} from "../../context/appContext";
import {useEffect} from "react";

function Home(props) {
    const {changeHeaderText} = useAppContext()
    useEffect(() => {
        return () => {
            changeHeaderText("wybierz interesujący cię kraj")
        };
    }, []);

    return (
        <Wrapper>
            {countries.map((country) => {
            const {name, image} = country
            return <SingleContainer name={name} image={image}/>
            })}
        </Wrapper>
    );
}

export default Home;