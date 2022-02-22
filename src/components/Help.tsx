
import React from "react"
import { Link } from "react-router-dom"

export const Help = () => (
    <header className="help-menu">
        <h2>welcome to my website</h2>
        <p>to access different pages, type one of the following commands</p>
        <ul>
            <li>
                <span className="icon">&gt;</span>
                <Link to="/whoami">
                    <strong>whoami</strong>
                </Link>

                <span className="description">show a short bio about me</span>
            </li>
            <li>
                <span className="icon">&gt;</span>
                <Link to="/projects">
                    <strong>ls projects</strong>
                </Link>
                <span className="description">list projects</span>
            </li>
            <li>
                <span className="icon">&gt;</span>
                <Link to="/projects">
                    <strong>open <em>&#60;project&#62;</em></strong>
                </Link>
                <span className="description">show info about a project</span>
            </li>
            <li>
                <span className="icon">&gt;</span>
                <Link to="/skills">
                    <strong>ls skills</strong>
                </Link>
                <span className="description">list skills</span>
            </li>
            <li>
                <span className="icon">&gt;</span>
                <Link to="/">
                    <strong>help</strong>
                </Link>
                <span className="description">show this menu</span>
            </li>
        </ul>
    </header>
)