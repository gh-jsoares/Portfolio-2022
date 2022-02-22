import React from "react"
import { EmptyProfile, Gender, MyProfile } from "../data/me"

export const AboutInfo = () => {
    //const profile = MyProfile
    const profile = EmptyProfile

    return (
        <aside id="about-info">
            <img
                className="profile"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null // prevents looping
                    currentTarget.src = "/assets/img/default.jpg"
                }}
                src={profile.image}
                alt="avatar"
            />
            <ul>
                <li>
                    <strong>name:</strong>
                    {profile.name}
                </li>
                <li>
                    <strong>age:</strong>
                    {profile.age} years old
                </li>
                <li>
                    <strong>education:</strong>
                    {profile.education}
                </li>
                <li>
                    <strong>gender:</strong>
                    {profile.gender === Gender.MALE ? "Male" : "Female"}
                </li>
                <li>
                    <strong>nationality:</strong>
                    {profile.nationality}
                </li>
            </ul>
            <ul className="socials">
                <li>
                    <a href="https://www.linkedin.com/in/jsoarespt/?locale=en_US">
                        <img src="/assets/img/linked.png" alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/gh-jsoares">
                        <img src="/assets/img/github.png" alt="github" />
                    </a>
                </li>
            </ul>
        </aside>
    )
}
