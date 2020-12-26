import { bindActionCreators } from "redux"

const INITIAL_STATE = {
    usuarios : []
}

export default  ( state = INITIAL_STATE  ) => {
    switch(action.payload){
        case 'traer_usuario':
            return { ...state, usuarios: action.payload}
    }
}