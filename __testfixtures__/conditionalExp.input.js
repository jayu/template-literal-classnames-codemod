import React from 'react';
import cx from 'classnames';

export default function Component() {
  return (
    <div>
      <p className={`${val ? someClass : otherVal === 'asd' ? class1 : class2}`}></p>
      <p className={`${val ? otherVal ? class1 : class2 : someClass }`}></p>
      <p className={`${val ? otherVal ? class1 : class2 : anotherVal ? class3 : class4 }`}></p>
      <p className={`${val ? otherVal ? class1 : anotherVal ? class3 : class4 : someClass }`}></p>
      <p className={`${val ? someClass : 'otherClass'}`}></p>
      <p className={`${val === foo ? '' : class1}`}></p>
      <p className={`${val ? null : class1}`}></p>
      <p className={`${val ? undefined : class1}`}></p>
      <p className={val ? class1 : ''}></p>
    </div>
  );
}

