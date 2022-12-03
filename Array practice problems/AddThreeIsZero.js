function sumOfThreeIsZero(n1,n2,n3){
    return ((n1+n2+n3)==0)
}

let num1=12, num2=23, num3=-35;

console.log(sumOfThreeIsZero(num1,num2,num3));


function findTriplets(arr){
		 found = false;
		for (let i = 0; i < n - 2; i++) {
			for (let j = i + 1; j < n - 1; j++) {
				for (let k = j + 1; k < n; k++) {
					if (arr[i] + arr[j] + arr[k] == 0) {
						console.log(arr[i] + " "
										+ arr[j] + " "
										+ arr[k]);
						found = true;
					}
				}
			}
		}

		if (found == false)
			System.out.println(" not exist ");
	}


		let arr = [0, -1, 2, -3, 1];
		let n = arr.length;
		findTriplets(arr, n);
