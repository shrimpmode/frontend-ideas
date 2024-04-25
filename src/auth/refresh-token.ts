import wretch from 'wretch'
import {removeTokens} from "@/client/authActions";

export const refreshToken = async ({
  refresh,
}: {
  refresh: string
}) => {
  return await wretch('http://localhost:8000/api/token/refresh/')
    .post({
      refresh
    }).json().catch(() => {
        removeTokens()
          window.location.reload()
      })
}
