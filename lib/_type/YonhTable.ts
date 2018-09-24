export namespace YonhTable {
  interface Roman {
    index: number,
    roman: string
  }
  export interface Initial extends Roman {
    sjeng: string
  }
  export interface Final extends Roman {
    yonh:  string,
    tongx: number,
    ho:    string,
    sjep:  string
  }
  export interface Sieux extends Roman {
    sieux:   string,
    chet:    string,
    initial: string,
    final:   string,
    tone:    string,
    kanon:   string,
    kuangx:  string
  }
  export interface Zih {
    index: number,
    zih:   string,
    info:  number
  }
}