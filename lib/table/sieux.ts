import * as _ from 'lodash';

import { YonhTable } from '../_type';
import * as sieux from '../../data/sieux.json';

const table : YonhTable.Sieux[] = _.map(sieux, data => {
  const temp = data[1]
  return {
    index:   temp[0],
    sieux:   temp[1],
    chet:    temp[2],
    initial: temp[3],
    final:   temp[4],
    tone:    temp[5],
    roman:   temp[6],
    kanon:   temp[7],
    kuangx:  temp[8]
  }
})

export default table