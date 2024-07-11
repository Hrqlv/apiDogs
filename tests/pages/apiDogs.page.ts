import { expect, request } from "@playwright/test";

export class ServicesAPI {
    
    url: string;

    constructor() {
        this.url = 'https://dogapi.dog/api/v2';
    }

    async getBreeds() {
        const context = await request.newContext();
        const response = await context.get(`${this.url}/breeds`);
        expect(response.status(), `Request (breeds) failed\nStatus: ${response.status()} ${response.statusText()}`).toBe(200);
        return response;
    }
}
