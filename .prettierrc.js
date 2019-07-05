module.exports = {
    /**
     * 设置prettier单行输出（不折行）的（最大）长度。
     * 出于代码的可读性，我们不推荐（单行）超过80个字符的coding方式。
     * 如果在格式markdown时，不想折行，请设置 prose wrap参数来禁止这一行为。
     * default: 80
     */
    printWidth: 100,

    /**
     * 设置工具每一个水平缩进的空格数
     * default: 2
     */
    tabWidth: 4,

    /**
     * 使用tab（制表位）缩进而非空格；
     * default: false
     */
    useTabs: false,

    /**
     * 在语句末尾添加分号；
     * 有效参数：
     *      true  - 在每一条语句后面添加分号
     *      false - 只在有可能导致ASI错误的行首添加分号
     * default: true
     */
    semi: true,

    /**
     * 使用单引号而非双引号；
     * 在JSX语法中，所有引号均为双引号，该设置在JSX中被自动忽略
     * default: false
     */
    singleQuote: true,

    /**
     * default: "as-needed"
     */
    quoteProps: "as-needed",

    /**
     * default: false
     */
    jsxSingleQuote: true,

    /**
     * 在任何可能的多行中输入尾逗号。
     *      none - 无尾逗号；
     *      es5  - 添加es5中被支持的尾逗号；
     *      all  - 所有可能的地方都被添加尾逗号；（包括函数参数），这个参数需要安装nodejs8或更高版本；
     * default: "none"
     */
    trailingComma: "none",

    /**
     * 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
     *      true  - Example: { foo: bar }
     *      false - Example: {foo: bar}
     * default: true
     */
    bracketSpacing: true,

    /**
     * 在多行JSX元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素）
     * true - Example:
     *   <br
     *     onClick={this.handleClick} />
     * false - Example:
     *   <br
     *     onClick={this.handleClick}
     *   />
     * default: false
     */
    jsxBracketSameLine: false,

    /**
     * 为单行箭头函数的参数添加圆括号。
     *   avoid  - 尽可能不添加圆括号，示例：x => x
     *   always - 总是添加圆括号，示例： (x) => x
     * default: "avoid"
     */
    arrowParens: "avoid",


    /**
     * 默认情况下，Prettier会因为使用了一些折行敏感型的渲染器（如GitHub comment 和 BitBucket）
     * 而按照markdown文本样式进行折行，但在某些情况下，你可能只是希望这个文本在编译器或查看器
     * 中soft-wrapping（是当屏幕放不下时发生的软折行），所以这一参数允许设置为 " never "
     * 有效参数：
     *   always   - 当超出print width（上面有这个参数）时就折行
     *   never    - 不折行
     *   perserve - 按照文件原样折行 （v1.9.0+）
     * default: "preserve"
     */
    proseWrap: "preserve"
};
