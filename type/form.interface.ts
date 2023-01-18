type InputType = 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';

export interface inputProps {
    id: string;
    label?: string;
    type?: InputType;
    modelValue: string | number;
    placeholder?: string;
    required?: boolean,
    error?: string;
};
