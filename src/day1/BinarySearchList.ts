export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    do {
        let mid = Math.floor((start + end) / 2);
        if (haystack[mid] === needle) return true;
        else if (haystack[mid] < needle) start = mid + 1;
        else end = mid;
    } while (start < end);
    return false;
}
