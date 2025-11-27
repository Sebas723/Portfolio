export interface Projects {
    id: number;
    type: string;
    status: string;
    github?: string;
    images: Image[];
    videos?: Video[];
    title: string;
    description: string[];
    keyContributions?: KeyContribution[];
    tecnologies: Technology[];
    currentIndex: number;
    urlOnlineProject?: string;
}

interface Image {
    src: string;
    alt: string;
}

interface Video {
    src: string;
}

interface Technology {
    name: string;
    link: string;
}

interface KeyContribution {
    contribution: string;
}
