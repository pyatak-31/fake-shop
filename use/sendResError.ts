import { NuxtError } from "nuxt/dist/app/composables";
import { H3Event } from "h3";
import { ResError } from "~~/type/error.interface";
import { getErrorMessage } from "~~/use/getErrorMessage";

export const sendResError = (event: H3Event, resError: unknown) => {
    const error = (resError as NuxtError);
        
    const data: ResError = {
        message: getErrorMessage(error.data.error.errors),
    }
    
    sendError(event, createError({
        statusCode: error.statusCode,
        statusMessage: error.statusMessage, 
        data
    }));
};
