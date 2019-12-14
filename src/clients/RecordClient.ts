import { AxiosResponse } from 'axios';
import { TRecordClient, Record, CreateRecordResp } from '../typings/clients/RecordClient';

import axios from 'axios';
import UriUtils from '../utils/UriUtils';


const RecordClient: TRecordClient = {
    createRecord: async (record: Record) => {
        let URI = UriUtils.recordApiPath()
        let response: AxiosResponse<CreateRecordResp> = await axios.post(URI, record);
        return response.data
    }
}

export default RecordClient;