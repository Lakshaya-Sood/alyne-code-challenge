export type LogData = {
    key: string,
    value: any
}
export type TLocalStorageClient = {
    write: (localData: LogData) => void
}

export type TRemoteStorageClient = {
    write: (remoteData: LogData) => Promise<boolean>
}