//    String Method	  Return Value	                            Example Return Value
//   .indexOf()	      The position of a substring	              8
//   .lastIndexOf()	  Last position of a substring	            15
//   .includes()	    Boolean indicating substring presence	    true
//   .startsWith()	  Boolean indicating start match	          false
//   .endsWith()	    Boolean indicating end match	            true
//   .match()	        Array of matches or null	                ['matched']
//   .search()	      Position of regex match or -1	            4


//   .indexOf() and .lastIndexOf() Methods:
//   Return the first and last positions of a substring within a string,
//   respectively; return -1 if the substring is not found.
//
//   .includes() Method:
//   Used to check the presence of a substring in a string,
//   returning a boolean.
//
//   .startsWith() and .endsWith() Methods:
//   Determine if a string starts or ends with a specified substring,
//   respectively, returning a boolean.
//
//   .search() and .match() Methods with Regex:
//   .search() finds the first regex match's position,
//   while .match() can return all occurrences of a regex pattern in a string.
//
//   Regular Expressions (Regex):
//   Powerful tool for pattern matching in strings;
//   can find complex patterns like email addresses.
//
//   Capture Groups in Regex:
//   Allow extraction of parts of the matched string;
//   named capture groups can be used for more clarity.
//


/* ********************************************************** */
// .includes()
let textToSearch = "Hello world!";
textToSearch.includes("world"); // true
textToSearch.includes("nomad"); // false


/* ********************************************************** */
// .indexOf() and .lastIndexOf()
let textToSearch = "Hello world world";

// The substring "world" is found at index 6, at the `w`
textToSearch.indexOf("world"); // 6

// The last substring "world" is found at index 12, at the `w`
textToSearch.lastIndexOf("world"); // 12

// If the substring is not found, it returns -1
textToSearch.indexOf("nomad"); // -1

// You can call string methods directly on the string too:
"Hello world".indexOf("world"); // 6


/* ********************************************************** */
// .startsWith() and .endsWith()
let textToSearch = "Hello world!";

// Starts with
textToSearch.startsWith("Hello"); // true
textToSearch.startsWith("!"); // false

// Ends with
textToSearch.endsWith("!"); // true
textToSearch.endsWith("Hello"); // false


/* ********************************************************** */
// Use Regex to Find Strings Within Strings

let textToSearch = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
contact@example.com
Pellentesque sit amet lacus vitae massa pretium aliquam.
Nulla facilisi. info@sample.org
Donec sed dolor ac odio consequat varius.
Integer non lorem lacus. support@website.com
Maecenas non leo laoreet, condimentum lorem nec, vulputate massa.
Quisque mollis dolor non tellus placerat vitae sodales lectus porta.
Curabitur ut suscipit tellus. hello@hello-world.net
Phasellus sed sapien eget mi condimentum vehicula.
Nam cursus, diam et lacinia faucibus, email@domain.com
Nunc ultrices auctor sapien id cursus.
Aliquam erat volutpat. customer@service.com
Morbi in ipsum sit amet pede facilisis laoreet.
Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.
Vestibulum tincidunt malesuada tellus.
Ut ultrices ultrices enim. team@example.com`;

// Creating a Regular Expression in JavaScript
let emailPattern = /\S+@\S+\.\S+/;
// or
let emailPattern = new RegExp("\\S+@\\S+\\.\\S+");


// .search() method
textToSearch.search(emailPattern); // 57
textToSearch.search(/nomad/); // -1


// .match() method
let emailPattern = /\S+@\S+\.\S+/g;
// or
let emailPattern = new RegExp("\\S+@\\S+\\.\\S+", "g");

textToSearch.match(emailPattern);
/*
OUTPUT
[
  'contact@example.com',
  'info@sample.org',
  'support@website.com',
  'hello@hello-world.net',
  'email@domain.com',
  'customer@service.com',
  'team@example.com'
]
*/


textToSearch.match(/nomad/g); // null
textToSearch.match(/nomad/); // null



textToSearch.match(/\S+@\S+\.\S+/);
/*
OUTPUT
[
  'contact@example.com',
  index: 57,
  input: 'Lorem ipsum dolor sit amet, consectetur adipiscing...', (truncated)
  groups: undefined
]
*/


// Using Capture Groups in JavaScript Regular Expressions
let match = textToSearch.match(/(\S+)@\S+\.\S+/);
/*
OUTPUT
[
  0: "contact@example.com",
  1: "contact",
  index: 57,
  input: "Lorem ipsum dolor sit amet, consectetur adipiscing...", (truncated)
  groups: undefined
]
*/

let match = textToSearch.match(/(?<username>\S+)@\S+\.\S+/);

/*
OUTPUT
{
  0: "contact@example.com",
  1: "contact",
  groups: {
    username: "contact",
  },
  index: 57,
  input: "Lorem ipsum dolor sit amet, consectetur adipiscing...", (truncated)
}
*/


// .exec() method
let emailPattern = /(\S+)@\S+\.\S+/g; // Ensure you are using the global flag
let match;

while ((match = emailPattern.exec(textToSearch)) !== null) {
  console.log('Full match:', match[0]);
  console.log('Username:', match[1]);
}