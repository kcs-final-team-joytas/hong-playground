import {axiosInstance} from '@/apis/axiosInstance.js';
import {postReissueToken} from "@/apis/member/postReissueToken.js";

// 401 오류시 reissue interceptor
export const handleTokenError = async (error) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest)
    throw new Error('에러가 발생했습니다.');

  const {data, status} = error.response;

  if (
    status === 401 &&
    (data.code === 'UNAUTHORIZED' || data.code === 'EXPIRED_TOKEN')
  ) {
    const {accessToken} = await postReissueToken();
    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

    return axiosInstance(originalRequest);
  }

  throw error;
};
