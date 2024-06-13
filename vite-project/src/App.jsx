// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";


// The Outlet component will conditionally swap between the different pages according to the URL
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
