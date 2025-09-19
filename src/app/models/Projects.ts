export interface Projects {
    id: number;
    type: string;
    status: string;
    github?: string;
    images: Image[];
    title: string;
    description: string;
    tecnologies: Tecnology[];
    currentIndex: number;
}

interface Image {
    src: string;
    alt: string;
}

interface Tecnology {
    name: string;
}