console.log("Try npm run lint/fix!")

export function doSomeStuff(withThis: string, andThat: string, andThose: string[]) {
  // function on one line
  if (andThose.length === 0) {
    return false
  }
  console.log(withThis)
  console.log(andThat)
  console.dir(andThose)
}
