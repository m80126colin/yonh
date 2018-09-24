import * as _ from 'lodash';

import { YonhTable } from '../_type';
import * as final from '../../data/final.json';

const table : YonhTable.Final[] = _.map(final, data => {
  return {
    index: data[0],
    yonh:  data[1],
    roman: data[2],
    tongx: data[3],
    ho:    data[4],
    sjep:  data[5]
  }
})

export default table