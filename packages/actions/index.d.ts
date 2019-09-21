interface Action {
  type: string
  payload?: any
  meta?: any
}

interface ErrorAction {
  error: true
  type: string
  payload?: any
  meta?: any
}

export function action(type: string, payload?: any, meta?: any): Action
export function errorAction(type?: string, payload?: any, meta?: any): ErrorAction

declare const _default: {
  action: typeof action
  errorAction: typeof errorAction
}

export default _default
