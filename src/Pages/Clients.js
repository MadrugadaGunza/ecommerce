import React from 'react'
import useFetch from '../Hook/useFetch';
import { GET_USER } from '../APIs/User';
import Card from '../Components/User/Card';

const Clients = () => {
    const { loading, error, data, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = GET_USER();
        request(url, options);
    }, [request]);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <h1>Error: {error}</h1>}
            {
                data && data.map((user) => (
                    <Card key={user.id} user={user} />
                ))
            }
        </div>
    )
}

export default Clients