import { AxiosResponse } from 'axios'
import { LogData, TLocalStorageClient, TRemoteStorageClient } from '../typings/clients/StorageClients';

import axios from 'axios';
import UriUtils from '../utils/UriUtils';


export const LocalStorageClient: TLocalStorageClient = {
    write: (localData: LogData) => {
        let { key, value } = localData
        localStorage.setItem(key, value)
    }
}

export const RemoteStorageClient: TRemoteStorageClient = {
    write: async (remoteData: LogData) => {
        let URI = UriUtils.remoteStorageURI()
        let response: AxiosResponse<boolean> = await axios.post(URI, remoteData);
        return response.data
    }
}
