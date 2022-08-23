import logo from './logo.svg';
import './App.css';
import NavbarHeader from './Components/Navbarheader';
import Footer from './Components/Footer';
import Route from './Components/Route';

function App() {
  return (
    <div>
      <NavbarHeader />

      {/* <Route path="/">
          <Accordion items={items} />
      </Route>
      
      <Route path="/search">
          <Search />
      </Route>

      <Route path="/gallery">
          <Accordion items={items} />
      </Route> */}
      {/* Insert Current Loaded Webpage here */}
      <Footer />
    </div>
  );
}

export default App;
