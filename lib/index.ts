import * as _ from 'lodash';

import { Lookup } from './lookup/_types';
import * as table from './lookup';

interface Zih {
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

const make_zih = (z : Lookup.Zih) : Zih => {
  const s = table.sieux.index[z.info]
  return {
    index:     z.index,
    zih:       z.zih,
    sieux:     s.sieux,
    chet:      s.chet,
    initial:   table.initial.sjeng[s.initial],
    final:     table.final.yonh[s.final],
    tone:      s.tone,
    roman:     s.roman,
    kanon:     s.kanon,
    kuangx:    s.kuangx,
    other_zih: _.chain(table.zih.info[z.info])
      .filter(x => x.zih !== z.zih)
      .map(x => _.pick(x, ['index', 'zih']))
      .value()
  }
}

function lookup(x : number) : Zih;
function lookup(x : string) : Zih | Zih[];
function lookup(x) : any {
  if (typeof x === 'number') 
    return make_zih(table.zih.index[x])
  const result = _.map(table.zih.zih[x], z => make_zih(z))
  if (result.length === 1)
    return result[0]
  return result
}
export { lookup }