import Cover from "../../Share/Cover/Cover";
import img from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../../compo/MenuItem/MenuItem";
import Button from "../../../compo/Button/Button";


const Desserts = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    return (
        <div>
            <Cover coverImage={img} title={'DESSERTS'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <SectionTitle subHeading={'Try some'} heading={'sweet'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    desserts.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Button buttonInfo={'ORDER YOUR FAVOURITE FOOD'}></Button>
        </div>
    );
};

export default Desserts;