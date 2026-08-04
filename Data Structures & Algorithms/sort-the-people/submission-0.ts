class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names: string[], heights: number[]): string[] {
        const arr = []
        for(let i = 0 ; i < heights.length; i++) {
            arr.push([heights[i],names[i]])
        }
        arr.sort((a,b) => b[0] - a[0])

        return arr.map((x) => x[1])

    }
}
