# immutablejs-json

[![npm version](https://img.shields.io/npm/v/immutablejs-json.svg)](https://www.npmjs.com/package/immutablejs-json)
[![license](https://img.shields.io/npm/l/immutablejs-json.svg)](https://github.com/kinshukshah/immutablejs-json/blob/main/LICENSE)

## Overview

`immutablejs-json` is a JavaScript library that provides a function called `deepSeal` to create deeply immutable objects. It ensures that the nested level objects cannot be mutated, promoting immutability within your applications. This helps maintain data integrity and simplifies state management, especially in scenarios like Redux, where immutable data structures are preferred.

## Installation

You can install the package via npm or yarn:

```bash
npm install immutablejs-json

# or

yarn add immutablejs-json

```

## Usage
To use deepSeal, simply import it into your project and apply it to your objects:

```
const { deepSeal } = require('immutablejs-json');

const myObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const immutableObject = deepSeal(myObject);

// Attempting to modify properties will throw an error
immutableObject.name = 'Jane'; // Throws an error
immutableObject.address.city = 'San Francisco'; // Throws an error

// However, you can still access properties
console.log(immutableObject.name); // Output: "John"
console.log(immutableObject.address.city); // Output: "New York"

```
## Key Features
- Create deeply immutable objects to prevent nested level object mutations.
- Helps in enforcing immutability and improving state management.
- Lightweight and easy-to-use.

## Contribution
Contributions to `immutablejs-json` are always welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request. Make sure to follow the existing coding style and add appropriate test cases.

## License
`immutablejs-json` is open-source software licensed under the MIT License.

Thank you for considering using immutablejs-json. If you have any questions or need further assistance, feel free to reach out to us or create an issue on GitHub.

Happy coding! 😄








