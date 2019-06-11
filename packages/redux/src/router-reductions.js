// @flow

export const routerNavigationReduction = ({
  location,
  match,
  action,
}: {
  location: Object,
  match: Object,
  action?: string,
}) => (state: Object) => ({
  ...state,
  location,
  match,
  lastAction: action ?? null,
})
