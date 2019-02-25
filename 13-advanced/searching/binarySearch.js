const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20,24,30].sort();

const binarySearch = (haystack, needle) => {
  // Return the index of needle within the haystack array
  // or null if needle if not found
  let start = 0;
  let end = haystack.length - 1;

  while (start <= end) {
    //let mid = Math.round ((start + end) / 2); // This line has a bug.
    let mid = Math.round( start + (end - start) / 2); // This lien is interesting.

    if (haystack[mid] > needle) {
      end = mid - 1;
    } else if (haystack[mid] < needle) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  // your code goes hered
  return null; // needle not found

}

a.forEach((n) => {
  console.log( binarySearch(a,n) );
})
