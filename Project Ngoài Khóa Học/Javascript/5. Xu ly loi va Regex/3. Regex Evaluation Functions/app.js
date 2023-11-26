const regex = /duoc/gi
let test = regex.test('du thanh Duoc')

test = regex.exec('du thanh')
test = 'du thanh Duoc'.match(regex)
test = 'du thanh Duoc'.search(regex)
test = 'Duoc oi la Duoc'.replace(regex, 'An')
console.log(test)