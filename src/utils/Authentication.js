export const logout = () => {
    localStorage.clear();
    window.location.href = window.location.origin + "/"
}

export const Random = () => {
    window.location.href = window.location.origin + "/randomizer"
}