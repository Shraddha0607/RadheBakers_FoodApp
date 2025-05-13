import { createContext, useReducer } from "react";

const PContext = createContext({
    items : [],
    addItem : () => {},
});

function reducerFunction( state, action ){
    if(action.type === 'add') {
        const updatedItems = [...state.items];
        updatedItems.push({...action.item});
        console.log("dispatcher add perform");

        return {...state, items : updatedItems };
    }

    if(action.type === 'delete') {
        console.log("dispatcher delete perform");
    }

    return state;
}

export function PContextProvider({children}) {
    const [state, dispatcher] = useReducer(reducerFunction, {items : [] });

    console.log("PContext callled");

    function addItem (item) {
        dispatcher({ type: 'add', item: item });
    }

    function removeItem () {
        dispatcher({ type: 'delete', item : item });
    }

    const pContext = {
        items : state.items,
        addItem,
        removeItem
    }

    console.log(pContext);

    return <PContext.Provider value={pContext}>
        {children}
    </PContext.Provider>
}

export default PContext;