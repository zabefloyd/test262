// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1.2-13-s
description: >
    Strict Mode - SyntaxError isn't thrown when 'implementss' occurs
    in strict mode code
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";
        var implementss = 1;
        return implementss === 1;
    }
runTestCase(testcase);
