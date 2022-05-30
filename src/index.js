/**
 * Observables: Subject
 * https://rxjs.dev/guide/subject
 */
import { Observable, Subject } from "rxjs";

const numbers$ = new Observable((subscriber) => {
  // Podemos enviar una función (como Math.random) que generará el mismo dato en observador1 y observador2.
  subscriber.next(Math.round(Math.random() * 100));
});

const numbersRandom$ = new Subject();

const observador1 = {
  next: (number) => {
    console.log(number);
  },
};

const observador2 = {
  next: (number) => {
    console.log(number);
  },
};

numbersRandom$.subscribe(observador1);
numbersRandom$.subscribe(observador2);
numbers$.subscribe(numbersRandom$);

// También podemos enviar valores fuera del observable Subject.
numbersRandom$.next(45);
