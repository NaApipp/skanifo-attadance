import LoginForm from "./components/LoginForm";
import OnBoardingSwipe from "./components/OnBoardingPage";

export default function login() {

  return (
    <>
      <div className="bg-white md:min-h-screen">
        <div className="flex flex-row">
          {/* Left */}
          <div className="w-1/2">
            <OnBoardingSwipe />
          </div>

          {/* Roght */}
          <div className="w-1/2 bg-[#39568E] md:min-h-screen flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
