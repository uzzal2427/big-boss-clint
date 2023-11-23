import { Parallax } from 'react-parallax';

const Cover = ({ coverImage, title, details }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={coverImage}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero mb-10 h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" lg:w-[1000px] md:h-[300px] bg-black bg-opacity-50 flex flex-col items-center justify-center p-10 md:px-24">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{details}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;