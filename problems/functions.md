Alguns métodos comuns de strings e arrays com exemplos:

### 1. `length`
Este é uma propriedade, não um método. Retorna o número de caracteres em uma string ou o número de elementos em um array.

**Exemplo:**

```javascript
// Para strings
const texto = "Hello, World!";
console.log(texto.length); // Output: 13

// Para arrays
const array = [1, 2, 3, 4, 5];
console.log(array.length); // Output: 5
```

### 2. `slice()`
Extrai uma seção de uma string ou array e retorna uma nova string ou array sem modificar a original.

**Exemplo:**

```javascript
// Para strings
const texto = "Hello, World!";
const resultadoString = texto.slice(7, 12);
console.log(resultadoString); // Output: "World"

// Para arrays
const array = [1, 2, 3, 4, 5];
const resultadoArray = array.slice(1, 3);
console.log(resultadoArray); // Output: [2, 3]
```

### 3. `indexOf()`
Retorna o primeiro índice no qual um determinado elemento pode ser encontrado em uma string ou array. Retorna -1 se o elemento não estiver presente.

**Exemplo:**

```javascript
// Para strings
const texto = "Hello, World!";
const indiceString = texto.indexOf("World");
console.log(indiceString); // Output: 7

// Para arrays
const array = [1, 2, 3, 4, 5];
const indiceArray = array.indexOf(3);
console.log(indiceArray); // Output: 2
```

### 4. `toUpperCase()`
Retorna a string original convertida para letras maiúsculas.

**Exemplo:**

```javascript
const texto = "Hello, World!";
const textoMaiusculo = texto.toUpperCase();
console.log(textoMaiusculo); // Output: "HELLO, WORLD!"
```

### 5. `push()`
Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

**Exemplo:**

```javascript
const array = [1, 2, 3];
const novoTamanho = array.push(4, 5);
console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(novoTamanho); // Output: 5
```

### 6. `pop()`
Remove o último elemento de um array e o retorna. Este método modifica o array original.

**Exemplo:**

```javascript
const array = [1, 2, 3, 4, 5];
const ultimoElemento = array.pop();
console.log(array); // Output: [1, 2, 3, 4]
console.log(ultimoElemento); // Output: 5
```

### 7. `join()`
Une todos os elementos de um array em uma string e retorna esta string.

**Exemplo:**

```javascript
const array = ["Hello", "World"];
const stringUnida = array.join(" ");
console.log(stringUnida); // Output: "Hello World"
```

### 8. `split()`
Divide uma string em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.

**Exemplo:**

```javascript
const texto = "Hello, World!";
const arrayDividido = texto.split(", ");
console.log(arrayDividido); // Output: ["Hello", "World!"]
```

Esses são alguns exemplos de métodos comuns de strings e arrays em JavaScript. Cada método é útil para diferentes tipos de manipulações de dados.
