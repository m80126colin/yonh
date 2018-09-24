import * as _ from 'lodash';

import { YonhTable } from '../_type';
import * as initial from '../../data/initial.json';

const table : YonhTable.Initial[] = _.map(initial, data => {
  return {
    index: data[0],
    sjeng: data[1],
    roman: data[2]
  }
})

export default table