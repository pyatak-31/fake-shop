import { NuxtError } from "nuxt/dist/app/composables";
import { H3Event } from "h3";
import { ResError } from "~~/type/error.interface";
import { getFirebaseErrorMessage } from "~~/use/getFirebaseErrorMessage";

export const sendResError = (event: H3Event, resError: unknown) => {
    const error = (resError as NuxtError);
    let data: ResError | {} = {};
 
    if (error.data.error.errors) {
        data = {
            message: getFirebaseErrorMessage(error.data.error.errors),
        }
    } else {
        data = {
            message: 'Ошибки в запросе'
        }
    }
    
    sendError(event, createError({
        statusCode: error.statusCode,
        statusMessage: error.statusMessage, 
        data
    }));
};
