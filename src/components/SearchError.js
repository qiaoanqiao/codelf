import React from 'react';
import { Label } from 'semantic-ui-react';

export default function SearchError() {
  return (
    <div className='search-error'>
      <div>接口请求错误(可能是翻译频率限制 或 searchcode.com请求不通)</div>

    </div>
  );
}
