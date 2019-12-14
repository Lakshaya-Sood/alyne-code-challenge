export type TUriUtils = {
    userApiPath: (userId: string) => string,
    recordApiPath: () => string,
    remoteStorageURI: () => string
}