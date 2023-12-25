export enum Gender {
    MALE = 1,
    FEMALE = 2
}

export interface Profile {
    name: string,
    image?: string,
    age: Number,
    education: string,
    gender: Gender,
    nationality: string
}

export const MyProfile: Profile = {
    name: "João Soares",
    image: "/assets/img/avatar.jpg",
    age: 24,
    education: "MSc in CompSci",
    gender: Gender.MALE,
    nationality: "PT"
}

export const EmptyProfile: Profile = {
    name: "Roxie Jefferson",
    image: "/assets/img/default.jpg",
    age: 24,
    education: "BSc in CompSci",
    gender: Gender.MALE,
    nationality: "PT"
}

export const Bio: string[] = [
    "i have worked on several hobby projects ever since i was younger;",
    "i graduated a BSc in computer science and engineering from%txt=IST%link=https://fenix.tecnico.ulisboa.pt/en%in 2020;",
    "i have published a%txt=MSc thesis%link=https://fenix.tecnico.ulisboa.pt/cursos/meic-a/dissertacao/565303595503176%, in the same course, on secure multi-path communication in 2022;",
    "the fields i specialised are cyber-security and distributed systems;",
    "i am always looking to learn more and excited to work on interesting projects;",
    "i am currently employed as a full-stack developer at Inetum-Realdolmen, in Belgium;",
    "if a specific topic intrigues me, then i study to understand it."
]
