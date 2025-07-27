# Paliscript

Holy Library to make your code support Pali language. Run .pali files directly with Node.js.

## Installation

```bash
npm install -g sht9-paliscript
```

## Usage

### Running .pali files

There are multiple ways to run .pali files:

#### Method 1: Using the paliscript run command

```bash
paliscript run your-file.pali
# or
paliscript -r your-file.pali
```

#### Method 2: Direct execution (with shebang)

1. Add a shebang to the top of your .pali file:

```
#!/usr/bin/env paliscript
```

2. Make your file executable:

```bash
chmod +x your-file.pali
```

3. Run the file directly:

```bash
./your-file.pali
```

#### Method 3: Direct invocation

If your .pali file is the first argument, it will be executed automatically:

```bash
paliscript your-file.pali
```

### Converting JavaScript to Paliscript

```bash
paliscript create-pali your-file.js
# or
paliscript -cp your-file.js
```

This will create a new file named `your-file.pali`.

### Chanting your code

```bash
paliscript chant your-file.js
# or
paliscript -c your-file.js
```

This will create a blessed voice from your code.

### Web Frontend

Launch the web frontend to convert code interactively:

```bash
paliscript
```

## Examples

Check the `_example` directory for sample files.

## License

ISC 