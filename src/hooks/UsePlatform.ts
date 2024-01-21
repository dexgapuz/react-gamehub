import { useData } from "./UseData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useData<Platform>('/platforms/lists/parents');

export { usePlatform };
