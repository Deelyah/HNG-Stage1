import zuri from "../assets/large-zuri-icon.svg";
import I4G from "../assets/large-I4G.svg";
function PageFooter() {
  return (
    <footer className="border-t flex flex-col md:flex-row justify-start pt-9 pb-12 md:justify-between">
      <div>
        <img
          src={zuri}
          alt=""
          className="max-w-[185px] max-h-[24px] mb-3 md:mb-0"
        />
      </div>
      <p className="text-[#667085] mb-3 md:mb-0">
        HNG Internship 9 Frontend Task
      </p>
      <div className="">
        <img src={I4G} alt="" className="text-start h-6" />
      </div>
    </footer>
  );
}

export default PageFooter;
