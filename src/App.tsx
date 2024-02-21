import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Header from "./assets/components/header/Header";
import Footer from "./assets/components/footer/footer";
import Movies from "./assets/pages/Movies";



export default function App() {


  return (
    <div className="p-4">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
