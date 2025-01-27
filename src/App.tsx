import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchByNamePage from "./components/pages/searchs/SearchByNamePage";
import RecapSeriesPage from "./components/pages/profile/RecapSeriesPage";
import ProfileHome from "./components/pages/profile/ProfileHome";
import AnimeHistory from "./components/pages/profile/AnimeHistory";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import WatchLists from "./components/pages/profile/WatchLists";
import Preferreds from "./components/pages/profile/Preferreds";
import TopAnime from "./components/pages/top/TopAnime";
import HomePage from "./components/pages/HomePage";
import AnimeEpisodeComments from "./components/pages/episodes/comments/AnimeEpisodeComments";

function App() {
  const WebApp = useWebApp();
  console.log(JSON.stringify(WebApp.initDataUnsafe));
  console.log(JSON.stringify(WebApp.initData));
  WebApp.expand();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<HomePage />} />
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

        <Route
          path="/:lang/profile/:userId/anime/watchlist"
          element={<WatchLists />}
        />

        <Route
          path="/:lang/profile/:userId/anime/preferreds"
          element={<Preferreds />}
        />

        <Route path="/:lang/anime/top" element={<TopAnime />} />

        <Route
          path="/:lang/anime/:animeId/episodes/:episodeNumber/comments"
          element={<AnimeEpisodeComments />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
