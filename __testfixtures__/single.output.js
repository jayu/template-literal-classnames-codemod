import React from 'react';

export default function Component() {
  return (
    <div>
      <p className={someClass}></p>
      <p className='literal-class'></p>
      <p customClass='literal-class'></p>
    </div>
  );
}