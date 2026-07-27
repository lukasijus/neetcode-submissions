class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed: number[], n: number): boolean {
        if(flowerbed.length === 1 && flowerbed[0] === 0) return true 
        if(flowerbed[0] === 0 && flowerbed[1] === 0 && flowerbed[2] === 1) {
            flowerbed[0] = 1;
            --n
        }
        if(n === 0) return true
        if(flowerbed.length > 3) {
            if(flowerbed[flowerbed.length - 3] === 1 && flowerbed[flowerbed.length - 2] === 0 && flowerbed[flowerbed.length - 1] === 0) {
                flowerbed[flowerbed.length - 1] = 1
                --n;
            }
        }
        if(n === 0) return true
        for(let i = 1; i < flowerbed.length -1; i++) { 
            if(flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1
                --n;
            }
            if(n === 0) return true
        }
        console.log("n", n) 
        return false  
    }

}
