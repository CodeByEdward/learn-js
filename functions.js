// Create function with function Name(parameters)

// Simple function with one parameter
function Hello1(name) {
    console.log("Hi " + name);
}

// Function with multiple parameters
function Hello2(name1, name2) {
    console.log("Hi " + name1 + ", " + name2);
}

// Function with rest parameters (for undefined number of parameters)
function Hello3(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("Hi " + args[i]);
    }
}

// Now to execute function, use

Hello1("Edward");          // Output: Hi Edward
Hello2("Edward", "Andrew"); // Output: Hi Edward, Andrew
Hello3("Edward", "Andrew", "James", "Robert"); // Output: Hi Edward Hi Andrew Hi James Hi Robert
