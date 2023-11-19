import { Helmet } from "react-helmet-async";
import Number from "../../../compo/Number/Number";
import SpecialItem from "../../../compo/SpecialItem/SpecialItem";
import MenuSection from "../../Share/MenuSection/MenuSection";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Recommends from "../RECOMMENDS/RECOMMENDS";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Big Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <MenuSection></MenuSection>
            <Number></Number>
            <Recommends></Recommends>
            <SpecialItem></SpecialItem>
            <Review></Review>
        </div>
    );
};

export default Home;