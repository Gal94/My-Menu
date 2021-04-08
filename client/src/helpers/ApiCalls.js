import { apiKey } from './ApiKey';

// TODO: try catch, error handling
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

// TODO: try catch, error handling
export const saveMenu = async (menu) => {
    const response = await fetch('http://localhost:5000/api/profile/menu', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('MyMenuToken'),
        },
        body: JSON.stringify(menu),
    });

    const data = await response.json();
    return data;
};
