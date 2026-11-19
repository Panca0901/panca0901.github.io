interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "English",
        level: "Basic",
        description: "Able to understand basic vocabulary and read simple technical documentation, currently improving sentence structure and everyday communication.",
        show: true
    },
    {
        name: "Spanish",
        level: "Bilingual",
        description: "I speak fluently and write fluently",
        show: false
    },
    {
        name: "French",
        level: "B1",
        description: "I speak fluently and write fluently",
        show: false
    },
    {
        name: "Indonesian",
        level: "Native",
        description: "ative speaker with strong command of formal and academic Indonesian, experienced in writing statistical reports and presenting analytical insights clearly.",
        show: true
    }
];

export default languages;