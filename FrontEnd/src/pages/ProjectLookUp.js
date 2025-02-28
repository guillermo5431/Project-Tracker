import React, { useState } from 'react'

function ProjectLookUp() {
    const [ticket, setTicket] = useState("")
    const [project, setProject] = useState(null);

    const handleSearch = async () => {
        // Placeholder fetch call to backend API
        console.log(`Searching for project with ticket: ${ticket}`);
    };
    

  return (
    <div>
        <h1>Project Lookup</h1>
        <input 
            type='text'
            placeholder='Enter Ticket Number'
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {project && <div>{JSON.stringify(project)}</div>}
    </div>
  )
}

export default ProjectLookUp