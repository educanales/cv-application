// import 
import './styles/App.css'
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import GeneralInfo from './components/GeneralInfo';

export default function App() {

  return (
    <main className='max-w-2xl my-2 mx-auto'>
      <GeneralInfo />
      <hr />
      <About />
      <hr />
      <Education />
      <hr /> 
      <Experience />      
    </main>
  )
}



