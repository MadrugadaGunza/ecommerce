import React from 'react'

const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const request = React.useCallback(async (url, options) => {
        let response;
        let result;

        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            if (response.ok === false) throw new Error(response.message);
            result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            return { response, result };
        }
    }, []);

    return { data, error, loading, request }
}

export default useFetch