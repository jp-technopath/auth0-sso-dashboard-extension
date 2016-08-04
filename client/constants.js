/*
 * Applications.
 */

// Fetch.
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';
export const FETCH_APPLICATIONS_PENDING = 'FETCH_APPLICATIONS_PENDING';
export const FETCH_APPLICATIONS_REJECTED = 'FETCH_APPLICATIONS_REJECTED';
export const FETCH_APPLICATIONS_FULFILLED = 'FETCH_APPLICATIONS_FULFILLED';

// Fetch single.
export const FETCH_APPLICATION = 'FETCH_APPLICATION';
export const FETCH_APPLICATION_PENDING = 'FETCH_APPLICATION_PENDING';
export const FETCH_APPLICATION_REJECTED = 'FETCH_APPLICATION_REJECTED';
export const FETCH_APPLICATION_FULFILLED = 'FETCH_APPLICATION_FULFILLED';

/*
 * Auth.
 */

// Token.
export const LOADED_TOKEN = 'LOADED_TOKEN';
export const RECIEVED_TOKEN = 'RECIEVED_TOKEN';

// Login.
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const REDIRECT_LOGIN = 'REDIRECT_LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Logout.
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

/*
 * Connections.
 */

// Fetch.
export const FETCH_CONNECTIONS = 'FETCH_CONNECTIONS';
export const FETCH_CONNECTIONS_PENDING = 'FETCH_CONNECTIONS_PENDING';
export const FETCH_CONNECTIONS_REJECTED = 'FETCH_CONNECTIONS_REJECTED';
export const FETCH_CONNECTIONS_FULFILLED = 'FETCH_CONNECTIONS_FULFILLED';

/*
 * Logs.
 */

export const CLEAR_LOG = 'CLEAR_LOG';

// Fetch all.
export const FETCH_LOGS = 'FETCH_LOGS';
export const FETCH_LOGS_PENDING = 'FETCH_LOGS_PENDING';
export const FETCH_LOGS_REJECTED = 'FETCH_LOGS_REJECTED';
export const FETCH_LOGS_FULFILLED = 'FETCH_LOGS_FULFILLED';

// Fetch single.
export const FETCH_LOG = 'FETCH_LOG';
export const FETCH_LOG_PENDING = 'FETCH_LOG_PENDING';
export const FETCH_LOG_REJECTED = 'FETCH_LOG_REJECTED';
export const FETCH_LOG_FULFILLED = 'FETCH_LOG_FULFILLED';

/*
 * Users.
 */

// Fetch all.
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';

// Fetch single.
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

// Fetch logs.
export const FETCH_USER_LOGS = 'FETCH_USER_LOGS';
export const FETCH_USER_LOGS_PENDING = 'FETCH_USER_LOGS_PENDING';
export const FETCH_USER_LOGS_REJECTED = 'FETCH_USER_LOGS_REJECTED';
export const FETCH_USER_LOGS_FULFILLED = 'FETCH_USER_LOGS_FULFILLED';

// Fetch devices.
export const FETCH_USER_DEVICES = 'FETCH_USER_DEVICES';
export const FETCH_USER_DEVICES_PENDING = 'FETCH_USER_DEVICES_PENDING';
export const FETCH_USER_DEVICES_REJECTED = 'FETCH_USER_DEVICES_REJECTED';
export const FETCH_USER_DEVICES_FULFILLED = 'FETCH_USER_DEVICES_FULFILLED';

// Remove MFA.
export const REQUEST_REMOVE_MULTIFACTOR = 'REQUEST_REMOVE_MULTIFACTOR';
export const CANCEL_REMOVE_MULTIFACTOR = 'CANCEL_REMOVE_MULTIFACTOR';
export const REMOVE_MULTIFACTOR = 'REMOVE_MULTIFACTOR';
export const REMOVE_MULTIFACTOR_PENDING = 'REMOVE_MULTIFACTOR_PENDING';
export const REMOVE_MULTIFACTOR_REJECTED = 'REMOVE_MULTIFACTOR_REJECTED';
export const REMOVE_MULTIFACTOR_FULFILLED = 'REMOVE_MULTIFACTOR_FULFILLED';

// Block user.
export const REQUEST_BLOCK_USER = 'REQUEST_BLOCK_USER';
export const CANCEL_BLOCK_USER = 'CANCEL_BLOCK_USER';
export const BLOCK_USER = 'BLOCK_USER';
export const BLOCK_USER_PENDING = 'BLOCK_USER_PENDING';
export const BLOCK_USER_REJECTED = 'BLOCK_USER_REJECTED';
export const BLOCK_USER_FULFILLED = 'BLOCK_USER_FULFILLED';

// Unblock user.
export const REQUEST_UNBLOCK_USER = 'REQUEST_UNBLOCK_USER';
export const CANCEL_UNBLOCK_USER = 'CANCEL_UNBLOCK_USER';
export const UNBLOCK_USER = 'UNBLOCK_USER';
export const UNBLOCK_USER_PENDING = 'UNBLOCK_USER_PENDING';
export const UNBLOCK_USER_REJECTED = 'UNBLOCK_USER_REJECTED';
export const UNBLOCK_USER_FULFILLED = 'UNBLOCK_USER_FULFILLED';

// Delete user.
export const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER';
export const CANCEL_DELETE_USER = 'CANCEL_DELETE_USER';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_PENDING = 'DELETE_USER_PENDING';
export const DELETE_USER_REJECTED = 'DELETE_USER_REJECTED';
export const DELETE_USER_FULFILLED = 'DELETE_USER_FULFILLED';

// Reset password.
export const REQUEST_PASSWORD_RESET = 'REQUEST_PASSWORD_RESET';
export const CANCEL_PASSWORD_RESET = 'CANCEL_PASSWORD_RESET';
export const PASSWORD_RESET = 'PASSWORD_RESET';
export const PASSWORD_RESET_PENDING = 'PASSWORD_RESET_PENDING';
export const PASSWORD_RESET_REJECTED = 'PASSWORD_RESET_REJECTED';
export const PASSWORD_RESET_FULFILLED = 'PASSWORD_RESET_FULFILLED';

// Change password.
export const REQUEST_PASSWORD_CHANGE = 'REQUEST_PASSWORD_CHANGE';
export const CANCEL_PASSWORD_CHANGE = 'CANCEL_PASSWORD_CHANGE';
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const PASSWORD_CHANGE_PENDING = 'PASSWORD_CHANGE_PENDING';
export const PASSWORD_CHANGE_REJECTED = 'PASSWORD_CHANGE_REJECTED';
export const PASSWORD_CHANGE_FULFILLED = 'PASSWORD_CHANGE_FULFILLED';

/*
 * User Picker.
 */

export const CONFIRM_USER_PICKER = 'CONFIRM_USER_PICKER';
export const CANCEL_USER_PICKER = 'CANCEL_USER_PICKER';

// Open.
export const OPEN_USER_PICKER = 'OPEN_USER_PICKER';

// Search.
export const SEARCH_USER_PICKER = 'SEARCH_USER_PICKER';
export const SEARCH_USER_PICKER_PENDING = 'SEARCH_USER_PICKER_PENDING';
export const SEARCH_USER_PICKER_REJECTED = 'SEARCH_USER_PICKER_REJECTED';
export const SEARCH_USER_PICKER_FULFILLED = 'SEARCH_USER_PICKER_FULFILLED';

// Select.
export const SELECT_USER = 'SELECT_USER';
export const UNSELECT_USER = 'UNSELECT_USER';