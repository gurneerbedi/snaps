import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import PhotoPage from "./pages/PhotoPage/PhotoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:photoId" element={<PhotoPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
