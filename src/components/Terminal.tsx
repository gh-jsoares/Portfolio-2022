import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { NotFound } from "./404"
import { Help } from "./Help"
import { Input } from "./Input"
import { AboutInfo } from "./AboutInfo"
import { Whoami } from "./Whoami"
import { Skills } from "./Skills"
import { Projects } from "./Projects"
import { Project } from "./Project"

interface LocationState {
    command?: string,
    error?: boolean
}

export const Terminal = () => {
    const location = useLocation()
    const state = location.state as LocationState
    let command: string | null = state?.command ?? null
    let error: boolean = state?.error ?? false

    return (
        <main className="terminal">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Help />} />
                    <Route path="/whoami" element={<Whoami />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<Project />} />
                    <Route path="*" element={<NotFound command={command} />} />
                </Routes>
            </div>
            <AboutInfo />
            <Input error={error} />
        </main>
    )
}