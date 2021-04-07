import { apiKey } from './ApiKey';

export const fetchItems = async (query) => {
    const response = await fetch(
        'https://api.calorieninjas.com/v1/nutrition?query=' + query,
        {
            method: 'GET',
            headers: { 'X-Api-Key': apiKey },
        }
    );
    const data = await response.json();
    return data;
};
// Display error if length === 0 (no result)
