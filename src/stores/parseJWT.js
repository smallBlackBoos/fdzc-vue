import {jwtDecode} from "jwt-decode"

export async function parseToken(token) {
    try {
        const decodedToken = jwtDecode(token);
        // const {username, password, role} = JSON.parse(decodedToken.payload);
        const { username, role } = decodedToken;
        return {
            success: true,
            data: {username, role},
        };
    } catch (err) {
        return {
            success: false,
            error: err.message,
        };
    }
}
