import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        ApiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then(({ data }) => {
            setData(data.results)
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort()
    }, deps ? [...deps] : []);

    return { data, error, isLoading};
};

export { useData };
