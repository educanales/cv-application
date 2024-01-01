export default function Input({ type, value, placeholder, onChange}) {
  
  
  return (
    <>      
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* <input 
        type="text"
        value={company}
        placeholder="Company"
        onChange={e => setCompany(e.target.value)}
      />
      <input 
        type="date"
        value={sinceDate}        
        onChange={e => setSinceDate(e.target.value)}
      />
      <input 
        type="date"
        value={untilDate}        
        onChange={e => setUntilDate(e.target.value)}
      /> */}
      <button
        type="submit"
        onClick={handleSave}
      >Save
      </button>
      
    </>
  )
}

function inputEdit() {
  return (
    <div>
      <input 
        type="text"
        placeholder="Position"
        value={exp.position}
        onChange={(e) => setExp({ ...exp, position: e.target.value })}
      />
      <input 
        type="text"
        placeholder="Company"
        value={exp.company}
        onChange={(e) => setExp({ ...exp, company: e.target.value })}
      />
      <input 
        type="date"
        value={exp.sinceDate}
        onChange={(e) => setExp({ ...exp, sinceDate: e.target.value })}
      />
      <input 
        type="date"
        value={exp.untilDate}
        onChange={(e) => setExp({ ...exp, untilDate: e.target.value })}
      />
      <button type="submit" onClick={() => setExp({ ...exp, show: false })}>
        Save
      </button>
    </div>
  )
}

{/*
<input
  type="text"
  value={position}
  placeholder="Position"
  onChange={e => setPosition(e.target.value)}
/>
<input 
  type="text"
  value={company}
  placeholder="Company"
  onChange={e => setCompany(e.target.value)}
/>
<input 
  type="date"
  value={sinceDate}        
  onChange={e => setSinceDate(e.target.value)}
/>
<input 
  type="date"
  value={untilDate}        
  onChange={e => setUntilDate(e.target.value)}
/>
*/}