import { NuxtError } from "nuxt/dist/app/composables";
import { ResError } from "~~/type/error.interface";

export const useStore = () => {
    const error = ref<ResError | undefined>(undefined);
    const isLoading = ref<boolean>(false);

    const isError = computed<boolean>(() => Boolean(error.value));

    const clearError = () => { error.value = undefined };
    const startLoading = () => { isLoading.value = true };
    const completeLoading = () => { isLoading.value = false };
    const addError = (resError: unknown) => { error.value = (resError as NuxtError).data.data; };

    return { error, isLoading, isError, clearError, startLoading, completeLoading, addError };
};
