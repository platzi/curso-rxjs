/**
 * Operadores: map, reduce y filter
 * https://rxjs.dev/api/index/function/map
 * https://rxjs.dev/api/index/function/reduce
 * https://rxjs.dev/api/index/function/filter
 */

import { from } from "rxjs";
import { map, reduce, filter } from "rxjs/operators";

const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
  // map((value) => value * 2),
  // filter((value) => value % 2 !== 0),
  reduce((accumulated, value) => accumulated + value, 10)
);
numbers$.subscribe(console.log);
