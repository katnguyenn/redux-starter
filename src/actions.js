import * as actions from './actionTypes';

// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: 'Bug1'
//         }
//     }
// }

// we want to return an object so we put parenthesis before it. Otherwise, it will expect a block of code
export const bugAdded = description => ({
    type: actions.BUG_ADDED,
        payload: {
            description: 'Bug1'
        }
})