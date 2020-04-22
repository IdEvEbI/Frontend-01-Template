/**
 * 11.8.4 String Literals
 *
 * Syntax
 *
 * StringLiteral ::
 *    " DoubleStringCharacters(opt) "
 *    ' SingleStringCharacters(opt) '
 *
 * DoubleStringCharacters ::
 *    DoubleStringCharacter DoubleStringCharacters(opt)
 *
 * SingleStringCharacters ::
 *    SingleStringCharacter SingleStringCharacters(opt)
 *
 * DoubleStringCharacter ::
 *    SourceCharacter but not one of " or \ or LineTerminator
 *    <LS>
 *    <PS>
 *    \ EscapeSequence
 *    LineContinuation
 *
 * SingleStringCharacter ::
 *    SourceCharacter but not one of ' or \ or LineTerminator
 *    <LS>
 *    <PS>
 *    \ EscapeSequence
 *    LineContinuation
 *
 * LineContinuation ::
 *    \ LineTerminatorSequence
 *
 * EscapeSequence ::
 *    CharacterEscapeSequence
 *    0 [lookahead ∉ DecimalDigit]
 *    HexEscapeSequence
 *    UnicodeEscapeSequence
 *
 * CharacterEscapeSequence ::
 *    SingleEscapeCharacter
 *    NonEscapeCharacter
 *
 * SingleEscapeCharacter :: one of
 *    '"\bfnrtv
 *
 * NonEscapeCharacter ::
 *    SourceCharacter but not one of EscapeCharacter or LineTerminator
 *
 * EscapeCharacter ::
 *    SingleEscapeCharacter
 *    DecimalDigit
 *    x
 *    u
 *
 * HexEscapeSequence ::
 *    x HexDigit HexDigit
 *
 * UnicodeEscapeSequence ::
 *    u Hex4Digits
 *    u{ CodePoint }
 *
 * Hex4Digits ::
 *    HexDigit HexDigit HexDigit HexDigit
 *
 * SourceCharacter ::
 *    any Unicode code point
 */

const stringPattern = /?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)/
const hexEscapePattern = /\\x[0-9a-fA-F]{2}/
const unicodeEscapePattern = /\\u[0-9a-fA-F]{4}/
const escapePattern = /\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029]/

const doublePattern = /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"/
const singlePattern = /'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/
