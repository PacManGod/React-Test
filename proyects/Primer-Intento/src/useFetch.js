import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [controller, setcontroller] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setcontroller(abortController);
        setLoading(true);

        fetch(url, { signal: abortController.signal })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("Cancelado por el usuario");
                } else {
                    setError(error.message);
                }
            })
            .finally(() => setLoading(false));
        return () => { abortController.abort(); }
    }, [url]);

    const hanleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Request cancelled");
        }
    }

    return { data, error, loading, hanleCancelRequest };
}