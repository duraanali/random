export const logout = () => {
    localStorage.clear();
    window.location.href = window.location.origin + "/"
}