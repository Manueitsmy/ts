# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

- Which are the different primitive data types in TypeScript?

  The different primitivive data types in TypeScript :
  * boolean: Represents a logical value, either true or false.

```
let isDone: boolean = false;
```

  * number: Represents numeric values, both integers and floating-point numbers.

```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

  * string: Represents textual data, enclosed in single or double quotes.

```
let color: string = "blue";
let fullName: string = `John Doe`;
```

  * null and undefined: These are special types that have the values null and undefined, respectively.

```
let n: null = null;
let u: undefined = undefined;
```

  * symbol: Represents unique, immutable values that are often used as keys in objects.

```
let sym1 = Symbol("key1");
let sym2 = Symbol("key2");
```

  * bigint: Represents arbitrary precision integers. This is a feature added in TypeScript 3.2.

```
let bigIntValue: bigint = 100n;
```

  These primitive data types provide the building blocks for more complex data structures and objects in TypeScript.


- How to type an Array?

  * Using Type[] syntax
  * Using Array<Type> syntax:
  * You can also use the readonly modifier to create an immutable array:

```
  // Readonly array of numbers
let readOnlyNumbers: readonly number[] = [1, 2, 3, 4, 5];
```

  * Additionally, TypeScript allows you to specify a tuple type, which is an array with a fixed number of elements, each of a specific type:

```
  // Tuple type
let tuple: [number, string, boolean] = [1, "hello", true];
```

* In this example, tuple is a tuple with the first element being a number, the second element being a string, and the third element being a boolean. The order and types of elements in a tuple are fixed.


- What is the `any` type?

In TypeScript, the any type is a special type that is used to represent values of any type. When you declare a variable or a parameter with the any type, it essentially tells the TypeScript compiler to suspend type checking for that particular value. This means that the variable can hold values of any data type, and you can perform any operations on it without TypeScript raising type-related errors.

Here's an example of using the any type:


```
let dynamicValue: any = 5;
dynamicValue = "hello";
dynamicValue = true;
```

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


In TypeScript, a class is a fundamental building block for object-oriented programming. It provides a way to create blueprints for objects with properties and methods. Classes serve as a template for creating objects with similar structures and behavior.

Here's a basic example of a class in TypeScript:

```
class Car {
  // Properties
  make: string;
  model: string;
  year: number;

  // Constructor - a special method for initializing objects
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method
  start() {
    console.log(`The ${this.year} ${this.make} ${this.model} is starting.`);
  }
}

// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Camry', 2022);

// Accessing properties and calling methods
console.log(myCar.make); // Output: Toyota
myCar.start(); // Output: The 2022 Toyota Camry is starting.
```

In this example:

Car is a class.
make, model, and year are properties of the class.
The constructor is a special method used for initializing the object when it is created.
start is a method of the class.
Classes in TypeScript support inheritance, encapsulation, and polymorphism, which are key principles of object-oriented programming. They help organize and structure your code, making it more maintainable and scalable.


- What is a class constructor?

Like we see behind, on the class part, the constructor is a special method used for initializing the object when it is created.


- What is a class instance?

In TypeScript, a class instance is an object created from a class. When you instantiate a class, you create a specific occurrence of that class, and the resulting object is called an instance of the class. Instances have their own unique set of property values and can perform actions defined by the class's methods.

Here's an example continuing from the previous one:

```
// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Camry', 2022);

// Accessing properties and calling methods
console.log(myCar.make); // Output: Toyota
myCar.start(); // Output: The 2022 Toyota Camry is starting.
```
In this example, myCar is an instance of the Car class. It has specific values for the make, model, and year properties, as provided during its creation using the new keyword.

Each instance of a class has its own state, which is independent of other instances of the same class. This allows you to create multiple objects with the same structure (defined by the class) but with different property values. Instances encapsulate data and behavior within the boundaries of the class, promoting modularity and reusability in your code.


- How to check that a class is of a certain instance?

In TypeScript, you can use the instanceof operator to check whether an object is an instance of a particular class. The instanceof operator returns true if the object is an instance of the specified class, and false otherwise.

Here's an example using the Car class from the previous examples:

```
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`The ${this.year} ${this.make} ${this.model} is starting.`);
  }
}

// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Camry', 2022);

// Checking if an object is an instance of a particular class
if (myCar instanceof Car) {
  console.log('myCar is an instance of the Car class.');
} else {
  console.log('myCar is NOT an instance of the Car class.');
}
```

In this example, myCar instanceof Car is used to check whether myCar is an instance of the Car class. If it is, the first branch of the if statement is executed, indicating that myCar is indeed an instance of the Car class.

This type of check is useful in scenarios where you want to ensure that an object belongs to a specific class before performing certain operations or making assumptions about its structure and behavior.


- What is `this` in a class?

In a class in TypeScript (and in many other object-oriented programming languages), this refers to the instance of the class itself. It represents the current object on which a method is being invoked or the object being referred to within the class.

Here's an example to illustrate the use of this in a TypeScript class:

```
class MyClass {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  multiplyBy(factor: number): number {
    return this.value * factor;
  }

  setValue(newValue: number): void {
    this.value = newValue;
  }
}

// Creating an instance of MyClass
const myInstance = new MyClass(5);

// Using methods and accessing properties with 'this'
console.log(myInstance.getValue()); // Output: 5
console.log(myInstance.multiplyBy(2)); // Output: 10

myInstance.setValue(8);
console.log(myInstance.getValue()); // Output: 8
```
In this example:

this.value refers to the value property of the current instance of MyClass.
this is used to access and modify the properties and methods of the instance within the class methods.
It's important to note that the value of this can be influenced by how a function is called. If a method is called as a standalone function or is passed as a callback, the value of this might not be what you expect. Arrow functions, on the other hand, capture the value of this from the surrounding context and can be used to maintain the expected behavior.


- What is a class method?


In object-oriented programming, a class method is a function that is associated with a class rather than with instances of the class. In many programming languages, including TypeScript, methods are functions that are defined within a class and are intended to operate on instances of that class or perform operations related to the class itself.

Here's an example in TypeScript:

```
class Dog {
  breed: string;

  constructor(breed: string) {
    this.breed = breed;
  }

  // This is a class method
  bark(): void {
    console.log(`The ${this.breed} dog is barking!`);
  }
}

// Creating an instance of Dog
const myDog = new Dog('Golden Retriever');

// Calling the class method
myDog.bark(); // Output: The Golden Retriever dog is barking!
```

In this example:

The bark method is a class method because it is defined within the Dog class.
It is invoked on an instance of the class (myDog), and it has access to the properties of that specific instance using this.
Class methods are a way to encapsulate behavior related to a class, and they often operate on the properties of instances of that class. They contribute to the principles of encapsulation and abstraction in object-oriented programming, allowing you to define the behavior of objects within the context of the class itself.


- What is the visibility of properties?


In TypeScript, and in many other object-oriented programming languages, properties of a class can have different visibility levels, often referred to as access modifiers. These modifiers control the visibility and accessibility of properties within and outside the class. TypeScript provides three main access modifiers:

Public (public): This is the default visibility if no modifier is specified. Public properties and methods can be accessed from anywhere, both within and outside the class.

```
class MyClass {
  public myProperty: number;

  constructor(value: number) {
    this.myProperty = value;
  }
}

const instance = new MyClass(42);
console.log(instance.myProperty); // Accessing public property
```

Private (private): Private members are only accessible within the class where they are declared. They cannot be accessed from outside the class or from subclasses.

```
class MyClass {
  private myProperty: number;

  constructor(value: number) {
    this.myProperty = value;
  }

  getPropertyValue(): number {
    return this.myProperty; // Accessing private property within the class
  }
}

const instance = new MyClass(42);
// console.log(instance.myProperty); // Error: Property 'myProperty' is private
console.log(instance.getPropertyValue()); // Accessing private property through a method
```

Protected (protected): Protected members are similar to private members but are accessible within the class and its subclasses.

```
class Animal {
  protected sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`Woof, ${this.sound}!`); // Accessing protected property in a subclass
  }
}

const myDog = new Dog('Woof');
// console.log(myDog.sound); // Error: Property 'sound' is protected
myDog.bark(); // Accessing protected property through a subclass method
```

These access modifiers provide a way to control the visibility of properties and methods, helping to encapsulate the internal implementation details of a class and promoting better software design by restricting access as needed.


- What is the difference between `public`, `private` and `protected`?

In TypeScript (and in many other object-oriented programming languages), public, private, and protected are access modifiers that define the visibility and accessibility of class members (properties and methods). Here's a summary of the differences between them:

Public (public):

Visibility: Public members are accessible from anywhere, both within and outside the class.
Example:

```
class MyClass {
  public myProperty: number;

  constructor(value: number) {
    this.myProperty = value;
  }
}

const instance = new MyClass(42);
console.log(instance.myProperty); // Accessing public property
```

Private (private):

Visibility: Private members are only accessible within the class where they are declared. They cannot be accessed from outside the class or from subclasses.
Example:

```
class MyClass {
  private myProperty: number;

  constructor(value: number) {
    this.myProperty = value;
  }

  getPropertyValue(): number {
    return this.myProperty; // Accessing private property within the class
  }
}

const instance = new MyClass(42);
// console.log(instance.myProperty); // Error: Property 'myProperty' is private
console.log(instance.getPropertyValue()); // Accessing private property through a method
```
Protected (protected):

Visibility: Protected members are accessible within the class and its subclasses. They cannot be accessed from outside the class hierarchy.
Example:

```
class Animal {
  protected sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`Woof, ${this.sound}!`); // Accessing protected property in a subclass
  }
}

const myDog = new Dog('Woof');
// console.log(myDog.sound); // Error: Property 'sound' is protected
myDog.bark(); // Accessing protected property through a subclass method
```
Choosing the appropriate access modifier depends on the desired level of encapsulation and how you want to expose or restrict the usage of class members in your application. public members are accessible everywhere, private members are limited to the class itself, and protected members are accessible within the class and its subclasses.


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
