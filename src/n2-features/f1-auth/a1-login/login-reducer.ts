type InitialStateType = typeof initialState

const initialState = {}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}


export const nameAC = () => ({type: '',}) as const

export type nameType = ReturnType<typeof nameAC>

type ActionsType =
    |  nameType
