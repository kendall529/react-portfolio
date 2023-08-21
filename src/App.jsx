import React, {useState} from 'react'
import './styles/App.css'

import Header from './components/Header';
import Footer from './components/Footer';



export default function App() {

  return (
    <div className='flex flex-col '>
      <Header />
      <Footer />
    </div>
  );
}

App;
