import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./pages/Cards/Cards";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Order from "./pages/Order/Order";
import Register from "./pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App bg-danger pb-5">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path="/order/:orderId" element={<PrivateRoute><Order/></PrivateRoute>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
