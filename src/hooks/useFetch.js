import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: { is: false, message: null }
    });

    const setError = (message) => {
        setState({
            ...state,
            hasError: { is: true, message }
        });
    };

    const fetchData = async () => {
        setState({ ...state, isLoading: true });
        try {
            const response = await fetch(url);
            if (!response.ok) {
                setError("Hubo un error al obtener los datos.");
                return;
            }
            const data = await response.json();
            setState({ data, isLoading: false, hasError: { is: false, message: null } });
        } catch (error) {
            setError("Hubo un error al obtener los datos.");
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { ...state };
};

export default useFetch;
