import { test, expect } from '@playwright/test';
import { ServicesAPI } from '../pages/apiDogs.page';

let servicesApi = new ServicesAPI();

test.describe('Automations Tests - Dogs @API', () => {
 
  test('Tests de API de Dogs', async () => {
    await test.step('Obter breeds - GET', async () => {
      const breedsResponse = await servicesApi.getBreeds();
      const breedsBody = await breedsResponse.json(); 
  
      expect(breedsResponse.status()).toBe(200);
      expect(breedsBody).toHaveProperty('data');
      expect(Array.isArray(breedsBody.data)).toBe(true);
      expect(breedsBody.data.length).toBeGreaterThan(0);
      expect(breedsBody.data[0]).toHaveProperty('attributes');
      expect(breedsBody.data[0].attributes).toHaveProperty('name');
    });
  
    await test.step('Obter breed por ID - GET', async () => {
      const breedsResponse = await servicesApi.getBreeds();
      const breedsBody = await breedsResponse.json();
      const breedId = breedsBody.data[0].id;
      const breedResponse = await servicesApi.getBreedById(breedId);
      const breedBody = await breedResponse.json();
  
      expect(breedResponse.status()).toBe(200);
      expect(breedBody).toHaveProperty('data');
      expect(breedBody.data).toHaveProperty('id', breedId);
      expect(breedBody.data).toHaveProperty('attributes');
      expect(breedBody.data.attributes).toHaveProperty('name');
    });
  
    await test.step('Obter os dados de Facts - GET', async () => {
      const factsResponse = await servicesApi.getFacts();
      const factsBody = await factsResponse.json();
      expect(factsResponse.status()).toBe(200);
      expect(factsBody).toHaveProperty('data');
      expect(factsBody.data.length).toBeGreaterThan(0);
    })
  
    await test.step('Obter dados de Groups - GET', async () => {
      const groupsResponse = await servicesApi.getGroups();
      const groupsBody = await groupsResponse.json();
      expect(groupsResponse.status()).toBe(200);
      expect(groupsBody).toHaveProperty('data');
      expect(groupsBody.data.length).toBeGreaterThan(0);
    })
  
    await test.step('Obter group por ID - GET', async () => {
      const groupsResponse = await servicesApi.getGroups();
      const groupsBody = await groupsResponse.json();
      const groupId = groupsBody.data[0].id;
      const groupResponse = await servicesApi.getGroupById(groupId);
      const groupBody = await groupResponse.json();
  
      expect(groupResponse.status()).toBe(200);
      expect(groupBody).toHaveProperty('data');
      expect(groupBody.data).toHaveProperty('id', groupId);
      expect(groupBody.data).toHaveProperty('attributes');
      expect(groupBody.data.attributes).toHaveProperty('name');
    });
  })
});
