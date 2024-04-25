'use client'

import { verifyToken } from '@/auth/verify-token';
import {getToken, removeTokens, replaceToken} from '@/client/authActions';
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
			const {access}=  await refreshToken({ refresh: getToken('refresh') })
				.catch(() => {
					removeTokens()
					window.location.replace('/login')
				})
			replaceToken(access, 'access')
			window.location.reload()
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
