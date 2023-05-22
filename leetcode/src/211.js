class TreeNode {
  constructor() {
      this.isEnd = false
      this.children = {} // {[key: string]: new TreeNode}
  }

  nextNodeOf(char) {
      return this.children[char]
  }

  setNextNodeWith(char) {
      this.children[char] = new TreeNode()
  }
}

var WordDictionary = function() {
  this.root = new TreeNode()
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let node = this.root

  for (const char of word) {
      if (!node.nextNodeOf(char)) {
          node.setNextNodeWith(char)
      }
      node = node.nextNodeOf(char)
  }

  node.isEnd = true
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  let nodes = [this.root]

  for (const char of word) {
      if (char === '.') {
          nodes = nodes.flatMap(node => Object.values(node.children))
      } else {
          nodes = nodes.map(node => node.nextNodeOf(char)).filter(v => !!v)
      }
  }

  return nodes.some(node => node.isEnd)
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/