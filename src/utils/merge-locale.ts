export function mergeLocale<T extends object, P extends object>(
  base: T,
  patch: P | null
): T {
  function merge(a: unknown, b: unknown): unknown {
    if (
      typeof a !== 'object' ||
      typeof b !== 'object' ||
      Array.isArray(a) ||
      Array.isArray(b) ||
      a === null ||
      b === null
    ) {
      return b !== undefined ? b : a
    }
    const result: Record<string, unknown> = {}
    const objA = a as Record<string, unknown>
    const objB = b as Record<string, unknown>

    for (const key in objA) {
      if (objA.hasOwnProperty(key)) {
        result[key] = merge(objA[key], objB[key])
      }
    }
    return result
  }
  return merge(base, patch) as T
}
