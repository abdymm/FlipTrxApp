// call api
import {transaction} from '@Services';
const {fetch} = transaction;
export default {
  state: {
    data: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    request() {
      return {
        data: null,
        isFetching: true,
        error: false,
      };
    },
    success(prevState, payload) {
      return {
        ...prevState,
        data: payload,
        isFetching: false,
        error: false,
      };
    },
    failure(state) {
      return {
        ...state,
        data: null,
        isFetching: false,
        error: true,
      };
    },
    clearState() {
      return {
        data: null,
        isFetching: false,
        error: false,
      };
    },
  },
  effects: {
    async fetch(payload) {
      this.request();
      return fetch()
        .then(response => {
          this.success(response?.data);
        })
        .catch(error => this.failure(error));
    },
    async clear() {
      this.clearState();
    },
  },
};
