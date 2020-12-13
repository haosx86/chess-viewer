# Chess notation visualisation tool

This is simple visualisation tool for chess [`Algebraic notation`](https://en.wikipedia.org/wiki/Algebraic_notation_(chess)).

The default chess game moves are hard-coded in [`App.vue`](https://github.com/haosx86/chess-viewer/blob/master/src/App.vue) file, but it's possible to paste your own moves and visualize them.

[`The parser`](https://github.com/haosx86/chess-viewer/blob/master/src/chessNotationParser.ts) accepts russian and engligh pieces letters.


## Install
```sh
yarn install
```
## Usage
#### Develop
```sh
# run dev server at localhost:8080
yarn dev
```
#### Build
```sh
# transpile js for deployment
yarn build
```
