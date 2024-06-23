import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/Layout/DefaultLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;