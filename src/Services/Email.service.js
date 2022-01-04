import axios from 'axios';
const URL = 'https://data-stage.hubioid.com';
import DeviceInfo from 'react-native-device-info';
// import EncryptedStorage from 'react-native-encrypted-storage';

const token = "v2.local.m3tQiHkkvRcUkTDDcSj9JfNCJeaI6BYrYpnpVIhZbMzXJWFWZDS32Rc6vnBATUgXF4Z9EQpmb6bB5oiAjlilOKP94CVByNes6s_4p-TlBJ4H7sHhVMCbnum0TCQo5R-KvXq7By-XGVGEUfiPxooPC-ygnhndSpBwqMcf6BZMJjmbPZMtvtMn-Alu-muSQPPVFqg75mYzBenxi4KGO_vdO8W_rWUQxhblUIxMNi-rP6yH2BIeIZQrgqwKUraHBFbZ_X6C6M1ceML2ZSKSTeGncIpHY5t6uzYZEfliQrzMERrO11cgmPpvUfBsnb7rBFHIBKf0X9Oxp6iaRQbEBdmowmofELG6owWo_PXVT1hpBxRwyfEFJSh1d4J-JNIzAUAY9QHaAoRVJUr54RhQTLFPl04C2suqHwGoGp7pywkQVTd3ilm0ZGNDFsf2-0SvXvkJwYIu4t8OaZnRphJyXnWwbVqjYVNgR2KwECu6niQtAfCvDGQk2C-x-vl36nyGYw.aHViaW8uaW8"

export function getallemail() {
    console.log('getallemail address')
    // console.log(data)
    // let token = EncryptedStorage.getItem('token');
    console.log('tok nen in service')
    console.log(token)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/email/get`,
        headers: { Authorization: 'Bearer ' + token },
        
    });
}

export function getallphoneno() {
    console.log('PHONE address')
    // console.log(data)
    // let token = EncryptedStorage.getItem('token');
    console.log('tokEN in service')
    console.log(token)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/phone/get`,
        headers: { Authorization: 'Bearer ' + token },
        
    });
}


export function changeEmailToPrimary(data) {

    console.log('++++++++++++++++++++++++++++')
   console.log(data)
   console.log('++++++++++++++++++++++++++++')
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/email/primary/change`,
        headers: { Authorization: 'Bearer ' + token },
        data:{
            "id": "168f3a01-fc9c-4482-9ca4-5966d529c12e"
        }
        
        
    });
}


export function SendRegCodeMobile(data) {
    // console.log('data' + JSON.stringify(data))
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/verification/code/register`,
        // headers: { Authorization: 'Bearer ' + token  },
        // data:{
        //     "phone": "918955126172"
        //   }
        
        data
    });
}


export function SendRegCodeGmail(data) {
    // console.log('data' + JSON.stringify(data))
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/verification/code/register`,
        // headers: { Authorization: 'Bearer ' + token  },
        // data:{
        //     "phone": "918955126172"
        //   }
        
        data
    });
}







export function emailDelete(data) {
    console.log('deleteEmail_address')
    console.log(data)
    // let token = EncryptedStorage.getItem('token');
    console.log('token in service')
    console.log(token)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/phone/delete`,
        headers: { Authorization: 'Bearer ' + token },
        data:{
            "id": "2d518ef9-1221-440a-a72f-de7cd6187c0e"
            // "id": "2d518ef9-1221-44a-a72f-de7cd6187c0e"
        }
    });
}

export function phoneNoDelete(data) {
    console.log('delete_phone')
    console.log(data)
    // let token = EncryptedStorage.getItem('token');
    console.log('token in service')
    console.log(token)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/phone/delete`,
        headers: { Authorization: 'Bearer ' + token },
        data:{
            "id": "2d518ef9-1221-440a-a72f-de7cd6187c0e"
        }
    });
}