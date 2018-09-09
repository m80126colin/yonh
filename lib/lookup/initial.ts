import * as _ from 'lodash';

import { Lookup } from './_types';
import * as initial from '../../data/initial.json';

const table : Lookup.Initial[] = _.map(initial, data => {
  return {
    index: data[0],
    sjeng: data[1],
    roman: data[2]
  }
})

export default table