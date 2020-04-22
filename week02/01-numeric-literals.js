/**
 * 11.8.3 Numeric Literals
 *
 * Syntax
 *
 * NumericLiteral ::
 *    DecimalLiteral
 *    BinaryIntegerLiteral
 *    OctalIntegerLiteral
 *    HexIntegerLiteral
 *
 * DecimalLiteral ::
 *    DecimalIntegerLiteral . DecimalDigits(opt ExponentPart(opt)
 *    . DecimalDigits ExponentPart(opt)
 *    DecimalIntegerLiteral ExponentPart(opt)
 *
 * DecimalIntegerLiteral ::
 *    0
 *    NonZeroDigit DecimalDigits(opt)
 *
 * DecimalDigits ::
 *    DecimalDigit
 *    DecimalDigits DecimalDigit
 *
 * DecimalDigit :: one of
 *    0123456789
 *
 * NonZeroDigit :: one of
 *    123456789
 *
 * ExponentPart ::
 *    ExponentIndicator SignedInteger
 *
 * ExponentIndicator :: one of
 *    e E
 *
 * SignedInteger ::
 *    DecimalDigits
 *    + DecimalDigits
 *    - DecimalDigits
 *
 * BinaryIntegerLiteral ::
 *    0b BinaryDigits
 *    0B BinaryDigits
 *
 * BinaryDigits ::
 *    BinaryDigit
 *    BinaryDigits BinaryDigit
 *
 * BinaryDigit :: one of
 *    01
 *
 * OctalIntegerLiteral ::
 *    0o OctalDigits
 *    0O OctalDigits
 *
 * OctalDigits ::
 *    OctalDigit
 *    OctalDigits OctalDigit
 *
 * OctalDigit :: one of
 *    01234567
 *
 * HexIntegerLiteral ::
 *    0x HexDigits
 *    0X HexDigits
 *
 * HexDigits ::
 *    HexDigit
 *    HexDigits HexDigit
 *
 * HexDigit :: one of
 *    0123456789abcdefABCDEF
 */

const successCases = [
  '1',
  '.1',
  '1.1',
  '1.',
  '0.1',
  '1e+3',
  '1.1E-2',
  '0b11',
  '0B1',
  '0o11',
  '0O22',
  '0x1f',
  '0X1f',
]
const failureCases = [
  '1 ',
  ' .1',
  '1 .1',
  '1. ',
  '0 .1',
  '1 e+3',
  '1.1E -2',
  '0c11',
  '0B 11',
  '0o1f',
  '0O 72',
  '0O92',
  '01f',
  '0zf',
  '0 x1fx',
  '0 x 1f',
  '0X1fx',
]

function test(pattern, str) {
  console.log(str, pattern.test(str))
}

const pattern = /^(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/

successCases.map((e) => test(pattern, e))
console.log('--- false list test ---')
failureCases.map((e) => test(pattern, e))
