'use client'

import { useForm } from "@/app/login/useForm";
import React, { FormEvent } from "react";
import { useLogin } from "@/app/login/useLogin";

type InputData = {
    email: string,
    password: string

}


type OnSubmit = (data: InputData) => void

export const LoginForm = () => {
    const { login, isPending } = useLogin()
    const { values, handleChange } = useForm<InputData>()


    const handleSubmit = (onSubmit: OnSubmit) => (e: FormEvent) => {
        e.preventDefault()
        onSubmit?.(values)
    }

    const onSubmit = (data: InputData) => {
        login(data)
    }


    return (
        <div>
            {isPending && <div>Loading...</div>}

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChange('email')}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange('password')}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
