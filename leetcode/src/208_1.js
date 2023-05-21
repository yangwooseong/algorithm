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