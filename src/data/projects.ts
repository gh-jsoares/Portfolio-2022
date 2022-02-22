import { findSkill, Skill } from "./skills"

export interface Project {
    name: string,
    description: string,
    url?: string,
    github?: string,
    skills: Skill[]
}

export const isValidProject = (name: string) => {
    return projects.has(name)
}

export const findProject = (name: string | undefined): Project | null => {
    if (name === undefined) {
        return null
    }
    return projects.get(name) ?? null
}

export const projects: Map<string, Project> = new Map()

projects.set("portfolio-current", {
    name: "Current portfolio web page",
    description: `
            For this portfolio I wanted to do something unusual. I decided to
            present myself and my projects in a terminal like interface, since
            I spend a lot of time in it.

            I focused on keeping the web page responsive across multiple screen
            resolutions.
            
            To present a single page experience **React.js** was used.
        `,
    url: "https://jsoares.me",
    github: "https://github.com/gh-jsoares/Portfolio-2022",
    skills: [
        findSkill("Languages/HTML") as Skill,
        findSkill("Languages/CSS") as Skill,
        findSkill("Languages/SASS") as Skill,
        findSkill("Languages/TypeScript") as Skill,
        findSkill("Frameworks/React.js") as Skill,
        findSkill("Tools/Git") as Skill,
    ]
})

projects.set("portfolio-old", {
    name: "Previous portfolio web page",
    description: `
            This portfolio is a very simple static web page.
            It was in use throughout the year of 2021.
            
            For this page I decided to go with something simple and to the point.
            I focused on presenting myself with a short bio at the centre of the page.

            To showcase languages, frameworks and tools I have worked with in the past,
            I decided to do something different, by their logos hanging from the top of
            the page.

            You can also interact with them by using the mouse: **left-click** to
            drag and **right-click** to __force-field__!
        `,
    url: "https://2021.jsoares.me",
    github: "https://github.com/gh-jsoares/Portfolio-2021",
    skills: [
        findSkill("Languages/HTML") as Skill,
        findSkill("Languages/CSS") as Skill,
        findSkill("Languages/SASS") as Skill,
        findSkill("Languages/JavaScript") as Skill,
        findSkill("Tools/Git") as Skill,
    ]
})

projects.set("pengubank", {
    name: "Smartphone as a security token (PenguBank)",
    description: `
            This project was developed as the final delivery for the
            __Network and Computer Security__ course in 2020.
            
            It consists of a simulated bank with a **Desktop app** and an
            **Android app**. These apps interact locally via a custom secure
            bluetooth protocol. This interaction is required to accept or
            cancel pending transactions. 

            The Android app also serves as a two-factor authentication mechanism
            with the use of timed one-time passwords (TOTPs).

            An **API server** was also developed and later deployed on the
            cloud.

            More information can be found on the report.
        `,
    url: "https://raw.githubusercontent.com/gh-jsoares/PenguBank/main/demo/a27_fri_1400_13_demo.mp4",
    github: "https://github.com/gh-jsoares/PenguBank",
    skills: [
        findSkill("Languages/Java") as Skill,
        findSkill("Languages/Kotlin") as Skill,
        findSkill("Languages/SQL") as Skill,
        findSkill("Frameworks/JavaFX") as Skill,
        findSkill("Frameworks/Jetpack Compose") as Skill,
        findSkill("Frameworks/Android") as Skill,
        findSkill("Frameworks/Ktor") as Skill,
        findSkill("Tools/Gradle") as Skill,
        findSkill("Tools/Docker") as Skill,
        findSkill("Tools/Git") as Skill,
    ]
})

projects.set("pengustore", {
    name: "Shareable shopping lists (PenguStore)",
    description: `
            This project was developed as the final delivery for the
            __Mobile and Ubiquitous Computing__ course in 2021.
            
            This **Android app** allows the user to create __pantry lists__ and
            __shopping lists__. These lists can then be shared with other users.
            As items are consumed, the user can decrease the amount available
            in the pantry and increase the amount needed in the shopping list.

            While at the store, the user can add items to the cart. At checkout,
            **WIFI-Direct** is used to automatically checkout the items. The app
            also takes advantage of **Geolocation** services to pinpoint which
            list to show by default.

            The product information is __crowd-sourced__, meaning the users can
            register products as they need and make them available to others.

            An **API server** was also developed and later deployed on the
            cloud.

            More information can be found on the report.
        `,
    github: "https://github.com/gh-jsoares/PenguStore",
    skills: [
        findSkill("Languages/Java") as Skill,
        findSkill("Languages/Kotlin") as Skill,
        findSkill("Languages/SQL") as Skill,
        findSkill("Frameworks/Jetpack Compose") as Skill,
        findSkill("Frameworks/Android") as Skill,
        findSkill("Frameworks/Ktor") as Skill,
        findSkill("Tools/Gradle") as Skill,
        findSkill("Tools/Docker") as Skill,
        findSkill("Tools/Git") as Skill,
    ]
})

projects.set("ticketchain", {
    name: "Simulated blockchain user-centered app (TicketChain)",
    description: `
            This project was developed as the final delivery for the
            __User-Centered Design__ course in 2022.
            
            It consists of a simulated ticket app with two **Android apps**:
            the __user app__ and the __worker app__.

            The dashboard of the __user app__ shows widgets. There are __three__
            different types of widgets and the app chooses a default
            one based on the occupation and age of the user. The settings allow
            adding and removing widgets. The main purpose of this app is to
            request tickets when there is a smaller queue line.

            The __worker app__ allows the counter worker to increment the
            current ticket.

            An **API server** was also developed and later deployed on the
            cloud to allow interaction between the multiple apps. This server
            simulates the blockchain behaviour in memory.

            More information can be found on the report.
        `,
    url: "https://web.ist.utl.pt/~joao.m.soares/CCU",
    github: "https://github.com/gh-jsoares/TicketChain",
    skills: [
        findSkill("Languages/Java") as Skill,
        findSkill("Languages/Kotlin") as Skill,
        findSkill("Languages/JavaScript") as Skill,
        findSkill("Frameworks/Jetpack Compose") as Skill,
        findSkill("Frameworks/Android") as Skill,
        findSkill("Frameworks/Node.js") as Skill,
        findSkill("Tools/Gradle") as Skill,
        findSkill("Tools/Docker") as Skill,
        findSkill("Tools/Git") as Skill,
    ]
})

projects.set("igo-simulator", {
    name: "Simulated wearable social-network (iGo)",
    description: `
            This project was developed as the final delivery for the
            __Human-Computer Interaction__ course in 2019.
            
            The device was simulated in a web-based application, which allows
            the user to perform and share travels with friends, search and visit
            nearby locations and landmarks, and view an overview of the health
            conditions of the user.

            All of this behaviours were simulated with dummy data to focus on
            developing and designing the interface.
            
            Some of the restrictions of the application was the small sized
            display and the lack of physical buttons.
        `,
    url: "https://web.ist.utl.pt/~joao.m.soares/IPM/prototipo3-release",
    github: "https://github.com/gh-jsoares/IPM-Site",
    skills: [
        findSkill("Languages/JavaScript") as Skill,
        findSkill("Languages/HTML") as Skill,
        findSkill("Languages/CSS") as Skill,
        findSkill("Languages/SASS") as Skill,
        findSkill("Tools/Git") as Skill,
    ]
})