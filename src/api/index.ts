// 放点 接口业务
import http from '@/utils/request';

export function getUserInfo(params: object) {
  return http.request({
    url: '/...',
    method: 'post',
    data: params
  });
}
