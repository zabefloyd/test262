// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.5.4.20-3-1
description: String.prototype.trim - 'S' is a string with all LineTerminator
includes: [runTestCase.js]
---*/

function testcase() {

        var lineTerminatorsStr = "\u000A\u000D\u2028\u2029";
        return (lineTerminatorsStr.trim() === "");
    }
runTestCase(testcase);
