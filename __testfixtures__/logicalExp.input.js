import React from 'react';

export default function Component() {
  return (
    <div>
      <p className={`${val && val2 && className}`}></p>
      <p className={`${val && className}`}></p>
      <p className={`${val && className} asd ${val2 && 'className2'}`}></p>
    </div>
  );
}

