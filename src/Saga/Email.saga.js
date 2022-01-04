
import {call, put, takeEvery, takeLatest} from '@redux-saga/core/effects';
import * as Email from '../Services/Email.service';
import {CHNANGEEMAILLoaderTrue, CHNANGEEMAILNoError, CHNANGEEMAILSuccess, setallemailError,setallemailLoaderTrue,setallemailSuccess,setallphoneNoError,setallphoneNoLoaderTrue,setallphoneNoSuccess, SetdeletephoneError, SetdeletephoneSuccess, SetEmailDeleteError, SetEmailDeleteLoader, SetEmailDeleteSuccess, setEmailPrimaryError, setEmailPrimaryLoader, setEmailPrimarySuccess, SetphoneDeleteLoader, setSendRegCodeMobileError, setSendRegCodeMobileLoader, setSendRegCodeMobileSuccess} from "../Actions/Email.action";


// function* Getallemail() {
//   try {
//       yield put(setallemailLoaderTrue());
//     console.log('------------------------');
//     // console.log(action.data);
//     console.log('------------------------');
//     let {data} = yield call(Email.getallemail);
//     console.log('data from server2');
//     // console.log(data);
//       yield put(setallemailSuccess(data.data));
//   } catch (error) {
//     console.log('errorgetallemail',error);
//     yield put(setallemailError(data))
//   }
// }

function* Getallemail() {
  try {
    yield put(setallemailLoaderTrue());
    console.log('------------------');
    console.log('------------------');
    let {data} = yield call(Email.getallemail);
    console.log('server response all email');
    yield put(setallemailSuccess(data.data));
    
  } catch (error) {
    console.log('deer',error.response.data)
  yield put(setallemailError(error.response.data))
  }
}


function* Getallphonenumber() {
  try {
      yield put(setallphoneNoLoaderTrue());
    console.log('------------------------');
    // console.log(action.data);
    console.log('------------------------');
    let {data} = yield call(Email.getallphoneno);
    console.log('data from server2');
    console.log(data.data);
      yield put(setallphoneNoSuccess(data.data));
  } catch (error) {
    console.log('error+while calling all phone',error.response.data);
    yield put(setallphoneNoError('data'))
  }
}

function* ChangeEmailprimary(action) {
  try {
      yield put(setEmailPrimaryLoader());
    console.log('------------------------');
    // console.log(action.data);
    console.log('------------------------');
    let {data} = yield call(Email.changeEmailToPrimary);
    console.log('data from primaryemail');
    console.log(data.msg);
      yield put(setEmailPrimarySuccess(data.msg));
  } catch (error) {
    console.log('error+while calling all email',error.response.data);
    yield put(setEmailPrimaryError('data'))
  }
}

function* SendRegCodeMobile(action) {
  try {
      yield put(setSendRegCodeMobileLoader());
    console.log('-----------------d-------');
    console.log(action.data);
    console.log(action);
    console.log('------------------------') ;
    let {data} = yield call(Email.SendRegCodeMobile,action.data);
    console.log('data from Regmobileno');
    console.log(data);
      yield put(setSendRegCodeMobileSuccess(data));
  } catch (error) {
    console.log('errorreg',error.response.data.msg);
    yield put(setSendRegCodeMobileError(error.response.data.msg))
  }
}



function* DeleteEmail(action) {
  try {
      yield put(SetEmailDeleteLoader());
    console.log('------------------------');
    // console.log(action.data);
    console.log('------------------------');
    let {data} = yield call(Email.emailDelete);
    console.log('data from delete_email');
    console.log(data);
      yield put(SetEmailDeleteSuccess(data));
  } catch (error) {
    console.log('error',error);
    yield put(SetEmailDeleteError('data'))
  }
}


function* DeletePhoneNo(action) {
  try {
      yield put(SetphoneDeleteLoader());
    console.log('------------------------');
    // console.log(action.data);
    console.log('------------------------');
    let {data} = yield call(Email.phoneNoDelete);
    console.log('data from server');
    console.log(data);
      yield put(SetdeletephoneSuccess(data));
  } catch (error) {
    console.log('error',error.response.data );
yield put(SetdeletephoneError('data'))
  }
}




export default function* watchEmail() {
    yield takeLatest('GET_ALLEMAIL', Getallemail);
    yield takeLatest('Get_ALLPHONE', Getallphonenumber);
    yield takeLatest('CHANGE_TO_PRIMARY', ChangeEmailprimary);
    yield takeLatest('DELETE_EMAIL', DeleteEmail);
    yield takeLatest('SEND_REG_PHONE_CODE', SendRegCodeMobile);
    yield takeLatest('DELETE_PHONENO', DeletePhoneNo);
  }
  
