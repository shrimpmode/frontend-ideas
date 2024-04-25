'use client'

import { verifyToken } from '@/auth/verify-token';
import {getToken, removeTokens, replaceToken} from '@/auth/auth-actions';
import { useMutation } from '@tanstack/react-query';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import {refreshToken} from "@/auth/refresh-token";

export const RootContext = createContext({});
export const useRootProvider = () => useContext(RootContext);

export const RootProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState({});

	const { mutate: verify,
		isPending,
		isError
	} = useMutation({
		mutationKey: ['verify-token'],
		mutationFn: async () => {
			return await verifyToken({
				access: getToken('access')
			})
		},
		onError: async () => {
			try {

			const {access}=  await refreshToken({ refresh: getToken('refresh') })
				replaceToken(access, 'access')
				window.location.reload()

			} catch (error) {
					removeTokens()
					window.location.replace('/login')
			}

		}
	})

	useEffect(() => {
		if(getToken('access')) {
			verify()
		}
	}, [])

	return (isPending || isError ) ? <>Loading</> : (
		<RootContext.Provider value={{ state, setState }}>
			{children}
		</RootContext.Provider>
	);
};
