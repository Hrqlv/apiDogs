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

    async getBreedById(id: string) {
        const context = await request.newContext();
        const response = await context.get(`${this.url}/breeds/${id}`);
        expect(response.status(), `Request (breed by id) failed\nStatus: ${response.status()} ${response.statusText()}`).toBe(200);
        return response;
    }

    async getFacts() {
        const context = await request.newContext();
        const response = await context.get(`${this.url}/facts`);
        expect(response.status(), `Request (facts) failed\nStatus: ${response.status()} ${response.statusText()}`).toBe(200);
        return response;
    }

    async getGroups() {
        const context = await request.newContext();
        const response = await context.get(`${this.url}/groups`);
        expect(response.status(), `Request (groups) failed\nStatus: ${response.status()} ${response.statusText()}`).toBe(200);
        return response;
    }

    async getGroupById(id: string) {
        const context = await request.newContext();
        const response = await context.get(`${this.url}/groups/${id}`);
        expect(response.status(), `Request (group by id) failed\nStatus: ${response.status()} ${response.statusText()}`).toBe(200);
        return response;
    }
}
