/**
 * https://tools.ietf.org/html/rfc3629#page-4
 *
 * Char. number range  |        UTF-8 octet sequence
 *    (hexadecimal)    |              (binary)
 * --------------------+---------------------------------------------
 * 0000 0000-0000 007F | 0xxxxxxx
 * 0000 0080-0000 07FF | 110xxxxx 10xxxxxx
 * 0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
 * 0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 *
 */

/**
 * 字符转 UTF8 编码
 *
 * @param {字符} char
 * @returns 字符的 UTF8 编码，范围（0x00000000 ~ 0x0010FFFF)
 */
function charToUTF8(char) {
  const code = char.codePointAt()

  if (code <= 0x7f) {
    return code
  } else if (code <= 0x7ff) {
    const code1 = ((code >> 6) & 0x1f) | 0xc0
    const code2 = (code & 0x3f) | 0x80

    return (code1 << 8) | code2
  } else if (code <= 0xffff) {
    const code1 = ((code >> 12) & 0x0f) | 0xe0
    const code2 = ((code >> 6) & 0x3f) | 0x80
    const code3 = (code & 0x3f) | 0x80

    return (code1 << 16) | (code2 << 8) | code3
  } else if (code <= 0x10ffff) {
    const code1 = ((code >> 18) & 0x07) | 0xf0
    const code2 = ((code >> 12) & 0x3f) | 0x80
    const code3 = ((code >> 6) & 0x3f) | 0x80
    const code4 = (code & 0x3f) | 0x80

    // 注意：此处如果使用位移会溢出
    return code1 * 2 ** 24 + (code2 << 16) + (code3 << 8) + code4
  }

  // 超出范围返回 -1
  return '-1'
}

/**
 * 字符串 UTF8 编码
 *
 * @param {字符串} str
 * @returns UTF8 编码数组
 */
function utf8Encoding(str) {
  return Array.from(str).map((char) => charToUTF8(char))
}

/**
 * 测试函数，输出二进制数组 / 十六进制数组，方便检测结果
 *
 * @param {字符串} str
 */
function test(str) {
  console.log(str)
  console.log(utf8Encoding(str).map((code) => code.toString(2)))
  console.log(utf8Encoding(str).map((code) => code.toString(16)))
}

// ['7f', 'dfbf', 'efbfbf', 'f48fbfbf']
test('\u{7f}\u{7ff}\u{ffff}\u{10ffff}')
// [ 'e69e81', 'e5aea2', 'e697b6', 'e997b4' ]
test('极客时间')
