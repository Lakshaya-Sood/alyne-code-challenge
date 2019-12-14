import { User } from '../typings/clients/UserClient';
import { Record } from '../typings/clients/RecordClient';
import { LogData } from '../typings/clients/StorageClients';

import UserClient from '../clients/UserClient';
import RecordClient from '../clients/RecordClient';
import { LocalStorageClient, RemoteStorageClient } from '../clients/StorageClients';

const _workForuser = async (obj: any) => {
    let { id } = obj;
    let user: User = await UserClient.getUser(id)
    return user
}

const _workForRecord = async (obj: any) => {
    let record: Record = {
        name: obj.name,
        createdDate: obj.createdDate,
        createdBy: obj.createdBy
    };
    return await RecordClient.createRecord(record)
}

const _workForLog = async (obj: any) => {
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

const WorkerUtils = {
    getWorkImplementation: {
        'user': _workForuser,
        'record': _workForRecord,
        'log': _workForLog
    }
}

export default WorkerUtils