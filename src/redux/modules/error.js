export function newError(dispatch, type, data) {
  dispatch({
    type: `${type}_SET_ERROR`,
    payload: data,
  })
}
