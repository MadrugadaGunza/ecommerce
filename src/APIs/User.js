import { API } from './Index';

export const GET_USER = () => {
    return {
        url: API + '/users',
        options: {
            method: 'GET',
        }
    }
}
