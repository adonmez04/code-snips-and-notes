// Basic String Replacement with .replace()
// .replace() method
let greeting = "Hello, world!";
greeting.replace("world", "internet"); // Hello, internet!

// You can also call string methods directly on the string literal:
"Hello, world!".replace("world", "internet"); // Hello, internet!

// Replacing All Instances of a String with .replaceAll()
// .replaceAll() method
"Hello, world! The world is beautiful.".replaceAll("world", "internet");
// Hello, internet! The internet is beautiful.

let text = `Hello, world! The world is beautiful.
  We must protect the beautiful world.
  We must protect the beautiful world!
  `;

text
  .replaceAll("world", "internet")
  .replaceAll("the", "our")
  .replaceAll("The", "Our")
  .replaceAll("beautiful", "wonderful")
  .replaceAll("protect", "save");

/*
Hello, internet! Our internet is wonderful.
We must save our wonderful internet.
We must save our wonderful internet!
*/

// Find and Replace Strings With Regex
let text = "Java, java, JAVA, jAVA";
text.replace(/java/i, "JavaScript");
// "JavaScript, java, JAVA, jAVA"



let text = "Java, java, JAVA, jAVA";

text.replaceAll(/java/gi, "JavaScript");
// "JavaScript, JavaScript, JavaScript, JavaScript"

text.replace(/java/gi, "JavaScript");
// "JavaScript, JavaScript, JavaScript, JavaScript"


// Find and Replace Strings With Regex and Capture Groups
let text =
  "squeezy@lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net";

text.replaceAll(/\S+@(\S+\.\S+)/gi, "$1");
// lemon-aid.io, wooflogistics.com, eggnogemporium.net

// Also works with .replace():
text.replace(/\S+@(\S+\.\S+)/i, "$1");
// lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net


// Find and Replace Strings With Regex and Callback Functions
let clients = ["lemon-aid", "eggnogemporium"];
let text =
  "squeezy@lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net";

function replacer(match, domainCaptureGroup, offset, string, groups) {
  for (let i = 0; i < clients.length; i++) {
    if (domainCaptureGroup.includes(clients[i])) {
      return domainCaptureGroup;
    }
  }
  return "";
}

text.replaceAll(/\S+@(\S+\.\S+)/gi, replacer);
// lemon-aid.io,  eggnogemporium.net



/*
* It's also worth noting that if you don't intend to use
* the offset,
* string,
* or groups arguments,
* then you can omit them from your replacer function:
* */
function replacer(match, domainCaptureGroup) {
  for (let i = 0; i < clients.length; i++) {
    if (domainCaptureGroup.includes(clients[i])) {
      return domainCaptureGroup;
    }
  }
  return "";
}

// Here's a more advanced and idiomatic way to write the above code:
let clients = ["lemon-aid", "eggnogemporium"];
let text =
  "squeezy@lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net";

text.replaceAll(/\S+@(\S+\.\S+)/gi, (match, domainCaptureGroup) => {
  return clients.some((client) => domainCaptureGroup.includes(client))
    ? domainCaptureGroup
    : "";
});
// lemon-aid.io,  eggnogemporium.net