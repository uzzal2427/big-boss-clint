import { useEffect, useState } from "react";
import OfferCard from "../../../compo/OfferCard/OfferCard";
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";

const Recommends = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const offerItems = data.filter(offerItem => offerItem.category === 'offered');
                setOffers(offerItems)
            })
    }, [])

    return (
        <section>
            <SectionTitle subHeading={'Should Try'} heading={'Chef Recommends'}></SectionTitle>
            <div className="grid md:grid-cols-3 my-8 gap-5">
                {
                    offers.map(offer => <OfferCard
                        key={offer._id}
                        offer={offer}
                    ></OfferCard>)
                }
            </div>
        </section>
    );
};

export default Recommends;