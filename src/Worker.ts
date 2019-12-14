import { WorkerTypes, TObj } from './typings/Worker';

import WorkerUtils from './utils/WorkerUtils';

class Worker {
    constructor(private _type: WorkerTypes) { }
    setType(type: WorkerTypes) {
        this._type = type
    }
    async work(obj: TObj) {
        try {
            let workImplementation = WorkerUtils.getWorkImplementation[this._type];
            let res = await workImplementation(obj)
            return res
        }
        catch (err) {
            return Promise.reject(err)
        }
    }

}

export default Worker;