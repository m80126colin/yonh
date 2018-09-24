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
// lookup through chinese character or index
yonh.lookup(1)
yonh.lookup('東')
// list of fundamental category of rime in Guangyun
yonh.sieux()
```

### yonh.lookup(index|hanzi)

#### Arguments

* `index`: `number`, an unique number indicating specific Sinograph
* `hanzi`: `string`, a Sinograph, Chinese character

#### Returns

One object or an array of objects with following form:

``` ts
{
  index:     number,
  zih:       string,
  sieux:     string,
  chet:      string,
  initial:   Table.Initial,
  final:     Table.Final,
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

* `zih`: a Sinogram, Chinese character
* `sieux`: a fundamental category of rime (小韻) in Guangyun
* `chet`: [fanqie](https://en.wikipedia.org/wiki/Fanqie) (反切), a technique to represent the pronounciation of a Chinese character by using two characters instead, in Guangyun
* `initial`: the initial of `zih`, see [Table.Initial](#tableinitial)
* `final`: the final of `zih`, see [Table.Final](#tablefinal)
* `tone`: `平聲`, `上聲`, `去聲` or `入聲`, the category of the tone in Middle Chinese
* `roman`: a romanisation of `zih`, see [Romanisation](#romanisation)
* `kanon`: the pronounciation of `zih` in Kan-on system (漢音) in Japanese
* `kuangx`: the content of `zih` appeared in Guangyun

#### Table.Initial

``` ts
{
  index: number,
  roman: string,
  sjeng: string
}
```

* `roman`: a romanisation of initial, see [Romanisation](#romanisation)
* `sjeng`: a Sinogram indicating the category of initial (聲母)

#### Table.Final

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

* `roman`: a romanisation of final, see [Romanisation](#romanisation)
* `yonh`: category of final (韻母), which is differnent from the rimes (韻) in Guangyun
* `tongx`: `1` to `4`, indicating the level (等) of Chinese character, which is one of Medial (介音) description system in Middle Chinese
* `ho`: `開口`, `合口` or `開合`, another Medial description system in Middle Chinese (呼)
* `sjep`: a Sinogram indicating the category of the main vowel (攝)

### yonh.sieux()

A list of fundamental category of rime (小韻).

#### Returns

``` ts
{
  index:    number,
  sieux:    string,
  chet:     string,
  initial:  Table.Initial,
  final:    Table.Final,
  tone:     string,
  roman:    string,
  kanon:    string,
  kuangx:   string,
  list_zih: {
    index: number,
    zih:   string
  }[]
}
```

* `index`: an unique number
* `sieux`, `chet`, `initial`, `final`, `tone`, `roman`, `kanon`, `kuangx`: see [yonh.lookup(index|hanzi)](#yonhlookupindexhanzi)
* `list_zih`: a list of Sinograph with index and character

Romanisation
---

The romanisation for Middle Chinese is created and promoted by [Polyhedron](https://zh.wikipedia.org/wiki/User:Polyhedron/%E4%B8%AD%E5%8F%A4%E6%BC%A2%E8%AA%9E%E6%8B%BC%E9%9F%B3).

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
