import { IS_CHECKED } from "../Actions/types";

const initStateChecked = {state:false};

const check = (state = initStateChecked,action) => {

    switch (action.type) {

        case IS_CHECKED:

            return action.payload;

            break;
    
        default:

            return state;

            break;
    }

}

export default check
