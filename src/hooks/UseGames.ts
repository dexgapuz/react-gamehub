import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

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

interface GamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        ApiClient.get<GamesResponse>('/games', {signal: controller.signal})
        .then(({ data }) => setGames(data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        });

        return () => controller.abort()
    }, []);

    return { games, error};
}

export { useGames };
