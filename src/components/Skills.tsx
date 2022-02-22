
import React from "react"
import { Link } from "react-router-dom"
import { skillGroups } from "../data/skills"

export const Skills = () => {
    return (
        <article className="ls">
            <h2>list of skills</h2>
            <p className="headline">this is a list of libraries, frameworks and tools that i have worked with over the years</p>
            {
                skillGroups.map((group, i) => (
                    <div key={`group-${i}`}>
                        <h3>{group.name}</h3>
                        <ul>
                            {group.skills.map((skill, i) =>
                                <li key={`skill-${i}`}>
                                    <span className="icon">&gt;</span>
                                    <a href={skill.url}><strong>{skill.name}</strong></a>
                                    <img src={skill.icon} alt={skill.name} />
                                </li>
                            )}
                        </ul>

                    </div>
                ))
            }
            <br />

            <p>
                type
                <Link to="/"><strong>help</strong></Link>
                to go back to the menu
            </p>
        </article>
    )
}