import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Registration from "./Pages/Registration/Registration";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />

        <Footer />
      </Router>

      {/* <Footer /> */}
    </>
  );
}

export default App;
