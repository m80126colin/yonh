import * as _ from 'lodash';

import * as table from '../table';
import { YonhTable, YonhResult } from '../_type';

const basic = (index : number) : YonhResult.BasicSieux => {
  const s = table.sieux.index[index]
  return {
    index:     s.index,
    sieux:     s.sieux,
    chet:      s.chet,
    initial:   table.initial.sjeng[s.initial],
    final:     table.final.yonh[s.final],
    tone:      s.tone,
    roman:     s.roman,
    kanon:     s.kanon,
    kuangx:    s.kuangx
  }
}

export default basic