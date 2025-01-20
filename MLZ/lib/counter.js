"use strict";

let _counter = 1;

export function counter() {
  return _counter;
}

export function increment() {
  return ++_counter;
}

export function decrement() {
  return --_counter;
}
