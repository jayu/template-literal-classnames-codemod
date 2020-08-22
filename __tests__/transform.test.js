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
);
