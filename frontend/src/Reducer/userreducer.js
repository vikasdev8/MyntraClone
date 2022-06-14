import {REQUEST_USER_NO,
        SUCCESS_USER_NO,
        FAIL_USER_NO,
        REQUEST_USER,
        SUCCESS_USER,
        FAIL_USER,
        REQUEST_VERIFY_OTP,
        SUCCESS_VERIFY_OTP,
        FAIL_VERIFY_OTP,
        REQUEST_RESEND_OTP,
        SUCCESS_RESEND_OTP,
        FAIL_RESEND_OTP,
        REQUEST_UPDATE_USER,
        SUCCESS_UPDATE_USER,
        FAIL_UPDATE_USER,
        SUCCESS_LOGOUT,
        FAIL_LOGOUT,
        REQUEST_UPDATE_DETAILS_USER,
        SUCCESS_UPDATE_DETAILS_USER,
        FAIL_UPDATE_DETAILS_USER,
        CLEAR_ERRORS
} from '../const/userconst'

export const registeruser = (state = {user:{}}, action) =>{
        switch (action.type) {
            case REQUEST_USER_NO:
                return {
                    loading: true,
                };

            case SUCCESS_USER_NO:
                return {
                    loading: false,
                    user:action.payload, 
                    message:action.message
                };

            case FAIL_USER_NO:
                    return {
                        loading: null,
                        user:action.payload
                    };
            case CLEAR_ERRORS:
                        return {
                            ...state,
                            error: null
                    };
        
            default:
                return state;
        }
}

export const getuser = (state = {user:{}}, action) =>{
    switch (action.type) {
        case REQUEST_USER:
            return {
                loading: true,
                isAuthentication: false
            };

        case SUCCESS_USER:
            return {
                loading: false,
                isAuthentication: true,
                user:action.payload
            };
            case SUCCESS_LOGOUT:
            return {
                loading: false,
                isAuthentication: false,
                user:null
            };
            

        case FAIL_USER:
                case FAIL_LOGOUT:
                return {
                    loading: false,
                    isAuthentication: false,
                    error:action.payload
                };

        case CLEAR_ERRORS:
                    return {
                        ...state,
                        error: null
                };
    
        default:
            return state;
    }
}

export const otpverifie = (state = {userdetails:{}}, action) =>{
    switch (action.type) {

        case REQUEST_VERIFY_OTP:
        return {
            loading: true,
        };

        case SUCCESS_VERIFY_OTP:
            return {
                loading: false,
                user:action.payload
            };

        case FAIL_VERIFY_OTP:
            return {
                loading: true,
                error:action.payload
            };

    case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null
            };

    default:
        return state;
}
}


export const resendotp = (state = {}, action) =>{
    switch (action.type) {
        
            case REQUEST_RESEND_OTP:
            return {
                loading: true,
            };

        case SUCCESS_RESEND_OTP:
            return {
                loading: false,
                success: action.payload
            };

        case FAIL_RESEND_OTP:
            
                return {
                    loading: false,
                };
        case CLEAR_ERRORS:
                    return {
                        ...state,
                        error: null
                };
    
        default:
            return state;
    }
}

export const updateuser = (state = {user:{}}, action) =>{
    switch (action.type) {
        
            case REQUEST_UPDATE_USER:
            return {
                loading: true,
                user:{}
            };

        case SUCCESS_UPDATE_USER:
            return {
                loading: false,
                user: action.payload
            };

        case FAIL_UPDATE_USER:
            
                return {
                    loading: false,
                    user:null
                };
        case CLEAR_ERRORS:
                    return {
                        ...state,
                        error: null
                };
    
        default:
            return state;
    }
}

export const updatedetailsuserreducer = (state = {user:{}}, action) =>{
    switch (action.type) {
        
            case REQUEST_UPDATE_DETAILS_USER:
            return {
                loading: true,
                
            };

        case SUCCESS_UPDATE_DETAILS_USER:
            return {
                loading: false,
                success: action.payload
            };

        case FAIL_UPDATE_DETAILS_USER:
            
                return {
                    loading: false,
                    success:'Update Failed'
                };
        case CLEAR_ERRORS:
                    return {
                        ...state,
                        error: null
                };
    
        default:
            return state;
    }
}

