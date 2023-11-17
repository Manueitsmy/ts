# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

- Which are the different primitive data types in TypeScript?

  The different primitivive data types in TypeScript :
  * boolean: Represents a logical value, either true or false.

  ````
let isDone: boolean = false;
  ````

  * number: Represents numeric values, both integers and floating-point numbers.

  ````
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
  ````

  * string: Represents textual data, enclosed in single or double quotes.

  ````
let color: string = "blue";
let fullName: string = `John Doe`;
  ````

  * null and undefined: These are special types that have the values null and undefined, respectively.

  ````
let n: null = null;
let u: undefined = undefined;
  ````

  * symbol: Represents unique, immutable values that are often used as keys in objects.

  ````
let sym1 = Symbol("key1");
let sym2 = Symbol("key2");
  ````

  * bigint: Represents arbitrary precision integers. This is a feature added in TypeScript 3.2.

  ````
let bigIntValue: bigint = 100n;
  ````

  These primitive data types provide the building blocks for more complex data structures and objects in TypeScript.


- How to type an Array?

  * Using Type[] syntax
  * Using Array<Type> syntax:
  * You can also use the readonly modifier to create an immutable array:

  ````
  // Readonly array of numbers
let readOnlyNumbers: readonly number[] = [1, 2, 3, 4, 5];
````

  * Additionally, TypeScript allows you to specify a tuple type, which is an array with a fixed number of elements, each of a specific type:

  ````
  // Tuple type
let tuple: [number, string, boolean] = [1, "hello", true];
````

* In this example, tuple is a tuple with the first element being a number, the second element being a string, and the third element being a boolean. The order and types of elements in a tuple are fixed.


- What is the `any` type?

In TypeScript, the any type is a special type that is used to represent values of any type. When you declare a variable or a parameter with the any type, it essentially tells the TypeScript compiler to suspend type checking for that particular value. This means that the variable can hold values of any data type, and you can perform any operations on it without TypeScript raising type-related errors.

Here's an example of using the any type:


 ````
let dynamicValue: any = 5;
dynamicValue = "hello";
dynamicValue = true;
 ````

In the above example, dynamicValue is initially assigned a number, then a string, and finally a boolean. Since its type is any, TypeScript doesn't raise any errors.

While the any type provides flexibility, it comes at the cost of losing the benefits of static typing. You lose the advantages of type checking during development, as TypeScript won't catch potential type-related errors on variables of type any. It's generally recommended to avoid using any whenever possible and instead use more specific types to take advantage of TypeScript's static typing features.

If you need to work with values of unknown types but still want to maintain some level of type safety, TypeScript 3.0 and later versions introduce the unknown type, which requires explicit type checking before performing certain operations.


- How to type the return of a function as well as the type of its parameters?


In TypeScript, you can explicitly type the return value of a function as well as the types of its parameters by specifying the types in the function signature. Here's an example:

```
// Function with explicit parameter types and return type
function addNumbers(x: number, y: number): number {
    return x + y;
}

// Example usage
let result: number = addNumbers(3, 5);
console.log(result); // Output: 8

```

In this example:

The function addNumbers takes two parameters (x and y), both of type number.
The return type of the function is explicitly specified as number.
You can also use TypeScript's type inference to automatically infer the types of parameters and the return type based on the function implementation. However, it's often a good practice to provide explicit type annotations for better readability and to catch potential errors.

If a function does not return anything, you can specify the return type as void:

```
function logMessage(message: string): void {
    console.log(message);
}
```
If a function can return multiple types, you can use union types:

```
function getStringOrNumber(value: boolean): string | number {
    return value ? "hello" : 42;
}

let result: string | number = getStringOrNumber(true);
```
This function can return either a string or a number, and the return type is specified as string | number.


**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 2

- What is a class?



- What is a class constructor?




- What is a class instance?




- How to check that a class is of a certain instance?




- What is `this` in a class?




- What is a class method?
- What is the visibility of properties?
- What is the difference between `public`, `private` and `protected`?

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 3

- How to split our program into different files? (e.g. a class in a file that I import into another)
- What is the `export` keyword?
- What is the `import` keyword?
- What's inheritance?
- How to call the constructor of a parent class?
- How to call a method of a parent class?
- What is polymorphism?

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Boss level

You've learned a lot of things! Now it's time to put it into practice through this exercise in pairs!

### Part 1 : Heroes

Create a `Hero` class that allows you to create objects with the following properties:

```ts
name: string;
power: number;
life: number;
```

And the methods

```ts
  attack(opponent: Hero)
  isAlive()
```

The `attack` method has an `opponent` parameter (of type `Hero`). It is necessary to reduce the number (`life`) of `opponent` by as much damage (`power`) of the attacker.

​*Example: If the Joan instance, attacks the Leon instance, it will be represented by this method call:*

```ts
joan.attack(leon);
```

The `isAlive` method should return `true` if the hero's life points are greater than zero and `false` otherwise.

Create two instances of `Hero` and check that the `attack` and `isAlive` methods work.

**Constraint to add**: you now have to make sure that the `name`, `power`, `life` properties are private. You will have to create methods to access their value and modify their value.

### Part 2 : Weapons

​
Create a `Weapon` class with the following property:

```ts
name: string;
```

Add the `weapon` attribute (of type `Weapon`) to the `Hero` class without modifying the constructor (so `weapon` is not initialized).

Create three classes `HeroAxe`, `HeroSword` and `HeroSpear` that inherit from `Hero`.

These three classes call the constructor of their parent and initialize `weapon` with instances of the `Weapon` class whose names will be `axe`, `sword` or `spear` as the case may be.

In the `HeroAxe`, `HeroSword` and `HeroSpear` classes, redefine the `attack` method to take into account the following cases:

- `HeroAxe` : if the type of `opponent` is `HeroSword`, multiply `power` by two
- `HeroSword` : if the type of `opponent` is `HeroSpear`, multiply `power` by two
- `HeroSpear` : if the type of `opponent` is `HeroAxe`, multiply `power` by two

Tip: use the `super` keyword to call the `attack` method of the parent class.
​
Create instances of the three classes `HeroAxe`, `HeroSword` and `HeroSpear` and check that their `attack` methods work correctly.
​

### Part 3 : Battle

Create a loop that makes two instances of subclasses `Hero` fight each other (they attack at the same time).

When at least one of them is dead, display `{heroName} wins`. If both are dead, display `It's a draw`.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

---

**_Bonus 1 : Weapon damage_**

_Add a `damage` property to the `Weapon` class and make sure it is initialized by the constructor._

_Edit the `attack` method of `Hero` so that the damage is calculated as follows: the hero's power `power` + the weapon's damage `power`_

**_Bonus 2 : User interface_**

_Create a user interface for the application (for example, with a choice of heroes and weapons, and a visual on the damage inflicted)_
