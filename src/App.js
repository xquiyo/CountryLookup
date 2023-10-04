import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import "./index.css";
import CountriesList from "./pages/CountriesList";
import CountryInfo from "./pages/CountryInfo";

function App() {
  


  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route
            path="/countries/:name"
            element={<CountryInfo />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
