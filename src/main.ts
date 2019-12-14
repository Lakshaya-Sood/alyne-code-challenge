import { TUserObj, TRecordObj, TLogObj } from './typings/Worker';

import Worker from './Worker';

let userObj: TUserObj = {
    type: 'user',
    id: "U12345",
    name: 'John'
}

let worker = new Worker(userObj.type)
worker.work(userObj)

let recordObj: TRecordObj = {
    type: 'record',
    id: "R12345",
    name: 'John',
    createdDate: new Date(),
    createdBy: 'anonymous'
}

worker.setType(recordObj.type)
worker.work(recordObj)

let logObj: TLogObj = {
    type: 'log',
    name: 'failedaction',
    log: `User ID ${userObj.id} not able to perform action on Record ${recordObj}`,
    allowWrite: true
}

worker.setType(logObj.type)
worker.work(logObj)


