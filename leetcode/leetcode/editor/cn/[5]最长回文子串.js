//给你一个字符串 s，找到 s 中最长的回文子串。 
//
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
// 
//
// 示例 2： 
//
// 
//输入：s = "cbbd"
//输出："bb"
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 1000 
// s 仅由数字和英文字母组成 
// 
//
// Related Topics 字符串 动态规划 👍 7147 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    const n = s.length
    if (n < 2) return s
    let maxLen = 1
    let begin = 0
    let dp = Array.from(new Array(n), () => new Array(n).fill(false))
    for (let i = 0; i < n; i++) {
        dp[i][i] = true
    }
    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
                console.log(maxLen,begin)
            }
        }
    }

    return s.substring(begin,  maxLen+begin)
};
//leetcode submit region end(Prohibit modification and deletion)
