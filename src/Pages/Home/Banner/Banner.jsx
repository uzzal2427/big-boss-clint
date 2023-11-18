import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BannerImg1 from '../../../../src/assets/home/01.jpg'
import BannerImg2 from '../../../../src/assets/home/02.jpg'
import BannerImg3 from '../../../../src/assets/home/03.png'
import BannerImg4 from '../../../../src/assets/home/04.jpg'
import BannerImg5 from '../../../../src/assets/home/05.png'
import BannerImg6 from '../../../../src/assets/home/06.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={BannerImg1} />
                </div>
                <div>
                    <img src={BannerImg2} />

                </div>
                <div>
                    <img src={BannerImg3} />

                </div>
                <div>
                    <img src={BannerImg4} />
                </div>
                <div>
                    <img src={BannerImg5} />

                </div>
                <div>
                    <img src={BannerImg6} />

                </div>
            </Carousel>
        </div>
    );
};

export default Banner;