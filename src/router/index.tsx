import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/pages/home';
import Movies from '../components/pages/movies';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
