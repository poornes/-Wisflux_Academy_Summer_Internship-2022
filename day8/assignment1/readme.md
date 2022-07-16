Typescript quiz (Basic Level - 1)

1) What are the basic data types in typescript?

    stings, numbers, boolean, void, null, undefine, never, any


2)What is generic data type

    To create generic functions like identity, the compiler will enforce that you use any generically typed parameters in the body of the function correctly. That is, that you actually treat these parameters as if they could be any and all types.


3)What is type inferring in TS.

        TypeScript infers types of variables when there is no explicit information available in the form of type annotations. When a type inference is made from several expressions, the types of those expressions are used to calculate a “best common type”.

        Example:

        let x = [0, 1, null];

        let x: (number | null)[]


4)What are the possible ways to define typing for functions.

    In TypeScript, there are multiple syntaxes for declaring the type of a function:

    Method signatures.

    The method signature syntax is probably the most straightforward to use. When defining an object type

    interface Date {
    toString(): string;
    setTime(time: number): number;
    // ...
    }
    Function type literals.

    Function type literals are another way to declare the type of a function. They're typically used in the signature of a higher-order function, that is, a function which accepts functions as parameters or which returns a function:

    interface Array<T> {
    sort(compareFn?: (a: T, b: T) => number): this;
    // ...
    }
    Object type literals with call/construct signatures.

    In JavaScript, functions are nothing but special objects than can be called. This fact is reflected in the syntax of object type literals: they describe the shape of an object, which also happens to have a call signature:

    interface Date {
    toString(): string;
    setTime(time: number): number;
    // ...
    }
5)How to define Generic type for Classes.


    A Generic class simply means that the items or functions in that class can be generalized with the parameter(example T) to specify that we can add any type as a parameter in place of T like Integer, Character, String, Double or any other user-defined type.

    These classes are known as parameterized classes or parameterized types because they accept one or more parameters