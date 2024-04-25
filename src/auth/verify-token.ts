import wretch from 'wretch'


export const verifyToken = async ({
  access,
}: {
  access: string
}) => {
  return await wretch('http://localhost:8000/api/token/verify/')
    .post({
      token: access
    }).json()
}
