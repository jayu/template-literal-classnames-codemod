import React from 'react';
import cx from 'classnames';

export default function Component() {
  return (
    <div>
      <p className={cx({
        [someClass]: val,
        [class1]: !val && otherVal === 'asd',
        [class2]: !val && !(otherVal === 'asd')
      })}></p>
      <p className={cx({
        [class1]: val && otherVal,
        [class2]: val && !otherVal,
        [someClass]: !val
      })}></p>
      <p className={cx({
        [class1]: val && otherVal,
        [class2]: val && !otherVal,
        [class3]: !val && anotherVal,
        [class4]: !val && !anotherVal
      })}></p>
      <p className={cx({
        [class1]: val && otherVal,
        [class3]: val && !otherVal && anotherVal,
        [class4]: val && !otherVal && !anotherVal,
        [someClass]: !val
      })}></p>
      <p className={cx({
        [someClass]: val,
        ['otherClass']: !val
      })}></p>
      <p className={cx({
        [class1]: !(val === foo)
      })}></p>
      <p className={cx({
        [class1]: !val
      })}></p>
      <p className={cx({
        [class1]: !val
      })}></p>
      <p className={cx({
        [class1]: val
      })}></p>
    </div>
  );
}