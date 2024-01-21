import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface GenresResponse {
    count: number;
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        ApiClient.get<GenresResponse>('/genres', {signal: controller.signal})
        .then(({ data }) => {
            setGenres(data.results)
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort()
    }, []);

    return { genres, error, isLoading};
};

export { useGenres };
