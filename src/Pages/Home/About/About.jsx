import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"


const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="md:w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="md:w-1/2 absolute right-7 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className="lg:w-1/2 p-4">
                    <h3 className="text-xl font-bold text-orange-500"> About Us </h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-secondary mr-5 font-semibold bg-[#FF3811] hover:bg-[#ffffff00] hover:border-black hover:text-black text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;