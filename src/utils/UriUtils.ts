import { TUriUtils } from '../typings/utils/UriUtils'

const UriUtils: TUriUtils = {
    userApiPath: (userId: string) => `/users/${userId}`,
    recordApiPath: () => '/url/to/another/service/records',
    remoteStorageURI: () => '/url/to/storage/service'
}

export default UriUtils;