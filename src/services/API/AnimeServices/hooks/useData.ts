import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../apiClient";
import { useEffect, useState } from "react";


const useData = <T>(endpoint: string, axiosConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<T>(endpoint, { signal: controller.signal, ...axiosConfig }).then(async (res) => {
            //await Sleep(2000);
            setData(res.data);
            setLoading(false)
        }).catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        })
    }, deps ? [...deps] : []);
    return { data, isLoading, error }
}

export default useData;