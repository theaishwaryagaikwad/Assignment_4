function isSubset(arr1, arr2) {

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    for (const elem of set2) {
        if (!set1.has(elem)) {
            return false;
        }
    }

    return true;
}

const arr1 = [11, 1, 13, 21, 3, 7];
const arr2 = [11, 2, 7, 1];

if (isSubset(arr1, arr2)) {
    console.log("arr2[] is a subset of arr1[]");
} else {
    console.log("arr2[] is not a subset of arr1[]");
}
