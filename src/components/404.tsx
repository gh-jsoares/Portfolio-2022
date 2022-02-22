
import React, { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export const NotFound = ({ command, project }: { command?: string | null, project?: string | null }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const state = location.state as { error?: boolean }

    useEffect(() => {
        if (!command && !project) {
            const pathSplit = location.pathname.split("/")
            navigate(location.pathname, {
                replace: true, state: {
                    command: pathSplit[pathSplit.length - 1],
                    error: true
                }
            })
        } else if (state?.error === undefined) {
            navigate(location.pathname, { replace: true, state: { error: true } })
        }
    }, [])

    return (
        <article className="not-found">
            {
                command && <p>
                    command {command != null ? <em>"{command}"</em> : ""} not found
                </p>
            }
            {
                project && <p>
                    project {project != null ? <em>"{project}"</em> : ""} not found
                </p>
            }
            <p>
                type
                <Link to="/"><strong>help</strong></Link>
                to show the help menu
            </p>
        </article >
    )
}