/**
 * Creación de un Observable
 * Un Observable es un elemento que en RxJS representa el flujo de información.
 * Este flujo de información puede ser completado (línea 13 y 21), y también puede fallar (descomentar línea 12).
 */
import { Observable } from "rxjs";

const observableAlfa$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  // a = b;
  subscriber.complete();
  subscriber.next(4);
});

const observador = {
  next: (value) => {
    console.log(value); // Podemos transmitir los valores emitidos.
  },
  complete: () => {
    console.log("Observable completado"); // Podemos informar que el Observable dejará de emitir valores.
  },
  error: (error) => {
    console.log("Error recibido: "); // Podemos manejar errores provinientes del Observable.
    console.error(error);
  },
};

// El observador se suscribe al Observable de esta forma:
observableAlfa$.subscribe(observador);
