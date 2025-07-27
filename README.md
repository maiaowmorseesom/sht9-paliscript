# Paliscript

Holy Library to make your code support Pali language. Run .paliscript files directly with Node.js.

## Installation

```bash
npm install -g sht9-paliscript
```

## Usage

### Running .paliscript files

There are multiple ways to run .paliscript files:

#### Method 1: Using the paliscript run command

```bash
paliscript run your-file.paliscript
# or
paliscript -r your-file.paliscript
```

#### Method 2: Direct execution (with shebang)

1. Add a shebang to the top of your .paliscript file:

```
#!/usr/bin/env paliscript
```

2. Make your file executable:

```bash
chmod +x your-file.paliscript
```

3. Run the file directly:

```bash
./your-file.paliscript
```

#### Method 3: Direct invocation

If your .paliscript file is the first argument, it will be executed automatically:

```bash
paliscript your-file.paliscript
```

### Converting JavaScript to Paliscript

```bash
paliscript create-pali your-file.js
# or
paliscript -cp your-file.js
```

This will create a new file named `your-file.paliscript`.

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