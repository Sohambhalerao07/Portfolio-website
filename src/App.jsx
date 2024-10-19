import React from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'


const props={
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alexgernier@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  twitter: "microsoft",
  youTube: "Code",
}

function App() {
  
  return (
    <div id='main'>
     <Header/>
      <Home name={props.name} title={props.title}/>
      <About/>
      <Portfolio/>
      <Footer {...props} />
    </div>
      
    
  )
}

export default App
