interface StateObjectActions {
  set(key: string, value: any): void
  setAll(obj: Object): void
  del(key: string): void
  clear(): void
  merge(obj: Object): void
  assign(obj: Object): void
}

export default function useStateObject(initialStateObject?: Object): [Object | null, StateObjectActions]
