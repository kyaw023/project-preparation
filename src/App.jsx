import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  
} from "./Page";
import PopularSeriePage from "./Page/Series/Popular.serie.page";
import CollectionSearchPage from "./Page/Search/Collection.search.page";
import ReviewPage from "./Page/Review/Review.page";

const App = () => {
  return (
    <div className="custom-container py-3">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
