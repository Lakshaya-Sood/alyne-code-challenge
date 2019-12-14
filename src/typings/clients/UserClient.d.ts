export interface User {
    id: string,
    name: string,
    email: string,
    permissions: string[]
}

export type TUserClient = {
    getUser: (userId: string) => Promise<User>
}