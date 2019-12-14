

export type TUserObj = {
    type: 'user',
    id: string;
    name: string;
}

export type TRecordObj = {
    type: 'record',
    id: string;
    name: string;
    createdDate: Date;
    createdBy: string;

}

export type TLogObj = {
    type: 'log'
    name: string;
    log: any,
    allowWrite: boolean;
}

export type WorkerTypes = TUserObj['type'] | TRecordObj['type'] | TLogObj['type']

export type TObj = TUserObj | TRecordObj | TLogObj