import profileImage from "./assets/profile-img.svg";
import kebabMenu from "./assets/kebab-menu.svg";
function App() {
  return (
    <div className="App">
      <div className="flex flex-col py-16">
        <div className="relative">
          <div className="w-full flex flex-col items-center">
            <div className="mb-6 rounded-full">
              <img src={profileImage} alt="profile image" />
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
