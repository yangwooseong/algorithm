/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

 class TreeNode {
  constructor() {
      this.isEnd = false
      this.children = {} // {[key: string]: new TreeNode}
  }

  nextNodeOf(char) {
      return this.children[char]
  }
}

class Trie {
  constructor() {
      this.root = new TreeNode()
  }

  /** 
  * @param {string} word
  * @return {void}
  */
  insert(word)  {
      let node = this.root
      for (const char of word) {
          if (!node.nextNodeOf(char)) {
              node.children[char] = new TreeNode()
          }
          node = node.nextNodeOf(char)
      }
      node.isEnd = true
  };

  /** 
  * @param {string} word
  * @return {boolean}
  */
  search(word)  {
      let node = this.root
      for (const char of word) {
          if (!node.nextNodeOf(char)) { return false }
          node = node.nextNodeOf(char)
      }

      return node.isEnd
  };

  /** 
  * @param {string} prefix
  * @return {boolean}
  */
  startsWith(prefix)  {
      let node = this.root
      for (const char of prefix) {
          if (!node.nextNodeOf(char)) { return false }
          node = node.nextNodeOf(char)
      }
      return true
  };


};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/


var findWords = function(board, words) {
  const row = board.length
  const col = board[0].length
  const visited = new Array(row).fill(0).map(v => new Array(col).fill(false))
  const PrefixTree = new Trie()
  const ans = []

  const dfs = (x, y, cur, visited) => {
      const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
      if (PrefixTree.search(cur) && !ans.includes(cur)) { 
          ans.push(cur) 
      }

      for (const dir of dirs) {
          const nx = x + dir[0]
          const ny = y + dir[1]

          if (0 <= nx && nx < row && 0 <= ny && ny < col && !visited[nx][ny]) {
              const nextString = cur + board[nx][ny]
              if (PrefixTree.startsWith(nextString)) {
                  visited[nx][ny] = true
                  dfs(nx, ny, cur + board[nx][ny], visited)
                  visited[nx][ny] = false
              }
          }
      }
  }

  for (const word of words) {
      PrefixTree.insert(word)
  }

  for (let i=0;i<row;i++) {
      for (let j=0;j<col;j++) {
          if (PrefixTree.startsWith(board[i][j])) {
              visited[i][j] = true
              dfs(i, j, board[i][j], visited)
              visited[i][j] = false
          }
      }
  }

  return ans
};