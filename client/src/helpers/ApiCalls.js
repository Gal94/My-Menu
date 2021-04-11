import { apiKey } from './ApiKey';

export const fetchItems = async (query) => {
    try {
        const response = await fetch(
            'https://api.calorieninjas.com/v1/nutrition?query=' + query,
            {
                method: 'GET',
                headers: { 'X-Api-Key': apiKey },
            }
        );

        if (response.status >= 400) {
            return { items: [] };
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return { items: [] };
    }
};

export const saveMenu = async (menu) => {
    try {
        const response = await fetch('http://localhost:5000/api/profile/menu', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('MyMenuToken'),
            },
            body: JSON.stringify(menu),
        });

        if (response.status >= 400) {
            return undefined;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return undefined;
    }
};
