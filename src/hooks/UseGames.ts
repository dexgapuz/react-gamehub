import { useData } from "./UseData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    parent_platforms: {platform: Platform}[],
    metacritic: number
}

const useGames = () => useData<Game>('/games');

export { useGames };
