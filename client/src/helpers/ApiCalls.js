import { toast } from 'react-toastify';

export const apiUrl = 'http://localhost:5000/api';

export const fetchItems = async (query) => {
    console.log(process.env);
    try {
        const response = await fetch(
            'https://api.calorieninjas.com/v1/nutrition?query=' + query,
            {
                method: 'GET',
                headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
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
        const response = await fetch(`${apiUrl}/profile/menu`, {
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

export const saveMacrosForm = async (macros, onUpdateMacros) => {
    try {
        const response = await fetch(`${apiUrl}/profile/macros`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('MyMenuToken'),
            },
            body: JSON.stringify(macros),
        });

        const data = await response.json();

        if (response.status >= 400) {
            console.log(data);
            return toast.error(data.message);
        }

        onUpdateMacros(data.goal);
        toast.success('Macros updated');
    } catch (err) {
        toast.error('Failed to save changes');
    }
};

export const getMacros = async (onUpdateMacros, setState = undefined) => {
    try {
        const response = await fetch(`${apiUrl}/profile/macros`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('MyMenuToken'),
            },
        });

        const data = await response.json();

        if (response.status >= 400) {
            console.log(data);
            toast.error(data.message);
            return undefined;
        }
        if (setState) {
            setState({
                calories: data.goal.calories,
                fats: data.goal.fats,
                proteins: data.goal.proteins,
                carbs: data.goal.carbs,
            });
        }

        onUpdateMacros(data.goal);
        return data.goal;
    } catch (err) {
        toast.error('Failed to fetch values');
        return undefined;
    }
};

export const saveProfileInfo = async (userInfoToEdit, updateUser) => {
    try {
        const response = await fetch(`${apiUrl}/profile/info`, {
            method: 'put',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('MyMenuToken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfoToEdit),
        });

        // Display error if api failed to update info
        if (response.status >= 400) {
            console.log('response');
            return toast.error('Failed to update info, please try again');
        }

        const { user } = await response.json();
        updateUser(user);
        toast.success('Info has been updated');
    } catch (error) {
        toast.error('Failed to update info, please try again');
    }
};

export const getMenuFromApi = async (onUpdateMenu, setCurrentMacros) => {
    try {
        const response = await fetch(`${apiUrl}/profile/menu`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('MyMenuToken'),
            },
        });

        const data = await response.json();

        if (response.status >= 400) {
            console.log(data);
            return toast.error(data.message);
        }

        const item = data.menu[0];
        onUpdateMenu(item);
        setCurrentMacros([
            item.totalCalories,
            item.totalCarbs,
            item.totalProtein,
            item.totalFat,
        ]);
    } catch (error) {
        console.log(error);
        toast.error('Failed to fetch menu, please try again later.');
    }
};
