export interface Character {
    id: string;
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    eye_color: string;
    skin_color: string;
    birth_year: string;
    gender: string;
    force: number;
    avatar: string;
    img: string;
    homeworld?: string;
    films?: string[];
    species?: string[];
    vehicles?: string[];
    starships?: string[];
    created?: string;
    edited?: string;
    url?: string;
}