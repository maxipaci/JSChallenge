import axios from 'axios';

export class HttpClient {
    http;

    constructor() {
        const baseURL = `http://127.0.0.1:5000`;

        this.http = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                
            },
        });
    }

    async get(url) {
        try {
            const response = await this.http.get(url);
            return response;
        } catch (e) {
            this.handleError(e);
        }
    }

    handleError(e) {
            throw e;
    }
}
