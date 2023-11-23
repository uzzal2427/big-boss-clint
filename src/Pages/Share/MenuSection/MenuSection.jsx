import { useEffect, useState } from "react";
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";
import MenuItem from "../../../compo/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import Button from "../../../compo/Button/Button";


const MenuSection = () => {
   const [menu] = useMenu();
   const popularItems = menu.filter(item => item.category === 'popular');
    return (
        <section className="my-4">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                        buttonInfo={'View Full  Menu'}
                    ></MenuItem>)
                }
            </div>
            <Button buttonInfo={'View Full  Menu'}></Button>

        </section>
    );
};

export default MenuSection;