import * as _ from 'lodash';

import * as partial from './partial';
import * as table   from './table';
import { YonhTable, YonhResult } from './_type';

const make_zih = (z : YonhTable.Zih) : YonhResult.Zih => {
  const basic = partial.sieux(z.info)
  return _.defaults({
    index:     z.index,
    zih:       z.zih,
    other_zih: _.filter(partial.zih(z.info), x => x.zih !== z.zih)
  }, basic)
}

function lookup(x : number) : YonhResult.Zih;
function lookup(x : string) : YonhResult.Zih | YonhResult.Zih[];
function lookup(x) : any {
  if (typeof x === 'number')
    return make_zih(table.zih.index[x])
  const result = _.map(table.zih.zih[x], z => make_zih(z))
  if (result.length === 1)
    return result[0]
  return result
}
export default lookup