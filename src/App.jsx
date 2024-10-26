
import React from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'


const props={
  name: "Soham Bhalerao",
  title: "FrontEnd Developer",
  email: "bhaleraosoham07@gmail.com",
  gitHub: "Sohambhalerao07",
  instagram: "Sohm_nb",
  linkedIn: "Soham Bhalerao",
}

function App() {
  const fontStyle = {
    fontFamily: 'Open Sans, sans-serif', // Define the font style
    color: '#333',                    // Define a text color if needed
  };
  
  return (
    <div id="main" style={fontStyle}>
    <Header />
    <Home name={props.name} title={props.title} />
    <About />
    <Portfolio />
    <Footer {...props} />
  </div>
    
  )
}

export default App
