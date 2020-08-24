import React from 'react';

import cx from 'classnames';

export default function Component() {
  return (
    <div>
      <p className={cx(someClass, otherClass)}></p>
      <p className={cx('literal-class', 'literal-class-2')}></p>
      <p className={cx('literal-class', anotherClass, 'literal-class-2')}></p>
      <p className={cx('literal-class', anotherClass, 'literal-class-2')}></p>
      <p className={cx(val ? someClass : other, 'cls', val && otherClass)}></p>
      <p className={val ? someClass : otherVal ? class1 : class2}></p>
    </div>
  );
}