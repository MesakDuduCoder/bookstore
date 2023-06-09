import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./components/Categories";
import ShowBooks from "./components/ShowBooks";
import AddBook from "./components/AddBook";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={(
            <>
            <Header/>
            <ShowBooks/>
            </>
          )}/>
          <Route path='/categories' element={(
            <>
            <Header/>
            <Categories/>
            </>
          )}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
