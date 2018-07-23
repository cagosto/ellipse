# ellipse-copy
ES6 Class for handling ellipse's in copy

## Whats This?
This ES6 class will let you ellipse copy for different breakpoints.

## Demo
Check out the codepen for a [example](https://codepen.io/Cagosto/pen/yqMMPq).

## Config
Config requires an Array of objects that pass width and count as props. Width is the max value for the count that is passed. In the config below 0 - 768 copy will be 50 character long with and add "..." at the end of the string. 769 - 980 will be 100 character long so on and so on.

```
new Ellipse([
  {
    width: 768,
    count : 50
  },
  {
    width: 980,
    count: 100
  },
  {
    width: 1280,
    count: 150
  }
])
```

## Installation
`npm i ellipse-copy`

`import Ellipse from 'ellipse-copy'`
