import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { Loader } from "./components/Loader";

import AddTask from "./pages/AddTask";

const App = () => {
  return (
    <>
      <Loader showLoading />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddTask />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
