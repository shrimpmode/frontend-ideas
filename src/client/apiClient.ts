import wretch, { Wretch, WretchError } from 'wretch';
import { getToken, removeTokens, storeToken } from './authActions'
import { refreshToken } from '@/auth/refresh-token';

const api = () => {
	return wretch('http://localhost:8000/api')
		.auth(`Bearer ${getToken("access")}`)
		.catcher(401, async (error: WretchError, request: Wretch) => {
			try {
				const { access } = await refreshToken({ refresh: getToken("refresh") })
				storeToken(access, "access")
			} catch (error) {

			}
		})
}


export const apiQuery = (url: string) => {
	return api().get(url).json()
}


export const apiMutate = <T extends any>(url: string, data: any) => {
	return api().post(data, url).json<T>()
}
