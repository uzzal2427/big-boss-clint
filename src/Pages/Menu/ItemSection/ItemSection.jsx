import { Link } from "react-router-dom";
import Button from "../../../compo/Button/Button";
import MenuItem from "../../../compo/MenuItem/MenuItem";

const ItemSection = ({ items, title }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><Button buttonInfo={'ORDER YOUR FAVOURITE FOOD'}></Button></Link>
        </div>
    );
};

export default ItemSection;