interface ErrorItem {
    value: string;
    message: string;
}

export interface ResError {
    message: string;
    errors?: Array<ErrorItem>
}

export interface FirebaseError {
    message: string;
}
