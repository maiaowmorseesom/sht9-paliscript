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
http://localhost:5173 (จริงจังไม่ได้โม้)
```

## Examples

Check the `_example` directory for sample files.

## License

Mai mee

## Contributir

| Contributor 1 | Contributor 2 | Contributor 3 |Contributor 4 | Contributor 5 |Contributor 6 |Contributor  7| 
| :------------------: | :------------------: | :------------------: | :------------------: | :------------------: | :------------------: | :------------------: |
| <img src="image/1.jpeg" alt="Contributor Name 1" width="100"/> | <img src="image/2.jpg" alt="Contributor Name 2" width="100"/> | <img src="image/3.jpg" alt="Contributor Name 2" width="100"/> | <img src="image/4.jpg" alt="Contributor Name 2" width="100"/> | <img src="image/5.jpg" alt="Contributor Name 2" width="100"/> | <img src="image/6.jpg" alt="Contributor Name 2" width="100"/> | <img src="image/7.jpg" alt="Contributor Name 2" width="100"/> |
| สามจตุรอาชา | เรนเจอร์ตัวสีแดงแผงคอเขียว | โคตรเซียนเขย่ามาเก๊า | หมาป่าเดียวดาย 1 ฝูง | สิกม๋าบอยส์ | คาวบอยปืนสั้นยาวสองเมตร | ช็อคแลตเย็นหวานน้อย |

<center> รวมกันเป็น </center> </br> 
<center> <img src="image/8.png" alt="Hehe" /> </center> </br> 
<center> ลูกพระวัด T.ไม่เอาสีส้มแห่ง SHT๙ </center> </br> 