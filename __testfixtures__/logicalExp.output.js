import React from 'react';

import cNames from 'classnames';

export default function Component() {
  return (
    <div>
      <p className={cNames({
        [className]: val && val2
      })}></p>
      <p className={cNames({
        [className]: val
      })}></p>
      <p className={cNames({
        [className]: val
      }, 'asd', {
        ['className2']: val2
      })}></p>
    </div>
  );
}

