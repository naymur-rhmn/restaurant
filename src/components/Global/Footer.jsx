import logo from "../../assets/izakaya-logo.png";
import Button from "../Shared/Button";

const Footer = () => {
  return (
    <footer className="bg-black pb-5 md:pb-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-4  border-t border-[#4D4D4D] pt-5 md:pt-10">
          <div className="flex flex-col gap-4">
            <div className="h-12">
              <img className="max-w-[180px] h-full" src={logo} alt="logo" />
            </div>
            <ul className="flex flex-col gap-1  para-lead text-disable">
              <li>8819 Ohio St. South Gate, CA 90280</li>
              <li>
                <a href="">Ourstudio@hello.com</a>
              </li>
              <li>
                <a href="">+1 386-688-3295</a>
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
            <form>
              <input
                className="w-full rounded-lg text-black mb-3 p-2 focus:outline-none"
                type="email"
                name="email"
                id="email"
              />
              <Button text="Subscribe" wFull={true} />
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
