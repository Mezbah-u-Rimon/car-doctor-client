import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between gap-5 items-center">
                    <p className="font-bold text-orange-500">Price : ${price}
                    </p>
                    <div className="card-actions">
                        <Link to={`/book/${_id}`}>
                            <button className="btn bg-[#fff0] border-none text-orange-500"> <AiOutlineArrowRight className='text-xl '></AiOutlineArrowRight> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;