import {ChangeEvent, useState} from "react";

export const useForm = <T extends any>() => {

    const [values, setValues] = useState<T>({} as T);

    const handleChange = (key: keyof T) => (e: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [key]: e.target.value
        });
    };

    return {
        values,
        handleChange
    };
}