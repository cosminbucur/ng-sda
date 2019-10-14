export class DemoMaps {
  public testMap() {
    let map1 = new Map()
      .set('A', 1)
      .set('B', 2)
      .set('C', 3);

    let map2 = new Map([['A', 1], ['B', 2], ['C', 3]]);

    console.log('get A: ' + map1.get('A'));
    console.log('has A: ' + map1.has('A'));
    map1.delete('A');
    console.log('map size = ' + map1.size);

    map1.clear;
    console.log('map size = ' + map1.size);

    let map = new Map([['APPLE', 1], ['ORANGE', 2], ['MANGO', 3]]);
    this.loopMapUsingKeys(map);
    this.loopMapUsingValues(map);
    this.loopMapUsingEntries(map);
  }

  public loopMapUsingKeys(map: Map<any, any>): void {
    for (let key of map.keys()) {
      console.log(key);
    }
  }

  public loopMapUsingValues(map: Map<any, any>): void {
    for (let value of map.values()) {
      console.log(value);
    }
  }

  public loopMapUsingEntries(map: Map<any, any>): void {
    for (let entry of map.entries()) {
      console.log(entry[0], entry[1]);
    }
  }

  // map records order of insertion
  public loopMap(map: Map<any, any>): void {
    for (let [key, value] of map) {
      console.log(key, value);
    }
  }
}
