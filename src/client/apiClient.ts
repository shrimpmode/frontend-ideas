import wretch from 'wretch';
import { getToken } from './authActions'

const api = () => {
	return wretch('http://localhost:8000/api')
		.auth(`Bearer ${getToken("access")}`)
}


export const apiQuery = (url: string) => {
	return api().get(url).json()
}


export const apiMutate = <T extends any>(url: string, data: any) => {
	return api().post(data, url).json<T>()
}
