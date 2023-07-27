// Class Generic

class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data; // number[]
pgData.message; // string | undefined
pgData.lastFetchedAt; // Date | undefined

//

class Pagination2<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;

  constructor(data: Data[], meesage?: Message, lastFetchedAt?: Date) {
    this.data = data;
    this.message = meesage;
    this.lastFetchedAt = lastFetchedAt;
  }
}

// const pgData2 = new Pagination2([123]);
// pgData2.data; // number[]
// pgData2.message; // unknown
// pgData2.lastFetchedAt; // Date | undefined

const pgData2 = new Pagination2<number, string>([123]);
pgData2.data; // number[]
pgData2.message; // string | undefined
pgData2.lastFetchedAt; // Date | undefined

//

class DefaultGeneric<T = boolean> {
  data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data; // boolean[]
