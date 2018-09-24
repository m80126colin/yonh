import * as _ from 'lodash';

import table_initial from './initial';
import table_final   from './final';
import table_sieux   from './sieux';
import table_zih     from './zih';

export const initial = {
  index: _.keyBy(table_initial, 'index'),
  sjeng: _.keyBy(table_initial, 'sjeng')
}

export const final = {
  index: _.keyBy(table_final, 'index'),
  yonh:  _.keyBy(table_final, 'yonh')
}

export const sieux = {
  index: _.keyBy(table_sieux, 'index')
}

export const zih = {
  index: _.keyBy(table_zih, 'index'),
  zih:   _.groupBy(table_zih, 'zih'),
  info:  _.groupBy(table_zih, 'info')
}