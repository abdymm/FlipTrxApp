import apiRequest from './_base';
import {ApiEndopints} from '@Constants';

const fetch = () => {
  const url = `${ApiEndopints.get_transactions}`;
  return apiRequest(`${url}`, 'get');
};
export {fetch};
