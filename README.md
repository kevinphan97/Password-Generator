The base of this password generator was through javascript.

The first thing to do was to find all the elements that could be included in the randomly generated passwords (uppercase letters, lowercase letters, numbers and symbols).
Then, they were all put into their own separate arrays and defined with specific variable names.
In order to find the desired password length, a window.prompt was created in line 11 and the answer that was provided (given if it was between 8 and 128) was saved into separate
variable called passwordLength.
The other functions to determine whether the user wanted to use the other elements were done using window.confirm with "okay" meaning true and "cancel" meaning false.
If these were confirmed as true then the functions would then return that function with a random element from the specific arrays.

The "while" and "switch" statements were used then to allow the script to continue running and randomizing between the separate elements chosen until the
desired length of password was reached.

All of this was then saved as "passwordNew" and using line 83, it was then printed onto the screen for the user to copy.