class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash: Array<number> = []
        let isDuplicated: boolean = false
        for(let num of nums){
            if(hash.includes(num)){
                isDuplicated = true;
                break;
            } else {
                hash.push(num)
            }
        }
        return isDuplicated;
    }
}
