import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import GeneralInfo from './components/GeneralInfo';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import GenInfo from './components/GenInfo';
import ExpInfo from './components/ExpInfo';

export default function App() {

  return (
    <>
      <GenInfo />
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



