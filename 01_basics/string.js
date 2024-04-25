// javaScript String Object Methods
  const name = new String("learn javaScript String"); // String
  console.log("name: ", name);
  console.log('typeof name: ', typeof name);

 //const name = "Suleman"; // String
  const StringTable = [
    {
      methodName: "length",
      description: "length of string",
      example: "name.length",
      output: name.length,
    },
    {
      methodName: "toUpperCase",
      description: "convert string to uppercase",
      example: "name.toUpperCase()",
      output: name.toUpperCase(),
    },
    {
      methodName: "toLowerCase",
      description: "convert string to lowercase",
      example: "name.toLowerCase()",
      output: name.toLowerCase(),
    },
    {
      methodName: "charAt",
      description: "get character at index",
      example: "name.charAt(2)",
      output: name.charAt(2),
    },
    {
      methodName: "indexOf",
      description: "get index of character",
      example: "name.indexOf('a')",
      output: name.indexOf("a"),
    },
    {
      methodName: "concat",
      description: "concat two strings",
      example: "name.concat(' ', 'Ahmed')",
      output: name.concat(" ", "Ahmed"),
    },
    {
      methodName: "includes",
      description: "check if string includes",
      example: "name.includes('Suleman')",
      output: name.includes("Suleman"),
    },
    {
      methodName: "startsWith",
      description: "check if string starts with",
      example: "name.startsWith('S')",
      output: name.startsWith("S"),
    },
    {
      methodName: "endsWith",
      description: "check if string ends with",
      example: "name.endsWith('n')",
      output: name.endsWith("n"),
    },
    {
      methodName: "substring",
      description: "get substring",
      example: "name.substring(0, 4)",
      output: name.substring(0, 4),
    },
    {
      methodName: "slice",
      description: "get slice",
      example: "name.slice(0, 4)",
      output: name.slice(0, 4),
    },
    {
      methodName: "split",
      description: "split string",
      example: "name.split('u')",
      output: name.split("u"),
    },
    {
      methodName: "replace",
      description: "replace string",
      example: "name.replace('Suleman', 'Ali')",
      output: name.replace("Suleman", "Ali"),
    },
    {
      methodName: "repeat",
      description: "repeat string",
      example: "name.repeat(3)",
      output: name.repeat(3),
    },
    {
      methodName: "trim",
      description: "trim string",
      example: "name.trim()",
      output: name.trim(),
    },
    {
      methodName: "padStart",
      description: "pad start string",
      example: "name.padStart(20, 'a')",
      output: name.padStart(20, "a"),
    },
    {
      methodName: "padEnd",
      description: "pad end string",
      example: "name.padEnd(20, 'a')",
      output: name.padEnd(20, "a"),
    },
    {
      methodName: "charAt",
      description: "get character at index",
      example: "name.charAt(2)",
      output: name.charAt(2),
    },
    {
      methodName: "charCodeAt",
      description: "get character code at index",
      example: "name.charCodeAt(2)",
      output: name.charCodeAt(2),
    },
    {
      methodName: "fromCharCode",
      description: "get character from code",
      example: "String.fromCharCode(65)",
      output: String.fromCharCode(65),
    },
    {
      methodName: "match",
      description: "match string",
      example: "name.match(/a/g)",
      output: name.match(/a/g),
    },
    {
      methodName: "search",
      description: "search string",
      example: "name.search('a')",
      output: name.search("a"),
    },
    {
      methodName: "localeCompare",
      description: "compare string",
      example: "name.localeCompare('Suleman')",
      output: name.localeCompare("Suleman"),
    },
    {
      methodName: "toString",
      description: "convert to string",
      example: "name.toString()",
      output: name.toString(),
    },
    {
      methodName: "valueOf",
      description: "get value of string",
      example: "name.valueOf()",
      output: name.valueOf(),
    },
    {
      methodName: "trimStart",
      description: "trim start string",
      example: "name.trimStart()",
      output: name.trimStart(),
    },
    {
      methodName: "trimEnd",
      description: "trim end string",
      example: "name.trimEnd()",
      output: name.trimEnd(),
    },
 
    
  ];

  console.table(StringTable);
 