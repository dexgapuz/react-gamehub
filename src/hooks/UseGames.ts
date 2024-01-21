import { useData } from "./UseData";
import { Genre } from "./UseGenres";
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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
    return useData<Game>(
        '/games',
        {
            params: {
                genres: selectedGenre?.id,
                parent_platforms: selectedPlatform?.id
            }
        },
        [selectedGenre?.id, selectedPlatform?.id]
    );
};

export { useGames };
