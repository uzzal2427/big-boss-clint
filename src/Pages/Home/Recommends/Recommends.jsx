import { useEffect, useState } from "react";
import OfferCard from "../../../compo/OfferCard/OfferCard";
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const Recommends = () => {
   const [menu] = useMenu();
   const offers = menu.filter(item => item.category === 'offered')

    return (
        <section>
            <SectionTitle subHeading={'Should Try'} heading={'Chef Recommends'}></SectionTitle>
            <div className="grid md:grid-cols-3 my-8 gap-5">
                {
                    offers.map(offer => <OfferCard
                        key={offer._id}
                        item={offer}
                    ></OfferCard>)
                }
            </div>
        </section>
    );
};

export default Recommends;