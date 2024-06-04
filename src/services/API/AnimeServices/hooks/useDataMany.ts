import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../apiClient";
import { useEffect, useState } from "react";
export const Sleep = (milliseconds: any) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const useDataMany = <T>(endpoint: string, axiosConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [isEmptyData, setIsEmptyData] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<T[]>(endpoint, { signal: controller.signal, ...axiosConfig }).then(async (res) => {
            //await Sleep(1000);
            if (res.data.length === 0) {
                setIsEmptyData(true);
            } else {
                setData([...data, ...res.data]);
            }

            setLoading(false)
        }).catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        })
    }, deps ? [...deps] : []);
    return { data, isLoading, error, isEmptyData }
}

export default useDataMany;