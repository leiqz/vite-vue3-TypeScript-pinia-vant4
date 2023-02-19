interface typeEerrorCode {
  '500': string;
  [key: string]: string;
}

export const errorCode: typeEerrorCode = {
  '500': '服务器异常'
};
