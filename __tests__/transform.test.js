/**
 * Copyright 2019 AutoZone, Inc.
 * Content is confidential to and proprietary information of AutoZone, Inc., its
 * subsidiaries and affiliates.
 */

jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

defineTest(
  __dirname,
  'transform',
  { quote: 'single', classAttrName: 'customClass,firstClassName' },
  'single',
);

defineTest(
  __dirname,
  'transform',
  { quote: 'single' },
  'multiple',
);

defineTest(
  __dirname,
  'transform',
  {
    quote: 'single',
    conditionalExp: 'true',
    falsyConditionalExp: 'true'
  },
  'conditionalExp',
);

defineTest(
  __dirname,
  'transform',
  {
    logicalExp: 'true',
    quote: 'single',
    classnamesImport: 'cNames'
  },
  'logicalExp',
);
