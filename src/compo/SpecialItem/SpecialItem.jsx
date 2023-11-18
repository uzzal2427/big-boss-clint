import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../assets/home/featured.jpg'
import './SpecialItem.css'


const SpecialItem = () => {
    return (
        <div className="parallax bg-fixed text-white bg-opacity-50 bg-black my-8">
            <SectionTitle subHeading={'Check It Out'} heading={'from our menu'}></SectionTitle>
            <div className="md:flex justify-center items-center gap-10 p-10 ">
                <div className="w-1/2 flex justify-end items-center"> <img className="w-2/3" src={img} alt="" /></div>
                <div className="w-1/2">
                    <p> 23 June 2023</p>
                    <h3 className="font-bold">Where Can Get Some</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni adipisci natus ea. Iusto ea sequi quibusdam, eos cumque error nam eligendi quis omnis dicta esse, labore autem atque minus. Beatae fugit porro in eveniet laudantium ipsum recusandae corrupti voluptatibus.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialItem;