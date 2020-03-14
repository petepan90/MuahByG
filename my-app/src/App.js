import React from 'react';
import './App.css';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      {/* <Services /> */}
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
