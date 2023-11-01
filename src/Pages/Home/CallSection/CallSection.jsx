import img1 from "../../../assets/icons/Wrench.svg"

const CallSection = () => {
    return (
        <div className="bg-black p-20 grid grid-cols-1 lg:grid-cols-3 gap-5 text-white">
            <h1> hello section </h1>
            <div className="flex gap-3">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <p> We are open monday-friday</p>
                    <h3 className="text-3xl font-bold"> 7:00 am - 9:00 pm </h3>
                </div>
            </div>
        </div>
    );
};

export default CallSection;