import { useEffect, useState } from "react";
import Contact from "./Contact";
import SuccessModal from "./SuccessModal";

const Booking = () => {
  const [bookingState, setBookingState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const time = form.time.value;
    const seat = form.seat.value;
    const message = form.message.value;
    const bookingData = { name, email, phone, date, time, seat, message };

    try {
      const response = await fetch(
        "https://izakaya-restaurant.vercel.app/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setBookingState(true);
      form.reset();
    } catch (err) {
      console.error(err);
    }
  };

  const handleBookingState = () => setBookingState(false);

  useEffect(() => {
    setTimeout(() => {
      setBookingState(false);
    }, 5000);
  }, [bookingState]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-12">
      {bookingState && (
        <SuccessModal onHandler={handleBookingState}></SuccessModal>
      )}
      {/* form and google map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 mt-10">
        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Name</label>
            <input
              className="py-2 px-2 rounded text-black focus:outline-none"
              id="name"
              type="text"
              name="name"
              required
              placeholder="Input your name"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email">Email</label>
              <input
                className="py-2 px-2 rounded text-black focus:outline-none"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Input your email"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="phone">Phone</label>
              <input
                className="py-2 px-2 rounded text-black focus:outline-none"
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Input phone number"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="date">Date</label>
              <input
                className="py-2 px-2 rounded text-black focus:outline-none"
                type="date"
                name="date"
                id="date"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="time">Time</label>
              <input
                className="py-2 px-2 rounded text-black focus:outline-none"
                type="time"
                name="time"
                id="time"
                required
                placeholder="Input your Phone number"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full  mt-4">
            <label htmlFor="seats">Seats</label>
            <select
              name="seat"
              required
              className="py-2 px-2 rounded text-black focus:outline-none"
            >
              <option className="" value="1">
                1 Person
              </option>
              <option className="" value="2">
                2 Person
              </option>
              <option className="" value="3">
                3 Person
              </option>
              <option className="" value="4">
                4 Person
              </option>
              <option className="" value="5">
                5 Person
              </option>
              <option className="" value="6">
                6 Person
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1 w-full  mt-4">
            <label htmlFor="message">Special Request</label>
            <textarea
              className="py-1.5 px-2 rounded text-black focus:outline-none"
              name="message"
              id="messsage"
              rows={7}
              placeholder="Input your Message"
            ></textarea>
          </div>
          <input
            className="bg-green px-6 sm:px-10 py-2.5 sm:py-3 md:py-4 mt-5  rounded-full text-black cursor-pointer hover:bg-opacity-95 font-bold shadow-lg transition "
            type="submit"
            value="Book Now"
          />
        </form>
        {/* google map */}
        <div className="rounded min-h-[200px]">
          <iframe
            className="rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25929.204847393496!2d139.70914331457365!3d35.67329345860175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c60aa2b15d7%3A0xc7881f9c2c4c4c60!2sIchigaya%20Station!5e0!3m2!1sen!2sbd!4v1720675783822!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Booking;
