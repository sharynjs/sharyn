export default function useStateObject(
  initialStateObject?: Object
): {
  get(key: string): any
  getAll(): Object
  set(key: string, value: any): void
  setAll(obj: Object): void
  del(key: string): void
  clear(): void
  merge(obj: Object): void
  assign(obj: Object): void
}
