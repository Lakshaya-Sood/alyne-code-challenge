import { User } from '../typings/clients/UserClient';
import { Record } from '../typings/clients/RecordClient';
import { LogData } from '../typings/clients/StorageClients';
import { TUserObj, TRecordObj, TLogObj, WorkerTypes } from '../typings/Worker';

import UserClient from '../clients/UserClient';
import RecordClient from '../clients/RecordClient';
import { LocalStorageClient, RemoteStorageClient } from '../clients/StorageClients';

const workForuser = async (obj: TUserObj) => {
    let { id } = obj;
    let user: User = await UserClient.getUser(id)
    return user
}

const workForRecord = async (obj: TRecordObj) => {
    let record: Record = {
        name: obj.name,
        createdDate: obj.createdDate,
        createdBy: obj.createdBy
    };
    return await RecordClient.createRecord(record)
}

const workForLog = async (obj: TLogObj) => {
    if (obj.allowWrite) {
        let data: LogData = {
            key: obj.name,
            value: obj.log
        }
        LocalStorageClient.write(data);
        return await RemoteStorageClient.write(data);
    } else {
        console.log(obj);
        return Promise.resolve(true)
    }
}

export const workImplementationFor = (type: WorkerTypes) => {
    switch (type) {
        case 'user':
            return workForuser
        case 'record':
            return workForRecord
        case 'log':
            return workForLog
        default:
            throw new Error(`Work implementation for type ${type} not present`);
    }
}