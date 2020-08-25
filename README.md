# Template Literal to `classnames` `jscodeshift` transform

This codemod transform class names concatenation implemented using Template Literals into more ergonomic concatenation using [`classnames`](https://github.com/JedWatson/classnames#readme) library.

From

```js
import React from "react";

export default function Component({ cond, cond2 }) {
  const someClass = "someClass";

  return (
    <div>
      <p className={`${someClass} string-class-name`}></p>
      <p className={`literal-class`}></p>
      <p className={`${cond && cond2 && "literal-class"}`}></p>
      <p customClassNameAttr={cond ? "literal-class" : ""}></p>
    </div>
  );
}
```

to

```js
import React from "react";
import cx from "classnames";

export default function Component({ cond, cond2 }) {
  const someClass = "someClass";

  return (
    <div>
      <p className={cx(someClass, "string-class-name")}></p> {/* Default behavior */}
      <p className="literal-class"></p> {/* Default behavior */}
      <p
        className={cx({
          ["literal-class"]: cond && cond2 /* Optional behavior */,
        })}
      ></p>
      <p
        customClassNameAttr={cx({
          ["literal-class"]: cond /* Optional behavior */,
        })}
      ></p>
    </div>
  );
}
```

> It takes care of adding `classnames` import if not exist and remove falsy classes (eg. empty string)

## How to use

Clone this repo into your project

`git clone git@github.com:jayu/template-literal-classnames-codemod.git`

### prerequisites

`npx` installed globally

`yarn global add npx`

### Executing transform with jscodeshift

> Make sure to have clean working directory, all changes commit

`npx jscodeshift -t template-literal-classnames-codemod/transform.js [option=value] [directory]`

eg.

`npx jscodeshift -t template-literal-classnames-codemod/transform.js ./src`

### Options

#### `logicalExp`

It will transform any of Logical Expression class names inside Template Literal to `classnames` format

From:

```js
<p className={`${cond && cond2 && "literal-class"}`}></p>
```

To:

```js
<p
  className={cx({
    ["literal-class"]: cond && cond2,
  })}
></p>
```

**usage**

`npx jscodeshift -t template-literal-classnames-codemod/transform.js --logicalExp=true ./src`

#### `conditionalExp`

It will transform any of Conditional Expression class names inside Template Literal to `classnames` format

From:

```js
<p className={`${cond ? "literal-class" : "literal-class-2"}`}></p>
<p className={`${cond ? "literal-class" : ''}`}></p>

```

To:

```js
<p className={cx({
  ["literal-class"]: cond,
  ["literal-class-2"]: !cond
})}></p>
<p className={cx({
  ["literal-class"]: cond
})}></p>
```

**usage**

`npx jscodeshift -t template-literal-classnames-codemod/transform.js --conditionalExp=true ./src`

#### `falsyConditionalExp`

It will transform any Conditional Expression that has one of the paths falsy and it's argument of `className` attr

From:

```js
<p className={cond ? "literal-class" : ''}></p>
<p className={cond ? "literal-class" : "literal-class-2"}></p>

```

To:

```js
<p className={cx({
  ['literal-class']: cond
})}></p>
<p className={cond ? "literal-class" : "literal-class-2"}></p>

```

**usage**

`npx jscodeshift -t template-literal-classnames-codemod/transform.js --falsyConditionalExp=true ./src`

#### `classAttrName`

You can provide JSX attribute names that also contain class names. Coma separated values. `className` is always included.

**usage**

`npx jscodeshift -t template-literal-classnames-codemod/transform.js --classAttrName=customClassName ./src`
