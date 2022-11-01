import profileImage from "../assets/profile-img.svg";
import kebabMenu from "../assets/kebab-menu.svg";
import backIcon from "../assets/back-icon.svg";
import slackIcon from "../assets/slack.svg";
import githubIcon from "../assets/github.svg";
import zuri from "../assets/large-zuri-icon.svg";
// import HNG from "../assets/";
import I4G from "../assets/large-I4G.svg";
function Home() {
  const links = [
    {
      name: "Twitter Link",
      id: "btn__zuri",
      href: "https://training.zuri.team/",
    },
    { name: "Zuri Team", id: "books", href: "http://books.zuri.team" },
    { name: "Zuri Books", id: "book__python", href: "https://books.zuri.team" },
    { name: "Pythin Books", id: "pitch", href: "https://books.zuri.team" },
    {
      name: "Background Check for Coders",
      id: "deelyah",
      href: "https://background.zuri.team",
    },
    {
      name: "Design Books",
      id: "book__design",
      href: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col py-16 px-4 w-full md:w-10/12">
        <div className="relative mb-8">
          <div className="w-full flex flex-col items-center">
            <div className="mb-6 rounded-full">
              <img src={profileImage} alt="profile image" id="profile_img" />
            </div>
            <h2
              className="font-bold text-[#101828] text-center text-xl"
              id="twitter"
            >
              _Dee_lia
            </h2>
            {/* <h2 id="slack" >Deelyah</h2> */}
          </div>
          <button className="absolute right-0 -top-5 w-10 h-10 border border-dashed border-[#D0D5DD] flex justify-center items-center rounded-full">
            <img src={kebabMenu} alt="menu" className="md:hidden" />
            <img src={backIcon} alt="back" className="hidden md:inline-block" />
          </button>
        </div>
        <div>
          {links.map((link, index) => {
            return (
              <a
                className="block cursor-pointer text-center rounded-lg bg-[#EAECF0] text-[#101828] font-medium text-sm md:text-lg py-6 mb-6"
                href={link.href}
                id={link.id}
                key={index}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="flex w-full justify-center py-6 mb-16">
          <img src={slackIcon} alt="slack icon" className="mr-6" />
          <img src={githubIcon} alt="github icon" className="" />
        </div>
        <footer className="border-t flex flex-col md:flex-row justify-start pt-9 md:justify-between">
          <div>
            <img
              src={zuri}
              alt=""
              className="max-w-[185px] max-h-[24px] mb-3 "
            />
          </div>
          <p className="text-[#667085] mb-3">HNG Internship 9 Frontend Task</p>
          <div className="">
            <img src={I4G} alt="" className="text-start h-6" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
