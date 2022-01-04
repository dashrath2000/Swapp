const initialState = {
    allEmail: '',
    allemailloader: true,
    allEmailerror:null,

    allPhoneNo: '',
    allPhoneNoerro:null,
    allPhoneNoloader:true,

    emailprimary:'',
    emailprimaryloader:true,
    emailprimaryerror:null,

    deleteemail:'',
    deleteemailloader:true,
    deleteemailerror:null,

    RegPhonecode:'',
    RegPhonecodeloader:true,
    RegPhonecodeerror:null,


    
   
  };
  export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_ALLEMAIL_LOADER_TRUE':
            return {
                ...state,
                allemailloader: true
            };
            case 'SET_ALLEMAIL_SUCCESS':
                return{
                  ...state,
                  allEmailerror:null,
                  allEmail:action.email,
                  allemailloader: false
                };
                case 'SET_ALLEMAIL_ERROR':
                  return{
                    ...state,
                    allemailloader: true,
                    allEmailerror:action.data
                  };



                  case 'SET_PHONENO_LOADER_TRUE':
            return {
                ...state,
                allPhoneNoloader: true
            };
            case 'SET_PHONENO_SUCCESS':
                return{
                  ...state,
                  allPhoneNoerro:null,
                  allPhoneNo:action.phoneno,
                  allPhoneNoloader: false
                };
                case 'SET_PHONENO_ERROR':
                  return{
                    ...state,
                    allPhoneNoloader: true,
                    allPhoneNoerro:action.data
                  };




                  case 'SET_EMAIL_PRIMARY_LOADER_TRUE':
                    return {
                        ...state,
                        emailprimaryloader: true
                    };
                    case 'SET_EMAIL_PRIMARY_SUCCESS':
                        return{
                          ...state,
                          emailprimaryerror:null,
                          emailprimary:action.data,
                          emailprimaryloader: false
                        };
                        case 'SET_EMAIL_PRIMARY_ERROR':
                          return{
                            ...state,
                            emailprimaryloader: true,
                            emailprimaryerror:action.data
                          };



                          case 'SET_EMAIL_DELETE_LOADER_TRUE':
                            return {
                                ...state,
                                deleteemailloader: true
                            };
                            case 'SET_EMAIL_DELETE_SUCCESS':
                                return{
                                  ...state,
                                  deleteemailerror:null,
                                  deleteemail:action.data,
                                  deleteemailloader: false
                                };
                                case 'SET_EMAIL_DELETE_ERROR':
                                  return{
                                    ...state,
                                    deleteemailloader: true,
                                    deleteemailerror:action.data
                                  };  
                                  
                                  
                          case 'SET_SEND_PHONE_CODE_LOADER_TRUE':
                            return {
                                ...state,
                                deleteemailloader: true
                            };
                            case 'SET_SEND_PHONE_CODE_SUCCESS':
                                return{
                                  ...state,
                                  deleteemailerror:null,
                                  deleteemail:action.data,
                                  deleteemailloader: false
                                };
                                case 'SET_SEND_PHONE_CODE':
                                  return{
                                    ...state,
                                    deleteemailloader: true,
                                    deleteemailerror:action.data
                                  }; 
            default:
                return state;
        }


  }