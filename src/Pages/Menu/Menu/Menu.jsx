import { Helmet } from "react-helmet-async";
import Cover from "../../Share/Cover/Cover";
import menuImage from '../../../assets/menu/banner3.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import soupsImage from '../../../assets/menu/soup-bg.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import OfferSection from "../OfferSection/OfferSection";
import ItemSection from "../ItemSection/ItemSection";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";


const Menu = () => {
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Big Boss | Menu</title>
            </Helmet>
            <Cover coverImage={menuImage} title={'our menu'} details={'Would you like to try a dish?'}></Cover>
            <OfferSection></OfferSection>
            <div>
                <Cover coverImage={saladImage} title={'salads'}></Cover>
                <SectionTitle subHeading={'try now'} heading={'salads'}></SectionTitle>
                <ItemSection title={'salads'} items={salads}></ItemSection>
            </div>
            <div>
                <Cover coverImage={pizzaImage} title={'pizza'}></Cover>
                <SectionTitle subHeading={'try now'} heading={'pizza'}></SectionTitle>
                <ItemSection title={'pizza'} items={pizza}></ItemSection>
            </div>
            <div>
                <Cover coverImage={soupsImage} title={'soups'}></Cover>
                <SectionTitle subHeading={'try now'} heading={'soups'}></SectionTitle>
                <ItemSection title={'soups'} items={soups}></ItemSection>
            </div>
            <div>
                <Cover coverImage={dessertImage} title={'desserts'}></Cover>
                <SectionTitle subHeading={'try now'} heading={'desserts'}></SectionTitle>
                <ItemSection title={'desserts'} items={dessert}></ItemSection>
            </div>
            <div>
                <Cover coverImage={dessertImage} title={'drinks'}></Cover>
                <SectionTitle subHeading={'try now'} heading={'drinks'}></SectionTitle>
                <ItemSection title={'drinks'}  items={drinks}></ItemSection>
            </div>
        </div>
    );
};

export default Menu;