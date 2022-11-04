export function shallowEqual(objA: any, objB: any) {
  if (objA === objB) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const entriesA = Object.entries(objA);
  const entriesB = Object.entries(objB);

  if (entriesA.length !== entriesB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (const [key, value] of entriesA) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !Object.is(value, objB[key])
    ) {
      return false;
    }
  }

  return true;
}
