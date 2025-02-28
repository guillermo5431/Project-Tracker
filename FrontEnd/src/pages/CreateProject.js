import { useState } from "react"
import "../Styles/createProject.css"


import React from 'react'

function CreateProject() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("/api/projects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description }),
        });

        if (response.ok) {
            alert("Project created succesfully!");
            setTitle("");
            setDescription("");
        } else {
            alert("Failed to create project.");
        }
        setLoading(false);
    };

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Project Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required 
        />
        <textarea 
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" disable={loading}>
            {loading ? "Creating..." : "Create Project"}
        </button>
    </form>
  )
}

export default CreateProject