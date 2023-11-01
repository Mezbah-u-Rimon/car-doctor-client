import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);


    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const message = form.message.value;
        const booking = {
            customerName: name,
            email,
            date,
            service: title,
            service_id: _id,
            price: price,
            message,
            img,
        }
        console.log(booking);

        fetch('https://car-doctor-server-plum-eight.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("Booking updated successfully")
                }
            })
    }


    return (
        <div className="bg-base-200 p-24">
            <h1 className="text-3xl text-center font-bold "> Book Services: {title}</h1>

            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name </span>
                        </label>
                        <input type="text" defaultValue={user?.name} name="name" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date </span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input defaultValue={user?.email} type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price </span>
                        </label>
                        <input type="text" name="amount" defaultValue={`$ ${price}`} className="input input-bordered" required />
                    </div>
                </div>
                <textarea className="rounded-lg mt-5 p-4" name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <div className="form-control mt-6">
                    <input className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;