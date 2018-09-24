import * as _ from 'lodash';

import * as table from '../table';
import { YonhResult } from '../_type';

const basic = (index : number) : YonhResult.BasicZih[] => _
  .chain(table.zih.info[index])
  .map(x => _.pick(x, ['index', 'zih']))
  .value()

export default basic