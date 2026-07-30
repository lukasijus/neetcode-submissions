class TrieNode {
    children: Map<string, TrieNode> 
    endOfWord: boolean
    constructor() {
        this.children = new Map()
        this.endOfWord = false 
    }
}
class WordDictionary {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node = this.root 
        for(let i = 0; i < word.length; i++)  {
            if(!node.children.get(word[i])) {
                node.children.set(word[i], new TrieNode())
            }
            node = node.children.get(word[i])
        }
        node.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.dfs(this.root, 0, word)
    }

    dfs(node: TrieNode, index:number, word:string): boolean {
        for(let i = index; i< word.length; i++) {
            if(!node.children.has(word[i]) && word[i] !== ".") {
                return false 
            }
            if(word[i] === ".") {
                for(const [key, value] of node.children) {
                    if(this.dfs(node.children.get(key), i + 1, word)) {
                        return true 
                    }
                }
                return false 
            }
            if(node.children.has(word[i])) {
                node = node.children.get(word[i])
            }
            
        }
        return node.endOfWord
    }
}
