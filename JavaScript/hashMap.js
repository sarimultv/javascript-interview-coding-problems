/**
 * hash Map also known as Object in JS
 * can create hash map either using {} or Map class in JS
 * object are affected by Object.prototype
 * */

const hashMap = {};
/**
 * const map= new Map();
 * Use Objects when you have simple
 * key-value pairs with string keys and don’t need to deal with
 * special types of keys.
 */

/**
 *
 * Limitations of using Objects
 * The keys are automatically converted to strings.
 * For example, if you use an object as a key, it will be converted to [object Object].
 * Objects inherit properties from Object.prototype, so there are some
 * default keys that could conflict with your keys unless you use Object.create(null).
 *
 */

hashMap["name"] = "Sarimul";
hashMap["age"] = "28";
hashMap["homeTown"] = "Silchar";

/**
 * access the values by key
 */
console.log(hashMap["homeTown"]);
console.log(hashMap["name"]);

/**
 * Check if a key exists in a object
 */

console.log("name" in hashMap);
console.log("homeTown" in hashMap);
console.log("country" in hashMap);

/**
 * delete from hashMap
 */

delete hashMap["homeTown"];
console.log(hashMap["homeTown"]);

/**
 * ES6 introducers class Map for creating objects in JS
 * Any type of value can be a key (including objects and functions).
 * Map objects are not affected by Object.prototype
 * Use Map when you need better performance, support for
 * non-string keys, or order-preserving behavior for your key-value pairs
 */

const map = new Map();

// enter the value using set() method by providing key-value pair
map.set("name", "Sarimul");
map.set("city", "Hyderabad");

// access the values by key
console.log(map.get("city"));

// check if a key exists

console.log(map.has("name"));
console.log(map.has("country"));

// delete a key from map
map.delete("name");
console.log(map.has("name"));

// check size of map
console.log(map.size);
