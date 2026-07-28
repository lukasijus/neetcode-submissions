class TrieNode{
    children: null | Map<string, any>
    endOfWord: boolean
    constructor() {
        this.children = new Map()
        this.endOfWord = false 
    }
}


class PrefixTree {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void { // lukas
        let node = this.root
        for(let i = 0; i < word.length; i++) {
            if(!node.children.has(word[i])){
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
    search(word: string): boolean { // word: love
        let node  = this.root
        for(let i = 0; i < word.length; i++) {
            if(!node.children.has(word[i])) return false
            node = node.children.get(word[i])
        }
        return node.endOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let node = this.root 
        for(let i = 0; i < prefix.length; i++) {
            if(!node.children.has(prefix[i])) return false 
            node = node.children.get(prefix[i])
        }
        return true
    }
}
