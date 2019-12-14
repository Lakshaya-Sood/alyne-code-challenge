import { TUserObj, TRecordObj, TLogObj } from './typings/Worker';

import Worker from './Worker';

let worker: Worker;

/*
*********************************
*** Work for User type Object ***
*********************************
*/
let userObj: TUserObj = {
    type: 'user',
    id: "U12345",
    name: 'John'
}
worker = new Worker(userObj.type)
worker.work(userObj)
    .then(user => {
        /* DO SOMETHING WITH USER DATA */
    })
    .catch(err => {
        /* DO SOMETHING ON ERROR */
    })



/*
***********************************
*** Work for Record type Object ***
***********************************
*/
let recordObj: TRecordObj = {
    type: 'record',
    id: "R12345",
    name: 'John',
    createdDate: new Date(),
    createdBy: 'anonymous'
}
worker.setType(recordObj.type)
worker.work(recordObj)
    .then(record => {
        /* DO SOMETHING WITH RECORD DATA */
    })
    .catch(err => {
        /* DO SOMETHING ON ERROR */
    })

/*
********************************
*** Work for Log type Object ***
********************************
*/
let logObj: TLogObj = {
    type: 'log',
    name: 'failedaction',
    log: `User ID ${userObj.id} not able to perform action on Record ${recordObj}`,
    allowWrite: true
}
worker.setType(logObj.type)
worker.work(logObj)
    .then(log => {
        /* DO SOMETHING WITH LOG DATA */
    })
    .catch(err => {
        /* DO SOMETHING ON ERROR */
    })


