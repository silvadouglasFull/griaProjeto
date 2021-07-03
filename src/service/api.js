export const API_URL = 'https://gria.io/api'
export const GET_ITENS = (uri) => {
    return {
        url: `${API_URL}${uri}`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    }
}
export const POST_ITENS = (body, uri, method) => {
    return {
        url: `${API_URL}${uri}`,
        options: {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    }
}
