import React from 'react';
import * as Tools from '../utils/Tools';

const cnText = Tools.randomList([
  '颈椎病晚期',
  '买不起奶粉',
  '快交不起房租',
  '全年996',
  '有可能会猝死',
  '快要失业',
  '头发越来越少',
  '还没从 ICU 出来',
  '天天写需求',
  '又被降薪',
  '昨晚熬夜修 BUG '
], 1)[0];
export default function Donate(props) {
  let text = <h4 className='lang'>Buy <a href='https://twitter.com/unbug' rel='noopener noreferrer' target='_blank'>@unbug</a> a drink</h4>;
  if (props.isZH) {
    text = <h4 className='lang cn'>给<a href='' rel='noopener noreferrer' target='_blank'>{cnText}的作者</a>赞赏一下吧</h4>;
  }
  return (
    <div className='donate'>
      <div className='hd'>{text}</div>
    </div>
  )
}
