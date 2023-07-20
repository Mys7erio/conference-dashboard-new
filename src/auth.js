import { atom, useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import AppRoutes from "./routes"

const API = "https://cwms-stag-dep.onrender.com"

// Function to authenticate user
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


// Function to get user info
async function getUserInfo(get) {
    const accessToken = get(accessTokenAtom)
    const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })

    const data = await response.json()
    return data
}


// Helper function to check if the user is a valid user
// It simply checks if the user has the Role attribute set on UserInfo
// It returns true if the role is defined in AppRoutes else false
async function isUserValid(get) {
    const userInfo = await get(userInfoAtom)
    const userValid = Object.keys(AppRoutes).includes(userInfo.role) ? true : false
    return userValid
}


const accessTokenAtom = atomWithStorage(
    "access_token",
    sessionStorage.getItem("access_token"),
    sessionStorage
)
const userInfoAtom = atom(getUserInfo)
const isUserValidAtom = atom(isUserValid)

// const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
// const [userInfo, setUserInfo] = useAtom(userInfoAtom)


export { authenticate, getUserInfo }
export { useAtom, accessTokenAtom, userInfoAtom, isUserValidAtom }
// export { userInfo, accessToken, setUserInfo, setAccessToken }