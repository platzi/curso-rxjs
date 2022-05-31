/**
 * Operadores: distinct, distinctUntilChanged y distinctUntilKeyChanged
 * https://rxjs.dev/api/operators/distinct
 * https://rxjs.dev/api/operators/distinctUntilChanged
 * https://rxjs.dev/api/operators/distinctUntilKeyChanged
 */

import { of } from "rxjs";
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs/operators";

// distinct
const repeatedNumbers$ = of(1, 2, 1, 3, 4, 4, 2, 1).pipe(distinct());
repeatedNumbers$.subscribe(console.log);

// distinctUntilChanged
const repeatedNumbersChanged$ = of(1, 2, 1, 3, 4, 4, 2).pipe(
  distinctUntilChanged()
);
repeatedNumbersChanged$.subscribe(console.log);

// distinctUntilKeyChanged
const repeatedNumbersKeyChanged$ = of(
  { k: 1 },
  { k: 2 },
  { k: 1 },
  { k: 3 },
  { k: 4 },
  { k: 4 },
  { k: 2 },
  { k: 1 }
).pipe(distinctUntilKeyChanged("k"));
repeatedNumbersKeyChanged$.subscribe(console.log);
