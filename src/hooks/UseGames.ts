import { GameQuery } from "../App";
import { useData } from "./UseData";
import { Platform } from "./UsePlatform";



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

const useGames = (gameQuery: GameQuery) => {
    return useData<Game>(
        '/games',
        {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        },
        [gameQuery]
    );
};

export { useGames };
