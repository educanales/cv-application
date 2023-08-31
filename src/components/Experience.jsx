import { useState } from "react"

export default function Experience() {
  const [jobs, setJobs] = useState({ position: 'Position Title', company: 'Company', date: 'Date', show: true })

  return (
    <>
      <h3>{jobs.position}</h3>
      <h4>{jobs.company}</h4>
      <h5>{jobs.date}</h5>
      <textarea name="resonsabilities" id="resonsabilities" cols="50" rows="3" placeholder='Describe what you do'></textarea>
    </>
  )
}