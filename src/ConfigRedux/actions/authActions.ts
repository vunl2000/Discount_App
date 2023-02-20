import { AllDispatchProps, USER_LOADING } from "../types";


// Load products
export const userLogins = (payload: any) => (dispatch: any) => {
    return dispatch({
        type: USER_LOADING,
        payload
    });
};

