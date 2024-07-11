import { test, expect } from '@playwright/test';
import { ServicesAPI } from '../pages/apiDogs.page';

let servicesApi = new ServicesAPI();

test.describe('Automations Tests - Dogs @API', async () => {
 
  test('Obter breeds - GET', async ({ page }) => {
    const breedsResponse = await servicesApi.getBreeds();
    const breedsBody = await breedsResponse.json(); 
    expect(breedsResponse.status()).toBe(200);
    expect(breedsBody).toHaveProperty('breeds');
    expect(breedsBody.breeds.length).toBeGreaterThan(0);
  });
});
