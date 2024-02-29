### Unions

What is a union?
    Unions allow you to declare a variable that could be more than one type or more than one value
    Ex. let myVariable: string | boolean;
        let myName: "Isaiah" | "Jessie";

### Generics

What are Generics?
    Generics provide variables to types. When declaring a string array, you can use string[].
    But if you wanted to use the built in array interface Array<> you can insert it's type between the alligators Array<string>

    We will be using generics for built in functions and types, such as the useState<> and it's type SetActionState<>
    Ex. let [name, setName] = useState<string>("")

    You can also use generics like parameters when creating interfaces
    Ex. interface IStuff<Generic> { stuff: <Generic>}