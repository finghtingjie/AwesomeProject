module.exports = {
  bracketSpacing: true, // 对象，数组加空格
  jsxBracketSameLine: true, // jsx > 是否另起一行
  singleQuote: true, // 用单引号
  trailingComma: 'all', // 最后一个对象元素加逗号，可选 none|es5|all
  printWidth: 120, // 换行字符串阈值
  tabWidth: 2, // 每一个水平缩进的空格数
  useTabs: false, // 是否用Tab缩进
  semi: true, // 句末加分号
  arrowParens: 'avoid', // (x) => {} 是否要有小括号，可选 avoid|always
  requirePragma: false, // 是否要注释来决定是否格式化代码
  proseWrap: 'preserve', // 是否要换行，可选 always|never|preserve
  endOfLine: 'auto', // 行尾风格，可选 auto|lf|crlf|cr
  htmlWhitespaceSensitivity: 'css', // HTML文件指定全局空白, 可选css|strict|ignore
};