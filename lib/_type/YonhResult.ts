import { YonhTable } from './YonhTable';

export namespace YonhResult {
  export interface BasicZih {
    index: number,
    zih:   string
  }
  export interface BasicSieux {
    index:     number,
    roman:     string,
    sieux:     string,
    chet:      string,
    initial:   YonhTable.Initial,
    final:     YonhTable.Final,
    tone:      string,
    kanon:     string,
    kuangx:    string
  }
  export interface Zih extends BasicSieux {
    zih:       string,
    other_zih: BasicZih[]
  }
  export interface Sieux extends BasicSieux {
    list_zih: BasicZih[]
  }
}