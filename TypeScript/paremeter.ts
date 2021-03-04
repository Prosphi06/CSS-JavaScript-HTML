function Greet(greeting: string, name: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');//OK, returns "Hello Steve!"
//Greet('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
//Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.