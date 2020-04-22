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
