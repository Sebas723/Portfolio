export interface Experience {
    id: number;
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: Technology[];
}

interface Technology {
    name: string;
    link: string;
}