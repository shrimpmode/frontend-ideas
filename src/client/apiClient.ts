import wretch, { Wretch, WretchError } from 'wretch';
import { getToken, removeTokens, storeToken } from './authActions'

const api = () => {
	return wretch('http://localhost:8000/api')
		.auth(`Bearer ${getToken("access")}`)
		.catcher(401, async (error: WretchError, request: Wretch) => {
			try {
				const { access } = await wretch('http://localhost:8000/api/token/refresh/').post({
					refresh: getToken("refresh")
				}).json().catch(() => {
					removeTokens()
					window.location.replace('/login')
					console.log('fail refresh')
				})
				console.log(access)
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
