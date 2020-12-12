import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/page/home/Home';
import Berita from './components/page/berita/Berita';
import Gallery from './components/page/gallery/Gallery';
import Product from './components/page/product/Product';
import InputData from './components/page/inputdata/InputData';

function App() {
  return (
    <Router>
      <Navbar />

      <div className="App">
        <Switch>
          <Route path='/input-data'>
            <InputData />
          </Route>

          <Route path='/product'>
            <Product />
          </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>

          <Route path="/berita">
            <Berita />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
