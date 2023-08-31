import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import GeneralInfo from './components/GeneralInfo';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {

  return (
    <>
      <GeneralInfo />
      <hr />
      <About />
      <hr />
      <h2>Experience</h2>
      <Experience />
      <hr />
      <h2>Education</h2>
      <Education />
    </>
  )
}



