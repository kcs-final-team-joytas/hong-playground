import {axiosInstance} from '@/apis/axiosInstance.js';

export const postReissueToken = async () => {
  const REISSUE_ENDPOINT = '/api/v1/auth/reissue'

  const {data} = await axiosInstance.post(REISSUE_ENDPOINT);

  return data;
};
