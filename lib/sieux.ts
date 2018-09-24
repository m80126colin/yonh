import * as _ from 'lodash';

import * as partial from './partial';
import * as table   from './table';
import { YonhResult } from './_type';

const sieux = () : YonhResult.Sieux[] => {
  return _.map(table.sieux.index, sieux => {
    const basic = partial.sieux(sieux.index)
    const list  = partial.zih(sieux.index)
    return _.merge({ list_zih: list }, basic)
  })
}

export default sieux