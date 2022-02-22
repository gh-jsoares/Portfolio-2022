export interface Skill {
    name: string,
    icon: string,
    url: string
}

export interface SkillGroup {
    name: string,
    skills: Skill[]
}

const frameworks: SkillGroup = {
    name: "Frameworks",
    skills: [
        {
            name: "Android",
            icon: "/assets/img/skills/frameworks/android.png",
            url: "https://android.com"
        },
        {
            name: "Jetpack Compose",
            icon: "/assets/img/skills/frameworks/jetpack.png",
            url: "https://developer.android.com/jetpack/compose"
        },
        {
            name: "Django",
            icon: "/assets/img/skills/frameworks/django.png",
            url: "https://djangoproject.com"
        },
        {
            name: "Ktor",
            icon: "/assets/img/skills/frameworks/ktor.png",
            url: "https://ktor.io"
        },
        {
            name: "Ruby on Rails",
            icon: "/assets/img/skills/frameworks/rails.png",
            url: "https://rubyonrails.org"
        },
        {
            name: "Laravel",
            icon: "/assets/img/skills/frameworks/laravel.png",
            url: "https://laravel.com"
        },
        {
            name: "Spring",
            icon: "/assets/img/skills/frameworks/spring.webp",
            url: "https://spring.io"
        },
        {
            name: "Node.js",
            icon: "/assets/img/skills/frameworks/node.png",
            url: "https://nodejs.org"
        },
        {
            name: "Vue.js",
            icon: "/assets/img/skills/frameworks/vue.png",
            url: "https://vuejs.org"
        },
        {
            name: "React.js",
            icon: "/assets/img/skills/frameworks/react.png",
            url: "https://reactjs.org"
        },
        {
            name: "JavaFX",
            icon: "/assets/img/skills/frameworks/javafx.png",
            url: "https://openjfx.io"
        },
        {
            name: "gRPC",
            icon: "/assets/img/skills/frameworks/grpc.png",
            url: "https://grpc.io"
        },
    ]
}

const tools: SkillGroup = {
    name: "Tools",
    skills: [
        {
            name: "Docker",
            icon: "/assets/img/skills/tools/docker.png",
            url: "https://docker.com"
        },
        {
            name: "Terraform",
            icon: "/assets/img/skills/tools/terraform.webp",
            url: "https://terraform.io"
        },
        {
            name: "Ansible",
            icon: "/assets/img/skills/tools/ansible.png",
            url: "https://ansible.com"
        },
        {
            name: "Git",
            icon: "/assets/img/skills/tools/git.png",
            url: "https://git-scm.com"
        },
        {
            name: "Linux",
            icon: "/assets/img/skills/tools/linux.png",
            url: "https://linux.org"
        },
        {
            name: "Gradle",
            icon: "/assets/img/skills/tools/gradle.png",
            url: "https://gradle.org"
        },
    ]
}

const languages: SkillGroup = {
    name: "Languages",
    skills: [
        {
            name: "Kotlin",
            icon: "/assets/img/skills/languages/kotlin.png",
            url: "https://kotlinlang.org"
        },
        {
            name: "Java",
            icon: "/assets/img/skills/languages/java.webp",
            url: "https://java.com"
        },
        {
            name: "Python",
            icon: "/assets/img/skills/languages/python.png",
            url: "https://python.org"
        },
        {
            name: "JavaScript",
            icon: "/assets/img/skills/languages/js.png",
            url: "https://javascript.com"
        },
        {
            name: "TypeScript",
            icon: "/assets/img/skills/languages/ts.png",
            url: "https://typescriptlang.org"
        },
        {
            name: "C",
            icon: "/assets/img/skills/languages/c.webp",
            url: "#"
        },
        {
            name: "C++",
            icon: "/assets/img/skills/languages/cpp.png",
            url: "https://www.cplusplus.com/"
        },
        {
            name: "C#",
            icon: "/assets/img/skills/languages/csharp.png",
            url: "https://docs.microsoft.com/en-us/dotnet/csharp/"
        },
        {
            name: "PHP",
            icon: "/assets/img/skills/languages/php.png",
            url: "https://php.net"
        },
        {
            name: "SQL",
            icon: "/assets/img/skills/languages/sql.png",
            url: "#"
        },
        {
            name: "Lua",
            icon: "/assets/img/skills/languages/lua.png",
            url: "https://lua.org"
        },
        {
            name: "Ruby",
            icon: "/assets/img/skills/languages/ruby.png",
            url: "https://ruby-lang.org"
        },
        {
            name: "HTML",
            icon: "/assets/img/skills/languages/html.png",
            url: "#"
        },
        {
            name: "CSS",
            icon: "/assets/img/skills/languages/css.png",
            url: "#"
        },
        {
            name: "SASS",
            icon: "/assets/img/skills/languages/sass.png",
            url: "https://sass-lang.com"
        },
    ]
}

export const findSkill = (name: string): Skill | undefined => {
    const nameSplit = name.split("/")
    const category = nameSplit[0].toLowerCase()
    const skill = nameSplit[1].toLowerCase()
    if (category === "languages") {
        return languages.skills.find((s) => s.name.toLowerCase() === skill)
    }
    if (category === "frameworks") {
        return frameworks.skills.find((s) => s.name.toLowerCase() === skill)
    }
    if (category === "tools") {
        return tools.skills.find((s) => s.name.toLowerCase() === skill)
    }
}

export const skillGroups: SkillGroup[] = [
    frameworks, tools, languages
]
