export interface LoginRequestData {
    email: string;
    password: string;
}

export interface LoginResponseData {
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    registered: boolean;
    refreshToken: string;
    expiresIn: string;
}

export interface DecodeToken {
    name: string;
    exp: number;
}
