import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../assets/left-arrow.svg";

function ErrorPage() {
  const navigateTo = useNavigate();
  return (
    <div className="relative h-[90vh] flex items-center px-4 md:px-0 w-full">
      <div className="w-full">
        <p className="text-[#1570EF] font-semibold mb-3">404 error</p>
        <h2 className="text-[#101828] text-4xl md:text-6xl mb-4 md:mb-6">
          We can't find that page
        </h2>
        <p className="text-lg text-[#475467] mb-8 md:mb-12">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col-reverse md:flex-row md:justify-start">
          <button
            className="rounded-lg py-3 md:py-4 md:mr-3 flex items-center justify-center md:px-7 md:text-lg text-[#344054] font-semibold border border-[#D0D5DD]"
            onClick={() => {
              navigateTo(-1);
            }}
          >
            <img src={leftArrow} alt="left arrow" className="mr-4" />
            Go back
          </button>

          <Link to="/" className="block">
            <button className="rounded-lg py-3 md:py-4 mb-3  md:mb-0 bg-[#1570EF] md:px-7 text-white md:text-lg font-semibold w-full md:w-fit">
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
