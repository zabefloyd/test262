// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.6
description: >
    The TV of TemplateCharacter :: \ EscapeSequence is the SV of
    EscapeSequence.
    The TRV of EscapeSequence :: 0 is the code unit value 0x0030.
---*/
var calls = 0;

(function(s) {
  calls++;
  assert.sameValue(s[0], ' ', '"Cookied" value');
  assert.sameValue(s.raw[0], '\\0', '"Raw" value');
})`\0`;
assert.sameValue(calls, 1);
