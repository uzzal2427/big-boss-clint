import useMenu from "../../../Hooks/useMenu";
import Button from "../../../compo/Button/Button";
import MenuItem from "../../../compo/MenuItem/MenuItem";
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";

const OfferSection = () => {
    const [menu] = useMenu();
    const offerItems = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <SectionTitle subHeading={"Don't miss out"} heading={'Todays Offer'}></SectionTitle>
           <div className="grid grid-cols-2 gap-10">
           {
                offerItems.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
           </div>
           <Button buttonInfo={'ORDER YOUR FAVORITE FOOD'}></Button>
        </div>
    );
};

export default OfferSection;