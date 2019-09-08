declare function setGlobal(key: string, value: any): void
declare function getGlobal(key: string): any
declare function getAllGlobal(): object
declare function deleteGlobal(key: string): void
declare function clearGlobal(): void

export { setGlobal, getGlobal, getAllGlobal, deleteGlobal, clearGlobal }

declare const _default: {
  setGlobal: typeof setGlobal
  getGlobal: typeof getGlobal
  getAllGlobal: typeof getAllGlobal
  deleteGlobal: typeof deleteGlobal
  clearGlobal: typeof clearGlobal
}

export default _default
