// import ClipLoader from "react-spinners/ClipLoader";
// import { useState, CSSProperties } from "react";
// import { CircleLoader } from "react-spinners";
// import Flicking, { MoveEvent, WillChangeEvent } from "@egjs/react-flicking";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

// import Swiper from 'react-id-swiper';

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
// };


const Spinner = () => {
    // let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");

    // const HorizontalSwiperParams = {
    //     pagination: {
    //         el: '.swiper-pagination.swiper-pagination-h',
    //         clickable: true
    //     }
    // };

    // const VerticalSwiperParams = {
    //     direction: 'vertical',
    //     pagination: {
    //         el: '.swiper-pagination.swiper-pagination-v',
    //         clickable: true
    //     }
    // };

    return (
        <div>

            {/* <Swiper {...HorizontalSwiperParams}>
                <div>Horizontal #1</div>
                <div>Horizontal #2</div>
                <div>
                    <Swiper {...VerticalSwiperParams}>
                        <div>Vertical #1</div>
                        <div>Vertical #2</div>
                        <div>Vertical #3</div>
                        <div>Vertical #4</div>
                    </Swiper>
                </div>
                <div>Horizontal #4</div>
                <div>Horizontal #5</div>
            </Swiper> */}



            {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
            <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

            {/* <ClipLoader
                color={color}
                loading={loading}
                // cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}

            {/*  <Flicking
                viewportTag="div"
                cameraTag="div"
                cameraClass=""
                renderOnSameKey={false}
                align="center"
                onMove={(e: MoveEvent) => {
                    console.log(e);
                }}
                onWillChange={(e: WillChangeEvent) => { { console.log(e); } }}
                horizontal={true}
                circular={true}
            >
                <div>panel 0</div>
                <div>panel 1</div>
                <div>panel 2</div>
            </Flicking> */}


            {/* <AwesomeSlider cssModule={styles}>
                <div data-src="/path/to/image-0.png" />
                <div data-src="/path/to/image-1.png" />
                <div data-src="/path/to/image-2.jpg" />
            </AwesomeSlider> */}


        </div >
    );
};

export default Spinner;