import OfferCard from "../OfferCard/OfferCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                items.map(item => <OfferCard key={item._id} item={item}></OfferCard>)
            }
        </div>
    );
};

export default OrderTab;