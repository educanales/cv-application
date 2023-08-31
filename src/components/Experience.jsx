import { useState } from "react"

export default function Experience() {
  const [jobs, setJobs] = useState({ position: 'Position Title', company: 'Company', date1: 'Since', date2: 'Until', show: true })

  function handleClick() {
    setJobs({ ...jobs,  show: false });
  }

  if(jobs.show) {
    return (
      <>
        <h3>{jobs.position}</h3>
        <h4>{jobs.company}</h4>
        <h5>{jobs.date1}</h5>
        <h5>{jobs.date2}</h5>
        <textarea name="resonsabilities" id="resonsabilities" cols="50" rows="3" placeholder='Describe what you do'></textarea>
        <button onClick={handleClick}>Edit</button>
      </>
    )
  } else {
    return (
      <>
        <input 
          id="position"
          type="text" 
          value={jobs.position} 
          onChange={(e) => setJobs({ ...jobs, position: e.target.value})} 
        />
        <input 
          id="company"
          type="text" 
          value={jobs.company} 
          onChange={(e) => setJobs({ ...jobs, company: e.target.value})} 
        />
        <input 
          id="date1"
          type="date" 
          value={jobs.date1} 
          onChange={(e) => setJobs({ ...jobs, date1: e.target.value})} 
        />
        <input 
          id="date2"
          type="date" 
          value={jobs.date2} 
          onChange={(e) => setJobs({ ...jobs, date2: e.target.value})} 
        />
        <button
          type='submit' 
          onClick={() => setJobs({ ...jobs, show: true})}
        >
          Save
        </button>
      </>
    )
  }
}
  