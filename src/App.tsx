import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchByNamePage from "./components/pages/searchs/SearchByNamePage";
import RecapSeriesPage from "./components/pages/profile/RecapSeriesPage";
import ProfileHome from "./components/pages/profile/ProfileHome";
import AnimeHistory from "./components/pages/profile/AnimeHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang/search/:search" element={<SearchByNamePage />} />
        <Route
          path="/:lang/profile/:userId/recap-series"
          element={<RecapSeriesPage />}
        />
        <Route path="/:lang/profile/:userId" element={<ProfileHome />} />
        <Route
          path="/:lang/profile/:userId/anime/history"
          element={<AnimeHistory />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
