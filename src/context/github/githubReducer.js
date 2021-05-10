import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../githubTypes"

const handlers = {
    [SET_LOADING]: state => { return {...state, loading: true}},
    [SEARCH_USERS]: (state, action) => { return {...state, loading: false, users: action.payload}},
    [CLEAR_USERS]: (state, action) => { return {...state, loading: false, users: []}},
    [GET_USER]: (state, action) => { return {...state, loading: false, user: action.payload}},
    [GET_REPOS]: (state, action) => { return {...state, loading: false, repos: action.payload}},
    DEFAULT: state => state
}

export const GithubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}