// export const setallemailSuccess = (email) => ({type: 'SET_ALLEMAIL_SUCCESS'},email);


export const setallemailError = (data) => ({type: 'SET_ALLEMAIL_ERROR',data});
export const setallemailSuccess = (email) => ({type: 'SET_ALLEMAIL_SUCCESS', email});
export const setallemailLoaderTrue = () => ({type: 'SET_ALLEMAIL_LOADER_TRUE'});



export const setallphoneNoError = (data) => ({type: 'SET_PHONENO_ERROR',data});
export const setallphoneNoSuccess = (phoneno) => ({type: 'SET_PHONENO_SUCCESS', phoneno});
export const setallphoneNoLoaderTrue = () => ({type: 'SET_PHONENO_LOADER_TRUE'});


export const setEmailPrimaryError = (data) => ({type: 'SET_EMAIL_PRIMARY_ERROR',data});
export const setEmailPrimarySuccess = (data) => ({type: 'SET_EMAIL_PRIMARY_SUCCESS',data});
export const setEmailPrimaryLoader = () => ({type: 'SET_EMAIL_PRIMARY_LOADER_TRUE'});



export const SetEmailDeleteError = (data) => ({type: 'SET_EMAIL_DELETE_ERROR',data});
export const SetEmailDeleteSuccess = (data) => ({type: 'SET_EMAIL_DELETE_SUCCESS',data});
export const SetEmailDeleteLoader = () => ({type: 'SET_EMAIL_DELETE_LOADER_TRUE'});

export const SetphoneDeleteLoader = (data) => ({type: 'SET_PHONE_DELETE_ERROR',data});
export const SetdeletephoneSuccess = (data) => ({type: 'SET_PHONE_DELETE_SUCCESS',data});
export const SetdeletephoneError = () => ({type: 'SET_PHONEL_DELETE_LOADER_TRUE'});


export const setSendRegCodeMobileError = (data) => ({type: 'SET_SEND_PHONE_CODE',data});
export const setSendRegCodeMobileSuccess = (data) => ({type: 'SET_SEND_PHONE_CODE_SUCCESS',data});
export const setSendRegCodeMobileLoader = () => ({type: 'SET_SEND_PHONE_CODE_LOADER_TRUE'});
