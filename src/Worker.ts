import { WorkerTypes, TObj } from './typings/Worker';

import { workImplementationFor } from './utils/WorkerUtils';

class Worker {
    constructor(private _type: WorkerTypes) { }
    setType(type: WorkerTypes) {
        this._type = type
    }
    async work(obj: TObj) {
        try {
            let workImplementation = workImplementationFor(this._type);
            let res = await workImplementation(obj)
            return res
        }
        catch (err) {
            return Promise.resolve(null)
        }
    }

}

export default Worker;