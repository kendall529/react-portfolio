import React, {useState} from 'react'
import './styles/App.css'

import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import projects from './projects';
import proficiencies from './proficiencies';


export default function App() {
  const [currentComponent, handleComponentChange] = useState('about');

  const renderComponent = () => {
    if(currentComponent === 'About') {
      return <About />;
    }
    if(currentComponent === 'Portfolio') {
      return <Portfolio projects = {projects} />
    }
    if(currentComponent === 'Contact') {
      return <Contact />
    }
    if(currentComponent === 'Resume') {
      return <Resume proficiencies = {proficiencies} />
    }
    return <About />
  };

  return (
    <>
      <Navbar />

      <Footer />
    </>
  );
}

App;
