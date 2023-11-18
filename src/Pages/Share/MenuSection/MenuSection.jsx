import { useEffect, useState } from "react";
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";
import MenuItem from "../../../compo/MenuItem/MenuItem";


const MenuSection = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="my-4">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="uppercase btn btn-outline border-0 border-b-4 my-5">View Full  Menu</button>
            </div>

        </section>
    );
};

export default MenuSection;