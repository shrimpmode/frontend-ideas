import { useMutation } from "@tanstack/react-query";
import { storeToken } from "@/client/authActions";
import { apiMutate } from "@/client/apiClient";
import { useRouter } from "next/navigation";

type InputData = {
    email: string,
    password: string
}


export type LoginResponse = {
    access: string,
    refresh: string
}

export const useLogin = () => {
    const router = useRouter()
    const {
        mutate,
        isPending,
        isError,
        isSuccess,
        data
    } = useMutation<LoginResponse, Error, InputData>({
        mutationFn: async (data) => {
            return apiMutate<LoginResponse>("/token/", data)
        },
        onSuccess: (data) => {
            storeToken(data.access, "access")
            storeToken(data.refresh, "refresh")
            router.push('/')
        }

    })

    return {
        login: mutate,
        isPending,
        data,
        isError,
        isSuccess
    }
}
