
import React from "react"
import { Link } from "react-router-dom"
import { Bio } from "../data/me"

export const Whoami = () => {
    const bio = Bio

    const parse = (i: any, b: string) => {
        const m = b.match(/%txt=.*%link=.*%/)
        if (m == null) {
            return <p key={i}>{b}</p>
        }

        const mlen = m[0].length
        const mindex = m.index ?? 0
        const split = m[0].split("%").filter((l) => l.length).map((l) => l.split("=")[1])
        const text = split[0]
        const url = split[1]

        return (
            <p key={i}>
                {b.substring(0, mindex)}
                <a href={url}><strong>{text}</strong></a>
                {b.substring(mindex + mlen, b.length)}
            </p>
        )
    }

    return (
        <article className="whoami">

            {bio.map((b, i) => parse(i, b))}

            <br />

            <p>
                type
                <Link to="/"><strong>help</strong></Link>
                to go back to the menu
            </p>
        </article>
    )
}