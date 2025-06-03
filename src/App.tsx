import { Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes } from "react-router";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
