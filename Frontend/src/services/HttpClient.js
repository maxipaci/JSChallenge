import axios from 'axios';

export class HttpClient {
    http;

    constructor() {
        const baseURL = `http://localhost:5000`;

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

    async delete(url, jsonBody = {}) {
        try {
            const response = await this.http.delete(url, {data : JSON.stringify(jsonBody)});
            return response;
        } catch (e) {
            this.handleError(e);
        }
    }

    async put(url, jsonBody = {}) {
        try {
            const response = await this.http.put(url, JSON.stringify(jsonBody));
            return response;
        } catch (e) {
            this.handleError(e);
        }
    }

    async post(url, jsonBody = {}) {
        try {
            const response = await this.http.post(url, JSON.stringify(jsonBody));
            return response;
        } catch (e) {
            this.handleError(e);
        }
    }

    handleError(e) {
            throw e;
    }
}
