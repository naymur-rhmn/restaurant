import toast from "react-hot-toast";
import logo from "../../assets/logo/izakaya-logo.png";

const Footer = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const data = { email: email };
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      form.reset();
      console.log(res);
      toast.success("Success!");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <footer className="bg-black pb-5 md:pb-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-4  border-t border-[#4D4D4D] pt-5 md:pt-10">
          <div className="flex flex-col gap-4">
            <div className="h-12">
              <img className="max-w-[180px] h-full" src={logo} alt="logo" />
            </div>
            <ul className="flex flex-col gap-1  para-lead text-disable">
              <li>123 Sushi St, Tokyo</li>
              <li>
                <a href="mailto:info@japanesecuisine.com">info@jpcuisine.com</a>
              </li>
              <li>
                <a href="tel:+81312345678">+81 3-1234-5678</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="heading-6 text-lg md:text-xl">Our Menu</h4>
            <ul className="flex flex-col gap-1  para-lead text-disable">
              <li>Main Manu</li>
              <li>Dessert</li>
              <li>Dish</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="heading-6 text-lg md:text-xl">Company</h4>
            <ul className="flex flex-col gap-1 para-lead text-disable">
              <li>About</li>
              <li>Help & Center</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="heading-6 mb-2  text-lg md:text-xl">
              Join a Newsletter
            </h4>
            <p className="para-sm">Your Email</p>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full rounded-lg text-black mb-3 p-2 focus:outline-none"
                type="email"
                name="email"
                id="email"
              />
              <button
                className={`capitalize para-sm cursor-pointer bg-green text-black text-base md:text-lg rounded-full shadow-md  py-2  px-4 w-full block hover:bg-opacity-90 transition`}
              >
                Subscribe
              </button>
              {/* <Button text="Subscribe" wFull={true} /> */}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// freepik attribute
// <a href="https://www.flaticon.com/free-icons/waiter" title="waiter icons">Waiter icons created by Freepik - Flaticon</a>
{
  /* <a href="https://www.flaticon.com/free-icons/cook" title="cook icons">Cook icons created by Becris - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/restaurant" title="restaurant icons">Restaurant icons created by Leremy - Flaticon</a> */
}
