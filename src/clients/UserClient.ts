import { AxiosResponse } from 'axios'
import { TUserClient, User } from '../typings/clients/UserClient';

import axios from 'axios';
import UriUtils from '../utils/UriUtils';

const UserClient: TUserClient = {
    getUser: async (userId: string) => {
        let URI = UriUtils.userApiPath(userId)
        let response: AxiosResponse<User> = await axios.get(URI);
        return response.data
    }
}

export default UserClient;