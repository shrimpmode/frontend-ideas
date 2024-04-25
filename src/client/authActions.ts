import Cookies from 'js-cookie';

export const storeToken = (token: string, type: "access" | "refresh") => {
	Cookies.set(type + "Token", token);
};

export const replaceToken = (token: string, type: "access" | "refresh") => {
	Cookies.remove(type + "Token");
	Cookies.set(type + "Token", token);
}

export const getToken = (type: string) => {
	return Cookies.get(type + "Token");
};

export const removeTokens = () => {
	Cookies.remove("accessToken");
	Cookies.remove("refreshToken");
};


