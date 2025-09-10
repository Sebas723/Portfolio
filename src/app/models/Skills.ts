export interface Skills {
    id: number;
    title: string;
    tecnologies: Tecnology[];
}

interface Tecnology {
    name: string;
    path: string;
}