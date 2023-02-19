import axios, { AxiosResponse } from 'axios';
import { errorCode } from './errorCode';
import { showFailToast } from 'vant';

// 可以下载点加密的插件 比如 AES 或者 RSA 等....
// 根据业务逻辑修改 此处封装个大概

// 获取环境变量
const baseURL = import.meta.env.VITE_API || '';

const http = axios.create({
  baseURL,
  timeout: 30 * 1000
});

// 请求拦截
http.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      // 'Content-Type': 'application/json;charset=UTF-8',
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      token: '/..',
      ts: new Date().getTime()
      // .....
    };
    if (config.method === 'get') {
      config.params = {
        _t: new Date().getTime(),
        ...config.params
      };
    }
    // .....
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 读取文档流
const readBlob = (response: AxiosResponse) =>
  new Promise(resolve => {
    const fileRead = new FileReader();
    fileRead.readAsText(response.data);
    fileRead.onload = () => {
      const code = fileRead?.result || '';
      resolve(JSON.parse(code));
    };
    fileRead.onerror = () => {
      resolve({});
    };
  });

// 响应拦截
http.interceptors.response.use(
  async res => {
    // blob 请求特殊处理
    if (res.config.responseType === 'blob') {
      const isJson = res.data.type === 'application/json';
      if (!isJson) return res;
      res.data = await readBlob(res);
    }

    const { code, message } = res?.data || {};
    // 错误提示拦截
    const showMessage = () => {
      const messageTip = errorCode[code] || message || '服务器异常';
      showFailToast(messageTip);
    };

    // 返回成功响应
    if (String(code) === '200') return res;

    showMessage();

    //.......

    return Promise.reject(res);
  },
  error => {
    showFailToast(error);
    //.....
  }
);

export default http;
