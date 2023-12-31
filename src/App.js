import React from 'react'
import { Blog,WhatGPT3,Footer,Header,Possibility,Features} from './containers' ;
import {Cta,Brand,Navbar} from './Components'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
<Navbar/>
<Header/>
      </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App