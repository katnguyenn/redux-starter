import store from './store';

// UI components should subscribe to the store so they get notified when the store changes (rerender in React)
const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
})

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Bug1'
    }
});

unsubscribe();

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
});

console.log(store.getState());