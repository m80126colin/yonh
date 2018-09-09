Yonh
===

[![NPM version](https://badge.fury.io/js/yonh.svg)][npm]
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)][repo]

A simple lookup table for Guangyun.

Installation
---

```
yarn add yonh
```

or

```
npm install --save yonh
```

Usage
---

``` js
var yonh = require('yonh')

yonh.lookup(1)
yonh.lookup('東')
```

### lookup(index|hanzi)

#### Arguments

* `index`: `number`, an unique number indicating specific Sinograph
* `hanzi`: `string`, a Sinograph, Chinese Character

#### Returns

One object or an array of objects with following form:

``` ts
{
  index:     number,
  zih:       string,
  sieux:     string,
  chet:      string,
  initial:   Lookup.Initial,
  final:     Lookup.Final,
  tone:      string,
  roman:     string,
  kanon:     string,
  kuangx:    string,
  other_zih: {
    index: number,
    zih:   string
  }[]
}
```

#### Lookup.Initial

``` ts
{
  index: number,
  sjeng: string,
  roman: string
}
```

#### Lookup.Final

``` ts
{
  index: number,
  roman: string,
  yonh:  string,
  tongx: number,
  ho:    string,
  sjep:  string
}
```

License
---

GPLv2

Sources
---

* [Full Word List for Guangyun](http://www.newsmth.net/bbscon.php?bid=203&id=41087) (廣韻全字表), powered by **polyhedron** and **zgheng**.
* [XML Data for Guangyun](http://kanji-database.sourceforge.net/dict/sbgy/index.html) (宋本廣韻データ)
* [韻典網](https://ytenx.org/kyonh/)

[repo]: https://github.com/m80126colin/yonh/
[npm]: https://www.npmjs.com/package/yonh