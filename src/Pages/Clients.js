//styles
import styles from './../Components/User/Table.module.css';
import React from 'react'
import useFetch from '../Hook/useFetch';
import { GET_USER } from '../APIs/User';
import TableItem from '../Components/User/TableItem';
import Banner from '../Components/User/Banner';

const Clients = () => {
    const { loading, error, data, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = GET_USER();
        request(url, options);
    }, [request]);
    return (
        <div>
            <Banner />
            {loading && <p>Loading...</p>}
            {error && <h1>Error: {error}</h1>}
            <h1></h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Identificador</th>
                        <th>Avatar</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user) => (<TableItem key={user.id} user={user} />))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Clients