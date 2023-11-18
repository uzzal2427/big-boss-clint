

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center">
            <p className="text-[#D99904] mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase my-4 border-y-4 py-4 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;