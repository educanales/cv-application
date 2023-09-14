import { useState } from 'react'
import './App.css'
import About from './components/About';
import Education from './components/Education';
import ExpInfo from './components/ExpInfo';
import GeneralInfo from './components/GeneralInfo';

export default function App() {

  return (
    <>
      <GeneralInfo />
      <hr />
      <About />
      <hr />
      <h2>Experience</h2>
      <ExpInfo />
      <hr />
      <h2>Education</h2>
      <Education />
    </>
  )
}



