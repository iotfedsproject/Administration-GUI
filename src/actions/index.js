// Modals
export const CHANGE_MODAL_STATE = "CHANGE_MODAL_STATE";

// Users
export const FETCH_USER_ROLES = "FETCH_USER_ROLES";
export const FETCH_SERVER_INFO = "FETCH_SERVER_INFO";
export const REGISTER_USER = "REGISTER_USER";
export const DELETE_USER = "DELETE_USER";
export const REMOVE_USER_REGISTRATION_ERRORS = "REMOVE_USER_REGISTRATION_ERRORS";
export const USER_LOGIN = "USER_LOGIN";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const RESEND_VERIFICATION_EMAIL = "RESEND_VERIFICATION_EMAIL";
export const USER_LOGOUT = "USER_LOGOUT";
export const FETCH_USER_INFORMATION = "FETCH_USER_INFORMATION";
export const SET_SUCCESSFUL_USER_REGISTRATION_FLAG = "SET_SUCCESSFUL_USER_REGISTRATION_FLAG";
export const SET_SUCCESSFUL_PASSWORD_RESET_FLAG = "SET_SUCCESSFUL_PASSWORD_RESET_FLAG";
export const SET_SUCCESSFUL_RESEND_VERIFICATION_EMAIL_FLAG = "SET_SUCCESSFUL_RESEND_VERIFICATION_EMAIL_FLAG";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_PERMISSIONS = "CHANGE_PERMISSIONS";
export const ACCEPT_TERMS = "ACCEPT_TERMS";

// Owned Services (both SSPs and platforms)
export const FETCH_USER_SERVICES = "FETCH_USER_SERVICES";

// Owned Pending own pending join requests
export const FETCH_PENDING_JOIN_REQUESTS = "FETCH_PENDING_JOIN_REQUESTS";

// Clients
export const DELETE_CLIENT = "DELETE_CLIENT";
export const ACTIVATE_CLIENT_DELETE_MODAL = "ACTIVATE_CLIENT_DELETE_MODAL";
export const DEACTIVATE_ClIENT_DELETE_MODAL = "DEACTIVATE_CLIENT_DELETE_MODAL";

// Platforms
export const REGISTER_PLATFORM = "REGISTER_PLATFORM";
export const UPDATE_PLATFORM = "UPDATE_PLATFORM";
export const GET_PLATFORM_CONFIGURATION = "GET_PLATFORM_CONFIGURATION";
export const DELETE_PLATFORM = "DELETE_PLATFORM";
export const ACTIVATE_PLATFORM_DELETE_MODAL = "ACTIVATE_PLATFORM_DELETE_MODAL";
export const DEACTIVATE_PLATFORM_DELETE_MODAL = "DEACTIVATE_PLATFORM_DELETE_MODAL";
export const ACTIVATE_PLATFORM_CONFIG_MODAL = "ACTIVATE_PLATFORM_CONFIG_MODAL";
export const DEACTIVATE_PLATFORM_CONFIG_MODAL = "DEACTIVATE_PLATFORM_CONFIG_MODAL";
export const ACTIVATE_PLATFORM_UPDATE_MODAL = "ACTIVATE_PLATFORM_UPDATE_MODAL";
export const DEACTIVATE_PLATFORM_UPDATE_MODAL = "DEACTIVATE_PLATFORM_UPDATE_MODAL";
export const REMOVE_PLATFORM_ERRORS = "REMOVE_PLATFORM_ERRORS";

// SSPs
export const REGISTER_SSP = "REGISTER_SSP";
export const UPDATE_SSP = "UPDATE_SSP";
export const DELETE_SSP = "DELETE_SSP";
export const GET_SSP_CONFIGURATION = "GET_SSP_CONFIGURATION";
export const ACTIVATE_SSP_DELETE_MODAL = "ACTIVATE_SSP_DELETE_MODAL";
export const DEACTIVATE_SSP_DELETE_MODAL = "DEACTIVATE_SSP_DELETE_MODAL";
export const ACTIVATE_SSP_CONFIG_MODAL = "ACTIVATE_SSP_CONFIG_MODAL";
export const DEACTIVATE_SSP_CONFIG_MODAL = "DEACTIVATE_SSP_CONFIG_MODAL";
export const ACTIVATE_SSP_UPDATE_MODAL = "ACTIVATE_SSP_UPDATE_MODAL";
export const DEACTIVATE_SSP_UPDATE_MODAL = "DEACTIVATE_SSP_UPDATE_MODAL";
export const REMOVE_SSP_ERRORS = "REMOVE_SSP_ERRORS";

// Information Models
export const FETCH_ALL_INFORMATION_MODELS = "FETCH_ALL_INFORMATION_MODELS";
export const FETCH_USER_INFORMATION_MODELS = "FETCH_USER_INFORMATION_MODELS";
export const REGISTER_INFO_MODEL = "REGISTER_INFO_MODEL";
export const UPLOADING_INFO_MODEL_PROGRESS = "UPLOADING_INFO_MODEL_PROGRESS";
export const DELETE_INFO_MODEL = "DELETE_INFO_MODEL";
export const ACTIVATE_INFO_MODEL_DELETE_MODAL = "ACTIVATE_INFO_MODEL_DELETE_MODAL";
export const DEACTIVATE_INFO_MODEL_DELETE_MODAL = "DEACTIVATE_INFO_MODEL_DELETE_MODAL";
export const REMOVE_INFO_MODEL_REGISTRATION_ERRORS = "REMOVE_INFO_MODEL_REGISTRATION_ERRORS";

// Mappings
export const FETCH_ALL_MAPPINGS = "FETCH_ALL_MAPPINGS";
export const REGISTER_MAPPING = "REGISTER_MAPPING";
export const UPLOADING_MAPPING_PROGRESS = "UPLOADING_MAPPING_PROGRESS";
export const DELETE_MAPPING = "DELETE_MAPPING";
export const GET_MAPPING_DEFINITION = "GET_MAPPING_DEFINITION";
export const ACTIVATE_MAPPING_DELETE_MODAL = "ACTIVATE_MAPPING_DELETE_MODAL";
export const DEACTIVATE_MAPPING_DELETE_MODAL = "DEACTIVATE_MAPPING_DELETE_MODAL";
export const REMOVE_MAPPING_REGISTRATION_ERRORS = "REMOVE_MAPPING_REGISTRATION_ERRORS";

// Federations
export const FETCH_FEDERATIONS = "FETCH_FEDERATIONS";
export const REGISTER_FEDERATION = "REGISTER_FEDERATION";
export const DELETE_FEDERATION = "DELETE_FEDERATION";
export const LEAVE_FEDERATION = "LEAVE_FEDERATION";
export const INVITE_TO_FEDERATION = "INVITE_TO_FEDERATION";
export const HANDLE_INVITATION = "HANDLE_INVITATION";
export const ACTIVATE_FEDERATION_LEAVE_MODAL = "ACTIVATE_FEDERATION_LEAVE_MODAL";
export const DEACTIVATE_FEDERATION_LEAVE_MODAL = "DEACTIVATE_FEDERATION_LEAVE_MODAL";
export const ACTIVATE_FEDERATION_DELETE_MODAL = "ACTIVATE_FEDERATION_DELETE_MODAL";
export const DEACTIVATE_FEDERATION_DELETE_MODAL = "DEACTIVATE_FEDERATION_DELETE_MODAL";
export const ACTIVATE_FEDERATION_INVITE_MODAL = "ACTIVATE_FEDERATION_INVITE_MODAL";
export const DEACTIVATE_FEDERATION_INVITE_MODAL = "DEACTIVATE_FEDERATION_INVITE_MODAL";
export const REMOVE_FEDERATION_REGISTRATION_ERRORS = "REMOVE_FEDERATION_REGISTRATION_ERRORS";
export const ACTIVATE_HANDLE_FEDERATION_INVITATION_MODAL = "ACTIVATE_HANDLE_FEDERATION_INVITATION_MODAL";
export const DEACTIVATE_HANDLE_FEDERATION_INVITATION_MODAL = "DEACTIVATE_HANDLE_FEDERATION_INVITATION_MODAL";

export const ACTIVATE_FEDERATION_JOIN_MODAL   = "ACTIVATE_FEDERATION_JOIN_MODAL";
export const DEACTIVATE_FEDERATION_JOIN_MODAL = "DEACTIVATE_FEDERATION_JOIN_MODAL";
export const JOIN_FEDERATION         = "JOIN_FEDERATION";
export const CHANGE_FEDERATION_RULES = "CHANGE_FEDERATION_RULES";
// Dismiss Alerts
export const DISMISS_WRONG_CREDENTIALS_ALERT = "DISMISS_WRONG_CREDENTIALS_ALERT";
export const DISMISS_FORGOT_PASSWORD_ALERT = "DISMISS_FORGOT_PASSWORD_ALERT";
export const DISMISS_RESEND_VERIFICATION_EMAIL_ALERT = "DISMISS_RESEND_VERIFICATION_EMAIL_ALERT";
export const DISMISS_EMAIL_CHANGE_SUCCESS_ALERT = "DISMISS_EMAIL_CHANGE_SUCCESS_ALERT";
export const DISMISS_EMAIL_CHANGE_ERROR_ALERT = "DISMISS_EMAIL_CHANGE_ERROR_ALERT";
export const DISMISS_PERMISSIONS_CHANGE_SUCCESS_ALERT = "DISMISS_PERMISSIONS_CHANGE_SUCCESS_ALERT";
export const DISMISS_PERMISSIONS_CHANGE_ERROR_ALERT = "DISMISS_PERMISSIONS_CHANGE_ERROR_ALERT";
export const DISMISS_PASSWORD_CHANGE_SUCCESS_ALERT = "DISMISS_PASSWORD_CHANGE_SUCCESS_ALERT";
export const DISMISS_PASSWORD_CHANGE_ERROR_ALERT = "DISMISS_PASSWORD_CHANGE_ERROR_ALERT";
export const DISMISS_TERMS_ACCEPTANCE_SUCCESS_ALERT = "DISMISS_TERMS_ACCEPTANCE_SUCCESS_ALERT";
export const DISMISS_TERMS_ACCEPTANCE_ERROR_ALERT = "DISMISS_TERMS_ACCEPTANCE_ERROR_ALERT";
export const DISMISS_USER_DELETION_ERROR_ALERT = "DISMISS_USER_DELETION_ERROR_ALERT";

export const DISMISS_CLIENT_DELETION_SUCCESS_ALERT = "DISMISS_CLIENT_DELETION_SUCCESS_ALERT";
export const DISMISS_CLIENT_DELETION_ERROR_ALERT = "DISMISS_CLIENT_DELETION_ERROR_ALERT";

export const DISMISS_PLATFORM_REGISTRATION_SUCCESS_ALERT = "DISMISS_PLATFORM_REGISTRATION_SUCCESS_ALERT";
export const DISMISS_PLATFORM_REGISTRATION_ERROR_ALERT = "DISMISS_PLATFORM_REGISTRATION_ERROR_ALERT";
export const DISMISS_PLATFORM_DELETION_SUCCESS_ALERT = "DISMISS_PLATFORM_DELETION_SUCCESS_ALERT";
export const DISMISS_PLATFORM_DELETION_ERROR_ALERT = "DISMISS_SUCCESS_REGISTRATION_ERROR_ALERT";
export const DISMISS_PLATFORM_UPDATE_SUCCESS_ALERT = "DISMISS_PLATFORM_UPDATE_SUCCESS_ALERT";
export const DISMISS_PLATFORM_UPDATE_ERROR_ALERT = "DISMISS_PLATFORM_UPDATE_ERROR_ALERT";
export const DISMISS_PLATFORM_CONFIG_ERROR_ALERT = "DISMISS_PLATFORM_CONFIG_ERROR_ALERT";

export const DISMISS_SSP_REGISTRATION_SUCCESS_ALERT = "DISMISS_SSP_REGISTRATION_SUCCESS_ALERT";
export const DISMISS_SSP_REGISTRATION_ERROR_ALERT = "DISMISS_SSP_REGISTRATION_ERROR_ALERT";
export const DISMISS_SSP_DELETION_SUCCESS_ALERT = "DISMISS_SSP_DELETION_SUCCESS_ALERT";
export const DISMISS_SSP_DELETION_ERROR_ALERT = "DISMISS_SSP_DELETION_ERROR_ALERT";
export const DISMISS_SSP_UPDATE_SUCCESS_ALERT = "DISMISS_SSP_UPDATE_SUCCESS_ALERT";
export const DISMISS_SSP_UPDATE_ERROR_ALERT = "DISMISS_SSP_UPDATE_ERROR_ALERT";
export const DISMISS_SSP_CONFIG_ERROR_ALERT = "DISMISS_SSP_CONFIG_ERROR_ALERT";

export const DISMISS_INFO_MODEL_REGISTRATION_SUCCESS_ALERT = "DISMISS_INFO_MODEL_REGISTRATION_SUCCESS_ALERT";
export const DISMISS_INFO_MODEL_REGISTRATION_ERROR_ALERT = "DISMISS_INFO_MODEL_REGISTRATION_ERROR_ALERT";
export const DISMISS_INFO_MODEL_DELETION_SUCCESS_ALERT = "DISMISS_INFO_MODEL_DELETION_SUCCESS_ALERT";
export const DISMISS_INFO_MODEL_DELETION_ERROR_ALERT = "DISMISS_INFO_MODEL_DELETION_ERROR_ALERT";

export const DISMISS_MAPPING_REGISTRATION_SUCCESS_ALERT = "DISMISS_MAPPING_REGISTRATION_SUCCESS_ALERT";
export const DISMISS_MAPPING_REGISTRATION_ERROR_ALERT = "DISMISS_MAPPING_REGISTRATION_ERROR_ALERT";
export const DISMISS_MAPPING_DELETION_SUCCESS_ALERT = "DISMISS_MAPPING_DELETION_SUCCESS_ALERT";
export const DISMISS_MAPPING_DELETION_ERROR_ALERT = "DISMISS_MAPPING_DELETION_ERROR_ALERT";
export const DISMISS_MAPPING_DEFINITION_ERROR_ALERT = "DISMISS_MAPPING_DEFINITION_ERROR_ALERT";

export const DISMISS_FEDERATION_REGISTRATION_SUCCESS_ALERT = "DISMISS_FEDERATION_REGISTRATION_SUCCESS_ALERT";
export const DISMISS_FEDERATION_REGISTRATION_ERROR_ALERT = "DISMISS_FEDERATION_REGISTRATION_ERROR_ALERT";
export const DISMISS_FEDERATION_LEAVE_SUCCESS_ALERT = "DISMISS_FEDERATION_LEAVE_SUCCESS_ALERT";
export const DISMISS_FEDERATION_LEAVE_ERROR_ALERT = "DISMISS_FEDERATION_LEAVE_ERROR_ALERT";
export const DISMISS_FEDERATION_DELETION_SUCCESS_ALERT = "DISMISS_FEDERATION_DELETION_SUCCESS_ALERT";
export const DISMISS_FEDERATION_DELETION_ERROR_ALERT = "DISMISS_FEDERATION_DELETION_ERROR_ALERT";
export const DISMISS_FEDERATION_INVITATION_SUCCESS_ALERT = "DISMISS_FEDERATION_INVITATION_SUCCESS_ALERT";
export const DISMISS_FEDERATION_INVITATION_ERROR_ALERT = "DISMISS_FEDERATION_INVITATION_ERROR_ALERT";
export const DISMISS_HANDLE_FEDERATION_INVITATION_SUCCESS_ALERT = "DISMISS_HANDLE_FEDERATION_INVITATION_SUCCESS_ALERT";
export const DISMISS_HANDLE_FEDERATION_INVITATION_ERROR_ALERT = "DISMISS_HANDLE_FEDERATION_INVITATION_ERROR_ALERT";

export const DISMISS_FEDERATION_JOIN_SUCCESS_ALERT = "DISMISS_FEDERATION_JOIN_SUCCESS_ALERT";
export const DISMISS_FEDERATION_JOIN_ERROR_ALERT   = "DISMISS_FEDERATION_JOIN_ERROR_ALERT";
export const DISMISS_FEDERATION_CHANGE_RULES_ERROR_ALERT   = "DISMISS_FEDERATION_CHANGE_RULES_ERROR_ALERT";
export const DISMISS_FEDERATION_CHANGE_RULES_SUCCESS_ALERT = "DISMISS_FEDERATION_CHANGE_RULES_SUCCESS_ALERT";

//imported  in federation-actions.js and used in
export const ACTIVATE_FEDERATION_CHANGE_RULES_MODAL          = "ACTIVATE_FEDERATION_CHANGE_RULES_MODAL";
export const DEACTIVATE_FEDERATION_CHANGE_RULES_MODAL        = "DEACTIVATE_FEDERATION_CHANGE_RULES_MODAL";
export const ACTIVATE_HANDLE_FEDERATION_CHANGE_RULES_MODAL   = "ACTIVATE_HANDLE_FEDERATION_CHANGE_RULES_MODAL";
export const DEACTIVATE_HANDLE_FEDERATION_CHANGE_RULES_MODAL = "DEACTIVATE_HANDLE_FEDERATION_CHANGE_RULES_MODAL";

export const  ACTIVATE_FEDERATION_LEAVE_WITH_VOTE_MODAL      = "ACTIVATE_FEDERATION_LEAVE_WITH_VOTE_MODAL";
export const  DEACTIVATE_FEDERATION_LEAVE_WITH_VOTE_MODAL    = "DEACTIVATE_FEDERATION_LEAVE_WITH_VOTE_MODAL";

export const LEAVE_FEDERATION_WITH_VOTE = "LEAVE_FEDERATION_WITH_VOTE";


// IotFeds definitions
export const WITHDRAW_PARTICIPATION = "WITHDRAW_PARTICIPATION";


export const headers = {
    'X-Requested-With': 'XMLHttpRequest'
};

export function changeModalState(modal, state) {
    return {
        type: CHANGE_MODAL_STATE,
        payload: {
            modal: modal,
            state: state
        }
    };
}

export function removeErrors(type) {
    return {
        type: type,
    };
}

export function dismissAlert(type) {
    return {
        type: type
    };
}

