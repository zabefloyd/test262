// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-2-4
description: >
    Array.prototype.reduce - 'length' is own data property that
    overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        var storeProtoLength;

        function callbackfn(prevVal, curVal, idx, obj) {
            return (obj.length === 2);
        }

        try {
            storeProtoLength = Array.prototype.length;
            Array.prototype.length = 0;

            return [12, 11].reduce(callbackfn, 1) === true;
        } finally {
            Array.prototype.length = storeProtoLength;
        }
    }
runTestCase(testcase);
