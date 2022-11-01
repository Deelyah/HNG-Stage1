import profileImage from "../assets/profile-img.svg";
import kebabMenu from "../assets/kebab-menu.svg";
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
      id: "",
      href: "https://background.zuri.team",
    },
    {
      name: "Design Books",
      id: "book__design",
      href: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <div className="App">
      <div className="flex flex-col py-16 px-4">
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
            <img src={kebabMenu} alt="menu" />
          </button>
        </div>
        <div>
          {links.map((link, index) => {
            return (
              <a
                className="block cursor-pointer text-center rounded-lg bg-[#EAECF0] text-[#101828] font-medium text-sm py-6 mb-6"
                href={link.href}
                id={link.id}
                key={index}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
