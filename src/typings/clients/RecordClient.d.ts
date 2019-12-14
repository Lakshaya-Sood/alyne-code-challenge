export type Record = {
    name: string,
    createdDate: Date,
    createdBy: string
}

export type CreateRecordResp = {
    id: string,
    record: Record
}

export type TRecordClient = {
    createRecord: (record: Record) => Promise<CreateRecordResp>
}