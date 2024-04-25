import wretch from 'wretch'
import {removeTokens} from "@/auth/auth-actions";

export const refreshToken = async ({
  refresh,
}: {
  refresh: string
}) => {
  return await wretch('http://localhost:8000/api/token/refresh/')
    .post({
      refresh
    }).json<{access: string}>()
}
