export const isAuthenticated = () => {
    if (localStorage.getItem('MyMenuToken')) {
        return true;
    }
    return null;
};
