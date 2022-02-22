
import React from "react"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export const Projects = () => {
    return (
        <article className="ls">
            <h2>list of projects</h2>
            <p className="headline">this is a list of projects that i have worked on over the years</p>

            <ul>
                {Array.from(projects.keys()).map((project, i) =>
                    <li key={`project-${i}`}>
                        <span className="icon">&gt;</span>
                        <Link to={`/projects/${project}`}><strong>{project}</strong></Link>
                    </li>
                )}
            </ul>

            <br />

            <p>
                type
                <Link to="/"><strong>help</strong></Link>
                to go back to the menu
            </p>
        </article>
    )
}