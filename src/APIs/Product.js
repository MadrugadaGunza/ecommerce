import { API } from "./Index";

export const GET_PRODUCTS = () => {
    return {
        url: API + '/products',
        options: {
            method: 'GET',
        }
    }
}
export const GET_CATEGORY = (category) => {
    return {
        url: `${API}/products/category/${category}`,
        options: {
            method: 'GET',
        }
    }
}
