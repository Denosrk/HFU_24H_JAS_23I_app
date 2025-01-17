export class Person {
  constructor(firstName, middleName, lastName, birthDate) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  fullName() {
    return `${this.firstName} ${this.middleName || ""} ${this.lastName}`.trim();
  }

  age() {
    if (!this.birthDate) return undefined;

    const now = new Date();
    const age = now.getFullYear() - this.birthDate.getFullYear();
    const isBeforeBirthday =
      now.getMonth() < this.birthDate.getMonth() ||
      (now.getMonth() === this.birthDate.getMonth() &&
        now.getDate() < this.birthDate.getDate());

    return isBeforeBirthday ? age - 1 : age;
  }

  toString() {
    return this.fullName();
  }
}

export class Teacher extends Person {
  constructor(firstName, middleName, lastName, birthDate, schoolName) {
    super(firstName, middleName, lastName, birthDate);
    this.schoolName = schoolName ?? "HFU";
  }

  fullName() {
    return `${super.fullName()} @ ${this.schoolName}`;
  }
}

export function getFirstAndLastLetters(test) {
  return {
    first: test.at(0),
    last: test.at(-1),
  };
}

export function getReverse(test) {
  return test.split("").reverse().join("");
}

export function getCapitalized(test) {
  return test.map((t) => t.toUpperCase());
}

export function getOddCapitalized(test) {
  return test.map((t, i) => {
    if (i % 2 === 1) {
      return t.toUpperCase();
    }
    return t;
  });
}

export const getFibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    return -1;
  }

  if (n === 0 || n === 1) {
    return n;
  }

  return getFibonacci(n - 1) + getFibonacci(n - 2);
};

export function* getFibonacciSequence() {
  let i = 0;
  while (i >= 0) {
    yield getFibonacci(i);

    i += 1;
  }
}

export function getCopyOfArray(a) {
  return a.slice();
}

export function getJsonWithNiceFormattingAndNoNumbers(obj) {
  return JSON.stringify(
    obj,
    (k, v) => {
      return typeof v === "number" ? undefined : v;
    },
    2
  );
}

export function getPropertyNames(obj) {
  function* getKeys() {
    for (const objKey in obj) {
      yield objKey;
    }
  }

  return Object.keys(obj);
}

export function getPropertyValues(obj) {
  function* getValues() {
    for (const objKey in obj) {
      yield objKey;
    }
  }

  return Object.values(obj);
}

export function divide(numerator, denominator) {
  return denominator === 0 ? NaN : numerator / denominator;
}

export function strictDivide(numerator, denominator) {
  if (denominator === 0) {
    throw Error("Cannot divide by zero.");
  }

  return divide(numerator, denominator);
}

export function safeDivide(numerator, denominator) {
  try {
    return strictDivide(numerator, denominator);
  } catch {
    return NaN;
  }
}

export function getObjectWithAOnly(obj) {
  const { a } = obj;

  return { a };
}

export function getObjectWithAllButA(obj) {
  const { a, ...rest } = obj;

  return rest;
}
