export default class APIHelper {
    static baseUrl = 'http://localhost:3500';

    static createOptions = (method, body) => ({
        method,
        body,
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "localhost",
            'Access-Control-Allow-Headers': 'X-Requested-With'
        },
    });

    static callAPI = async (endPoint, options) => {
        try {
            const response = await fetch(endPoint, options);
            const responseJSON = await response.json();
            return { result: true, response: responseJSON };
        } catch (error) {
            return { result: false };
        }
    };
}
