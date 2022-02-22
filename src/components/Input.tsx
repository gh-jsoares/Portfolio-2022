import React, { FormEvent, useState } from "react"
import { To, useNavigate } from "react-router-dom"
import { isValidProject, projects } from "../data/projects"

const validLocations = [
    "whoami",
    "projects",
    "skills"
]

export const Input = ({ error }: { error: boolean }) => {
    const navigate = useNavigate()

    const promptClass = error ? "prompt error" : "prompt"

    const [command, setCommand] = useState("")

    const visitPage = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        let location: To = command.trim()
        if (command === "help") {
            location = ""
        }
        if (command.startsWith("ls")) {
            location = command.replace("ls ", "")
        }
        if (command.startsWith("open")) {
            location = command.replace("open ", "projects/")
        }

        let isValidLocation = location !== ""
        isValidLocation = isValidLocation && !isValidProject(location.replace("projects/", ""))
        isValidLocation = isValidLocation && !validLocations.includes(location)

        if (location === "back") {
            location = -1 as To
        }

        navigate(location, { state: { command, error: isValidLocation } })
        setCommand("")
    }

    const autoComplete = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault()

        // empty
        if (command === "") {
            return
        }

        const validCmd = ["whoami", "ls", "open", "help"]
        const possibleCmd = validCmd.find((c) => c.startsWith(command) || command.startsWith(c))


        // not found
        if (possibleCmd == null) {
            return
        }

        if (possibleCmd !== "ls" && possibleCmd !== "open") {
            setCommand(`${possibleCmd}`)
            return
        }

        const originalSplit = command.split(" ")
        originalSplit.splice(0, 1)
        const subCommand = originalSplit.join(" ").trim()

        if (subCommand === "") {
            setCommand(`${possibleCmd} `)
            return
        }

        let possibleSubCmd: string | undefined

        const validList = ["projects", "skills"]
        if (possibleCmd === "ls") {
            possibleSubCmd = validList.find((c) => c.startsWith(subCommand))
            // not found
            if (possibleSubCmd == null) {
                return
            }
        }

        if (possibleCmd === "open") {
            possibleSubCmd = Array.from(projects.keys()).find((c) => c.startsWith(subCommand))
            // not found
            if (possibleSubCmd == null) {
                return
            }
        }


        setCommand(`${possibleCmd} ${possibleSubCmd}`)
    }

    return (
        <footer>
            <p className={promptClass}>
                <strong className="hostname">jsoares@me</strong>
                <strong className="directory">~/</strong>
            </p>
            <form onSubmit={visitPage} >
                <input
                    type="text"
                    id="terminal-input"
                    name="command"
                    placeholder="type here..."
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDownCapture={(e) => e.key === "Tab" && autoComplete(e)}
                />
            </form>
            {command.length > 0 ? <p className="clear" onClick={() => setCommand("")} >x</p> : null}
        </footer>
    )
}