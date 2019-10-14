export class DemoSets {
  public testSets() {
    let set = new Set();
    set.add('APPLE');
    set.add('ORANGE');
    set.add('MANGO');

    let set2 = new Set()
      .add('APPLE')
      .add('ORANGE')
      .add('MANGO');

    let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

    console.log(set.has('APPLE'));

    set.delete('APPLE');

    console.log(set.size);

    set.clear();
    console.log(set.size);

    let set4 = new Set();
    set3.add('Moo');
    console.log(set3.size);
    // 1
    set4.add('Moo');
    console.log(set4.size);
    // 1

    for (let entry of set2) {
      console.log(entry);
    }
  }
}
