import { /* useContext, */ useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
// import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";


const Bookings = () => {
    // const { user } = useContext(AuthContext)
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxios()


    const url = `/bookings?email=${user?.email}`  // ? email=${user?.email}
    useEffect(() => {

        axiosSecure.get(url)
            .then(res => setBookings(res.data))


        // axios.get(url, { withCredentials: true }) //jodi fetch hoi tokhon  credentials: 'include' dite hobe
        //     .then(res => {
        //         setBookings(res.data)
        //     })


        // fetch('http://localhost:5000/bookings', { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

    }, [url, axiosSecure])


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-plum-eight.vercel.app/bookings/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                        }
                    })
            }
        })
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);

                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remaining];
                    setBookings(newBooking)
                }

            })
    }


    return (
        <div>
            <h1> Booking {bookings.length}
            </h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="uppercase font-bold  text-black">Service && Date </th>
                            <th className="uppercase font-bold  text-black">Name && Email </th>
                            <th className="uppercase font-bold  text-black">Price </th>
                            <th className="uppercase font-bold  text-black"> Status </th>
                        </tr>
                    </thead>
                    {
                        bookings?.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}
                            handleConfirm={handleConfirm}> </BookingRow>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Bookings;