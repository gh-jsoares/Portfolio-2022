import React from "react"
import { Link, useParams } from "react-router-dom"
import { findProject } from "../data/projects"
import { NotFound } from "./404"

export const Project = () => {

    const { id } = useParams()
    const project = findProject(id)

    const parse = (b: string): JSX.Element => {
        const bold = b.match(/(?<=\*\*).*?(?=\*\*)/)

        if (bold != null) {
            const boldLen = bold[0].length
            const boldIndex = bold.index ?? 0
            return (
                <React.Fragment>
                    {parse(b.substring(0, boldIndex - 2))}
                    <strong>{parse(bold[0])}</strong>
                    {parse(b.substring(boldIndex + boldLen + 2, b.length))}
                </React.Fragment>
            )
        }

        const italic = b.match(/(?<=__).*?(?=__)/)
        if (italic != null) {
            const italicLen = italic[0].length
            const italicIndex = italic.index ?? 0
            return (
                <React.Fragment>
                    {parse(b.substring(0, italicIndex - 2))}
                    <em>{parse(italic[0])}</em>
                    {parse(b.substring(italicIndex + italicLen + 2, b.length))}
                </React.Fragment>
            )
        }

        return <React.Fragment>{b}</React.Fragment>
    }

    return project ? (
        <article className="project">
            <h2>{project.name}</h2>
            <ul className="socials">
                {project.github && <li><a href={project.github}><img src="/assets/img/github.png" alt="github" title="Source" /></a></li>}
                {project.url && <li><a href={project.url}><img src="/assets/img/link.webp" alt="external" title="Demo" /></a></li>}
            </ul>
            <div className="description">
                {project.description.split("\n").map((l) => l.trim()).join("\n").trim().split("\n\n").map((l, i) => (
                    <p key={i}>{parse(l)}</p>
                ))}
            </div>
            <h3>skills</h3>
            <ul>
                {project.skills.map((skill, i) =>
                    <li key={`skill-${i}`}>
                        <span className="icon">&gt;</span>
                        <a href={skill.url}><strong>{skill.name}</strong></a>
                        <img src={skill.icon} alt={skill.name} />
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
    ) : <NotFound project={id} />
}