import Slider from "../../Shared/Navbar/Slider";
import Spinner from "../../Shared/Navbar/Spinner";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CallSection from "../CallSection/CallSection";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <CallSection></CallSection>
            <Spinner></Spinner>
            <Slider></Slider>
        </div>
    );
};

export default Home;