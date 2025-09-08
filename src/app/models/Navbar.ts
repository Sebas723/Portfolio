export interface Navbar {
    navbarOptions: NavbarOptions[];
    navbarIcons: NavbarIcons[];
}

interface NavbarOptions {
    id: number;
    name: string;
    sectionId: string;
}

interface NavbarIcons {
    id: number;
    icon: string;
    link: string;
}