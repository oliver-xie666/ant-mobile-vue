export function mergeProps<A, B>(a: A, b: B): B & A
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A
export function mergeProps(...items: Record<string, unknown>[]) {
  function merge(a: Record<string, unknown>, b: Record<string, unknown>) {
    const ret = { ...a }
    for (const key in b) {
      if (b.hasOwnProperty(key)) {
        const val = b[key]
        if (val !== undefined) {
          ret[key] = val
        }
      }
    }
    return ret
  }

  let ret = items[0]
  for (let i = 1; i < items.length; i++) {
    ret = merge(ret, items[i])
  }
  return ret
}
