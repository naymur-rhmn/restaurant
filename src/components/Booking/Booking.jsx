import Contact from "./Contact";

const Booking = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-12">
      {/* form and map */}
      <div className="grid grid-cols-2 gap-6 mb-16 mt-10">
        {/* form */}
        <form>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Name</label>
            <input
              className="py-1.5 px-2 rounded text-black focus:outline-none"
              id="name"
              type="text"
              name="name"
              placeholder="Input your name"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email">Email</label>
              <input
                className="py-1.5 px-2 rounded text-black focus:outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Input your email"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="phone">Phone</label>
              <input
                className="py-1.5 px-2 rounded text-black focus:outline-none"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Input phone number"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="date">Date</label>
              <input
                className="py-1.5 px-2 rounded text-black focus:outline-none"
                type="date"
                name="date"
                id="date"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="time">Time</label>
              <input
                className="py-1.5 px-2 rounded text-black focus:outline-none"
                type="time"
                name="time"
                id="time"
                placeholder="Input your Phone number"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full  mt-4">
            <label htmlFor="seats">Seats</label>
            <select className="py-1.5 px-2 rounded text-black focus:outline-none">
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
              rows={8}
              placeholder="Input your Message"
            ></textarea>
          </div>
          <input
            className="bg-green px-6 py-2.5 mt-5 font-semibold rounded-full text-black cursor-pointer hover:bg-opacity-95 shadow-lg transition "
            type="submit"
            value="Book Now"
          />
        </form>
        {/* map */}
        <div>map area</div>
      </div>
      <Contact />
    </div>
  );
};

export default Booking;
