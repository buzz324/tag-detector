const tag = require('./assa')

var test1 = 'he following text<C><B>is centred and in boldface</B></C>'
var test2 ='<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence';
var test3 = '<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>';
var test4 = '<B>This should be in boldface, but there is an extra closing tag</B></C>';
var test5 = '<B><C>This should be centred and in boldface, but there is a missing closing tag</C>';
var test6 = '<B></B><C></C>This should be centred and in boldface, but there is a missing closing tag<C></C>';
var test7 = '<B>This should be centred and in boldface, but there is a missing closing tag<Z>12EUYDG3</Z></B><C></C>';


test('test 1',()=> {
  expect(tag(test6)).toBe('Correctly tagged paragraph')
})

test('test 2',()=> {
  expect(tag(test2)).toBe('Correctly tagged paragraph')
})

test('test 3',()=> {
  expect(tag(test3)).toBe('Expected </B> found </C>')
})

test('test 4',()=> {
  expect(tag(test4)).toBe('Expected # found </C>')
})

test('test 5',()=> {
  expect(tag(test5)).toEqual('Expected </B> found #')
})

test('test 6',()=> {
  expect(tag(test6)).toEqual('Correctly tagged paragraph')
})
test('test 7',()=> {
  expect(tag(test7)).toBe('Correctly tagged paragraph');
})