import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/Layout/DefaultLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Posts from "./pages/Posts/Posts.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;