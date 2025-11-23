export interface Projects {
    id: number;
    type: string;
    status: string;
    github?: string;
    images: Image[];
    title: string;
    description: string;
    tecnologies: Technology[];
    currentIndex: number;
}

interface Image {
    src: string;
    alt: string;
}

interface Technology {
    name: string;
    link: string;
}