import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PageFooter from "./components/PageFooter";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App w-full flex  flex-col items-center relative min-h-screen overflow-x-hidden">
      <div className="px-4 w-full md:w-10/12">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="w-full px-2 md:px-28 absolute bottom-0 right-5 left-5 ">
        <PageFooter />
      </div>
    </div>
  );
}

export default App;
