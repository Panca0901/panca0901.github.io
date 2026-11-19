interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Bachelor of Statistics (S1 Statistika)",
        startDate: "2026-08-01",
        endDate: "",
        school: "Cenderawasih University",
        location: "Jayapura, Indonesia",
        description: "Undergraduate student focusing on statistical theory, probability, data analysis, and computational statistics",
        currentUni: true,
    },
    {
        title: "Senior High School (Engineering & Exact Sciences Track)",
        startDate: "2023-07-01",
        endDate: "2026-05-05",
        school: "SMAN 4 Jayapura",
        location: "Jayapura, Indonesia",
        description: "Focused on advanced mathematics, physics, chemistry, and analytical problem-solving within the engineering specialization.",
        currentUni: false,
    },
];

export default education;