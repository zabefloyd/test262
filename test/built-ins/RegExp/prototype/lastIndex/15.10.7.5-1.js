// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.10.7.5-1
description: RegExp.prototype.lastIndex is of type Undefined
includes: [runTestCase.js]
---*/

function testcase() {
  return (typeof(RegExp.prototype.lastIndex)) === 'undefined';
 }
runTestCase(testcase);
