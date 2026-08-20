class MinStack {
    stack: number[]
    min: number[]
    constructor() {
        this.stack = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        if(this.stack.length === 1) {
            this.min.push(val)
        } else {
            const m = this.min[this.min.length - 1]
            if(m >= val) {
                this.min.push(val)
            }
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const num = this.stack.pop()
        if(num === this.min[this.min.length - 1]) {
            this.min.pop()
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min[this.min.length - 1]
    }
}
