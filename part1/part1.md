## Part 1a

1. values added: 20
2. values added: 20
3. values added: 20
4. It would result in an error since the program is trying to access the variable 'result' with let declaration outside the block it is defined in.
5. It would result in an error before we get to line 9 since we are trying to reassign a value of a const variable.
6. It would also result in an error before we get to line 9 since we are trying to reassign a value of a const variable, and we are trying to call the variable outside of the block it is defined in.

## Part 1b

1. It prints out '3' because the prices array is length 3, which is the number i reaches to at the end of the for loop.
2. It prints out '150' because the program prints out the last item's discounted price, which is 300 * (1 - 0.5) = 150.
3. It prints out '150' because the program prints out the last item's discounted price times 100 then divide by 100, which is 150 * 100 / 100 = 150.
4. The function will return an array of prices after the discount rounded to the nearest hundred's place.
5. The code will cause an error since we are trying to access i ouside of the block it is defined in.
6. The code will cause an error since we are trying to access discountedPrice ouside of the block it is defined in.
7. It prints out '150' because the program prints out the last item's discounted price times 100 then divide by 100, which is 150 * 100 / 100 = 150. And it will not cause an error since we are accessing the variable that it is defined in.
8. The function will return an array of prices after the discount rounded to the nearest hundred's place. There will be no errors since we are accessing the variables within the block they are defined in.
9. The code will cause an error since we are trying to access i ouside of the block it is defined in.
10. It prints out 3 because that is the length of the array 'prices' passed to the function.
11. The function will return an array of prices after the discount rounded to the nearest hundred's place. There will be no errors since we are modifying the array discounted is pointed to but the pointer does not change.
12. 
- A: student.name
- B: student['Grad Year']
- C: student.greeting()
- D: student['Favorite Teacher']['name']
- E: student.courseLoad[0]

13. Arithmetic 
- A: '3' + 2 = 32 since integers map to their exact string representation
- B: '3' - 2 = 1 since strings map to their exact integer version 
- C: 3 + null = 3 since null maps to 0
- D: '3' + null = 3null since null maps to the string 'null'
- E: true + 3 = 4 since true maps to 1
- F: false + null = 0 since both false and null maps to 0
- G: '3' + undefined = 3undefined since undefined maps to the string 'undefined'
- H: '3' - undefined = NaN since undefined maps to NaN

14. Comparison
- A: true since the string 2 is mapped to its integer representation which is greater than 1
- B: false by dictionary comparison where '2' is greater than '1'
- C: true since when '2' becomes the number 2 it is equal to the integer 2
- D: false since they are not the same type
- E: false since true is mapped to integer 1 which is not the same as 2
- F: true since boolean(2) returns true which is equivalent to true without type conversion

15. the == operator means equality with or without type conversion, while === means equality without type conversion.

17. The result will be [2, 4, 6]. When we call the modifyArray function, the function 'doSomething' is passed in as a callback function. Within the function modifyArray, the callback function was used to double the values of the array originally passed into the funtion. In the end we return a new array where each number is doubled.

19. 1 4 3 2 (each integer is a newline)