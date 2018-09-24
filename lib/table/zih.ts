import * as _ from 'lodash';

import { YonhTable } from '../_type';
import * as sieux from '../../data/sieux.json';

const table : YonhTable.Zih[] = _.flatMap(sieux, data => _.map(data[0], z => {
  return {
    index: z[1],
    zih:   z[0],
    info:  data[1][0]
  }
}))

export default table