import zuri from "../assets/large-zuri-icon.svg";
import I4G from "../assets/large-I4G.svg";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative pt-20">
        <h3 className="text-center">We can't find that page</h3>
        <Link to="/" className="underline block text-center">
          Go Home
        </Link>
      </div>
      <footer className="absolute bottom-0 right-10 left-10 border-t flex flex-col md:flex-row justify-start pt-9 md:justify-between">
        <div>
          <img src={zuri} alt="" className="max-w-[185px] max-h-[24px] mb-3 " />
        </div>
        <p className="text-[#667085] mb-3">HNG Internship 9 Frontend Task</p>
        <div className="">
          <img src={I4G} alt="" className="text-start h-6" />
        </div>
      </footer>
    </div>
  );
}

export default ErrorPage;
