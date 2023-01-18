import jwtDecode from "jwt-decode";
import { DecodeToken } from "~~/type/auth.interface";

export const isValidToken = (token: string) => {
    const jwtData = jwtDecode<DecodeToken>(token) || {};
    const expires = jwtData.exp || 0;
    return (new Date().getTime() / 1000) < expires;
};
