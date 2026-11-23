class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false ;

        const shash: Map<string, number> = new Map()
        const thash: Map<string, number> = new Map()

        for(let i: number = 0; i < s.length; i++){
            const tmpS = shash.get(s[i]) || 0
            const tmpT = thash.get(t[i]) || 0

            shash.set(s[i], tmpS+1)
            thash.set(t[i], tmpT+1)
        }

        for(const [key, value] of shash){
            if(!thash.has(key) || thash.get(key) !== value)
                return false
        }

        return true
    }
}
