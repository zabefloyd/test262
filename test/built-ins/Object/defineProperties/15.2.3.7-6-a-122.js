// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-122
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', test setting the [[Value]] field of 'desc' to
    null actuall is set to 0 (15.4.5.1 step 3.c)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1];

        Object.defineProperties(arr, {
            length: { value: null }
        });
        return arr.length === 0;

    }
runTestCase(testcase);
