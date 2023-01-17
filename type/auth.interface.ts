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

export interface RefreshResponseData {
    access_token: string;
    expires_in: string;
    token_type: string;
    refresh_token: string;
    id_token: string;
    user_id: string;
    project_id: string;
}

export interface DecodeToken {
    name: string;
    exp: number;
}
