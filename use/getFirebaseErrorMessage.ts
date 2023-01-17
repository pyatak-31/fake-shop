import { FirebaseError } from "~~/type/error.interface";

export const getFirebaseErrorMessage = (errors: Array<FirebaseError>): string => {
    let answer = 'Не удалось определить ошибку';
    errors.forEach(({ message }) => {
        switch (message) {
            case 'EMAIL_NOT_FOUND' || 'INVALID_PASSWORD':
                answer = 'Не верно указан email или пароль';
                break;
            case 'USER_DISABLED':
                answer = 'Учетная запись была отключена администратором';
                break;
            case 'TOKEN_EXPIRED':
                answer = 'Учетные данные не действительны. Вам нужно снова войти в систему.';
                break;
            case 'USER_NOT_FOUND':
                answer = 'Пользователь не найден.';
                break;
            case 'INVALID_REFRESH_TOKEN':
                answer = 'Предоставлен недопустимый токен обновления.';
                break;
            case 'INVALID_GRANT_TYPE':
                answer = 'Указан недопустимый тип гранта.';
                break;
            case 'MISSING_REFRESH_TOKEN':
                answer = 'Токен обновления не предоставлен.';
                break;
        }
    });
    
    return answer;
};
