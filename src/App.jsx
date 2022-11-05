import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PageFooter from "./components/PageFooter";
function App() {
  return (
    <div className="App w-full flex  flex-col items-center">
      <div className="px-4 w-full md:w-10/12">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="w-full px-2 md:px-28">
        <PageFooter />
      </div>
    </div>
  );
}

export default App;
