const API = "https://cwms-stag-dep.onrender.com"

async function authenticate(username, password) {
    const response = await fetch(`${API}/auth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            username: username,
            password: password,
        })
    })

    const data = await response.json()
    return data
}



async function getUserInfo(token) {
    const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `Bearer ${token}` }
    })

    const userInfo = await response.json()
    return userInfo
}


export { authenticate, getUserInfo }