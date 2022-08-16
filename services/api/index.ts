import instance from '../axios';

export default {
  get(url: string) {
    return instance.get(url);
  },
};
