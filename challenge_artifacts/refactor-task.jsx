/**
 * ----------------------------------------
 * refactoring
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * refactor work function
 * - spot the code smell(s)
 * - rewrite the function until you think it's much better
 * - you are free to do ANYTHING
 * ----------------------------------------
 */
const work = obj => {
  if (obj.type === 'user') {
    return userClient.get(`/users/${obj.id}`);
  } else if (obj.type === 'record') {
    return recordClient.post('/url/to/another/service/records', obj);
  } else if (obj.type === 'log') {
    if (obj.allowWrite) {
      localStorage.write(obj);
      remoteStorage.write(obj);
    } else {
      console.log(obj);
    }
  }
};
