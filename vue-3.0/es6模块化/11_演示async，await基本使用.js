import thenFs from 'then-fs'

console.log('a');
// 简化了promise操作直接添加关键词可以替.then()
async function getAllfile() {
    console.log('b');
    console.log('bc');
    console.log('bcd');
    console.log('bcde');
    console.log('bcdef');
    console.log('bcdefe');
    console.log('bcdefeg');

    // thenFs.readFile('./text/1.text', 'utf8')   是个promise实例则可以加 await 关键词来简化promise异步操作
    var r1 = await thenFs.readFile('./text/1.text', 'utf8')
    var r2 = await thenFs.readFile('./text/2.text', 'utf8')
    var r3 = await thenFs.readFile('./text/3.text', 'utf8')
    console.log(r1, r2, r3);
    console.log('b');
    console.log('bc');
    console.log('bcd');
    console.log('bcde');
    console.log('bcdef');
    console.log('bcdefe');
    console.log('bcdefeg');
}
getAllfile()
