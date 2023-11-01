// import { useEffect } from "react";
// import { useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../Hooks/useServices";


const Services = () => {
    const services = useServices()

    // const [services, setServices] = useState();

    // useEffect(() => {
    //     fetch('https://car-doctor-server-plum-eight.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    return (
        <div className="mb-20">
            <div className="text-center">
                <h3 className="text-xl font-bold text-orange-500">Service</h3>
                <h1 className="text-5xl font-bold">
                    Our Service Area
                </h1>
                <p> the majority have suffered alteration in some form, by injected humour, or randomised words <br /> which do not look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}>
                    </ServiceCard>)
                }
            </div>
            <div className="mt-10 text-center">
                <button className="btn border border-[#FF3811] bg-white text-[#FF3811]"> More Services </button>
            </div>
        </div>
    );
};

export default Services;