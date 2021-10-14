
const useToken = () => {
    const TOKEN_KEY = "_TOKEN_KEY";

    const saveToken = token => {
        localStorage.setItem(TOKEN_KEY, token)
    }

    const getToken = () => {
        return localStorage.getItem(TOKEN_KEY)
    }

    const hasToken = () => {
        return Boolean(getToken())
    }

    const removeToken = () => {
        localStorage.removeItem(TOKEN_KEY)
    }


    return {
        getToken,
        saveToken,
        removeToken,
        hasToken
    }
}

export default useToken
