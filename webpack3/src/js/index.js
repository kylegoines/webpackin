import concat from 'lodash/concat'
import number from './test'

const test = 'hello'
var array = [1]
var other = _.concat(array, 2, [3], [[4]])
console.log(other)
