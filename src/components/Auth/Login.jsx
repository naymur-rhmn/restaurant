import SignInButton from "../Shared/SignInButton";
import google from "../../assets/icons/google.png";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignIn } = useAuth();
  return (
    <section className="bg-[#232C33] py-20">
      <div className="max-w-screen-lg mx-auto px-4 md:px-12">
        <div className=" p-8 rounded-2xl gradient-card max-w-[500px] w-full mx-auto">
          <h3 className="uppercase text-center mb-8 font-semibold text-3xl tracking-wider">
            Login
          </h3>
          <form className="flex flex-col gap-4">
            <input
              className="px-2 py-2.5 rounded-md bg-transparent border-b border-white text-darkGray "
              placeholder="Enter Email"
              type="email"
              name="email"
              id=""
            />
            <input
              className="px-2 py-2.5 rounded-md bg-transparent border-b border-white text-darkGray "
              placeholder="Enter Password"
              type="password"
              name="password"
              id=""
              required
            />
            <input
              className="mt-4 bg-[#017BFF] text-black shadow-md tracking-[1px] py-2.5 font-roboto  rounded-xl transition hover:rounded-full cursor-pointer font-semibold"
              type="submit"
              value="Submit"
            />
          </form>

          <div className="mt-4 py-3">
            <div className="relative">
              <p className="absolute -top-[] left-[50%] text-white font-normal bg-[#263238] px-2 inline-block -translate-x-[50%] -translate-y-[50%] text-sm">
                Login with
              </p>
              <div className="bg-white h-[1.5px]"></div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex gap-2">
                <SignInButton
                  value={"google"}
                  icon={google}
                  onclick={googleSignIn}
                />
                <SignInButton value={"facebook"} icon="" onclick={""} />
              </div>
              <SignInButton value={"Twitter"} icon="" onclick={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
