import request from '../utils/request1';

export default {
  History: urlPar => request('GET', '/japi/toh', {urlParams: urlPar}),
};
