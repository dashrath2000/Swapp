import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ActivityIndicator,
  } from 'react-native';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import style from './Styles';
  import Button from '../../Components/CreatingAccount/Button';
  import {useNavigation} from '@react-navigation/native';
  import RBSheet from "react-native-raw-bottom-sheet";
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import {connect} from "react-redux";
import DeviceInfo from 'react-native-device-info';
  
  

  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  
import { tupleExpression } from '@babel/types';
const data = [
  {id:'1',
phone:'89555554'},
{id:'2',
phone:'55456454564484'},
]
  const Phone=(props)=>{
    const navigation = useNavigation();
    const refRBSheet = React.useRef();
    const openBottomSheet = (id) => {
      if (refRBSheet && refRBSheet.current) {
        refRBSheet.current.open();
        // [refRBSheet.current + id].open()
      }
    };
    React.useEffect(() => {
      props.dispatchGetallphoneNo();
      DeviceInfo.getPhoneNumber().then((ip) => {
        // "92.168.32.44"
        console.log(ip)
      });
      // props.eraseEmailData();
      
      // console.log(JSON.stringify(props.GetallPhoneno.allPhoneNo) + 'ram')
      
      
    },[])
    console.log("pheon:" +JSON.stringify( props.GetallPhoneno )+ 'pnone');
// console.log(JSON.stringify(props.GetallPhoneno.allPhoneNo) + 'phoneno');
// console.log(props.GetallPhoneno + 'pnone');
// console.log(props.GetallPhoneno.allPhoneNo + 'pnone');


    const closeSheet=()=>{
      if (refRBSheet && refRBSheet.current) {
        refRBSheet.current.close();
      }
    };
      return(
        <SafeAreaView style={{flex:1}}>
        <View style={style.viewprimary}>
            <Text style={style.primary}>Primary Phone Number</Text>
        </View>
        <View style={style.line}></View>
        <View style={style.EmailContainer}>
           <Text style={style.emailText}>+1 (941) 888 - 88 - 88</Text>
        </View>
        <View style={[style.viewprimary,{marginTop:hp('3%')}]}>
            <Text style={style.primary}>Other Phone Numbers</Text>

        </View>
        <View style={style.line}></View>
        {
          props?.allPhoneNoloader == false ?
          data.map(({phone}) => 
          {
            return (
              <View style={[style.EmailContainer,{flexDirection:'row'}]}>
              <View style={{width:'80%',alignSelf:'center'}}>
             <Text style={style.emailText}>{phone}</Text>
             </View>
             <TouchableOpacity onPress={() =>openBottomSheet(phone)} style={{width:'20%',justifyContent:'center',alignSelf:'center',alignItems:'center',flexDirection:'row'}}>
               <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,}}></View>
               <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,marginLeft:5}}></View>
               <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,marginLeft:5}}></View>
             </TouchableOpacity>
          </View>
            )
          })
          :  <View style={{justifyContent:'center',alignItems:'center',flex:1}}><ActivityIndicator size="large" color="#0000ff" />
          <Text style={{marginVertical:hp('4')}}>Loading Please Wait...</Text></View>
        }
        
        {/* <View style={[style.EmailContainer,{flexDirection:'row'}]}>
            <View style={{width:'80%',alignSelf:'center'}}>
           <Text style={style.emailText}>+1 (941) 888 - 88 - 88</Text>
           </View>
           <TouchableOpacity onPress={openBottomSheet} style={{width:'20%',justifyContent:'center',alignSelf:'center',alignItems:'center',flexDirection:'row'}}>
             <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,}}></View>
             <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,marginLeft:5}}></View>
             <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,marginLeft:5}}></View>
           </TouchableOpacity>
        </View>
        <View style={[style.EmailContainer,{flexDirection:'row'}]}>
            <View style={{width:'80%',alignSelf:'center'}}>
           <Text style={style.emailText}>+1 (941) 888 - 88 - 88</Text>
           </View>
           <TouchableOpacity onPress={openBottomSheet} style={{width:'20%',justifyContent:'center',alignSelf:'center',alignItems:'center',flexDirection:'row'}}>
             <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,}}></View>
             <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,marginLeft:5}}></View>
             <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,marginLeft:5}}></View>
           </TouchableOpacity>
        </View> */}
        <RBSheet
          ref={refRBSheet}
        //  ref={[refRBSheet + id] }
          height={350}
          closeOnDragDown={true}
          closeOnPressMask={true}
          openDuration={250}
          customStyles={{
            container: {
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              backgroundColor:'#262A34'
            },
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.8)',
            },
            draggableIcon: {
              backgroundColor: '#ccc',
            },
          }}
        >
          <View style={{flex:1,}}>
            <View style={{flexDirection:'row'}}>
              <View style={{width:wp('80%'),marginLeft:wp('7%'),justifyContent:'center'}}>
              <Text style={{color:'#fff',fontFamily:'Inter-Medium'}}>{918955126172}</Text>
              </View>
              <TouchableOpacity onPress={closeSheet} style={{width:wp('10%'),alignContent:'flex-end',marginRight:'2%'}}>
                <AntDesign name="closecircle" size={30} color={"white"}/>
              </TouchableOpacity>
            </View>
            <View style={[style.line,{width:'100%'}]}></View>
            <View style={{marginTop:hp('3%'),marginLeft:wp('6%'),flexDirection:'row'}}> 
            <View style={{width:wp('10%')}}>
              <AntDesign name="staro" color={'#fff'} size={30} />
              </View>
              <View style={{justifyContent:'center',marginLeft:wp('3%')}}>
              <Text style={{fontFamily:'Inter-Medium',color:'#fff',fontSize:wp('4%'),fontWeight:'500'}}>Make it the Primary email</Text>
              </View>
            </View>
            <View style={[style.line,{width:'100%'}]}></View>
            <View style={{marginTop:hp('3%'),marginLeft:wp('6%'),flexDirection:'row'}}> 
            <View style={{width:wp('10%')}}>
              <FontAwesome name="bell-slash-o" color={'#fff'} size={25} />
              </View>
              <View style={{justifyContent:'center',marginLeft:wp('3%')}}>
              <Text style={{fontFamily:'Inter-Medium',color:'#fff',fontSize:wp('4%'),fontWeight:'500'}}>Unsubscribe</Text>
              </View>
            </View>
            <View style={[style.line,{width:'100%'}]}></View>
            <View style={{marginTop:hp('3%'),marginLeft:wp('6%'),flexDirection:'row'}}> 
            <View style={{width:wp('10%')}}>
              <SimpleLineIcons name="pencil" color={'#fff'} size={25} />
              </View>
              <View style={{justifyContent:'center',marginLeft:wp('3%')}}>
              <Text style={{fontFamily:'Inter-Medium',color:'#fff',fontSize:wp('4%'),fontWeight:'500'}}>Edit</Text>
              </View>
            </View>
            <View style={[style.line,{width:'100%'}]}></View>
            <TouchableOpacity style={{marginTop:hp('3%'),marginLeft:wp('6%'),flexDirection:'row'}} onPress={ () => props.deletePhoneNo()}> 
            <View style={{width:wp('10%')}}>
              <AntDesign name="delete" color={'#fff'} size={25} />
              </View>
              <View style={{justifyContent:'center',marginLeft:wp('3%')}}>
              <Text style={{fontFamily:'Inter-Medium',color:'#fff',fontSize:wp('4%'),fontWeight:'500'}}>Disable Email</Text>
              </View>
            </TouchableOpacity>
          </View>
        </RBSheet>
        <Button roundBtn isTransparent handleFunction={() => navigation.navigate('EnterEmailPhoneScreen', {isPhone: true,addNew:'Add new phone number'})} btnText={'Add new phone number'} />
      </SafeAreaView>
      )
  }

  const mapStateToProps = (state) => ({
    auth: state.auth,
    GetallPhoneno: state.Email.allPhoneNo,
    allPhoneNoloader : state.Email.allPhoneNoloader,
    

});

const mapDispatchToProps = (dispatch) =>  ({
    // sendEmailPhone: (data) => {dispatch({type: "SEND_EMAIL", data})},
    // eraseEmailError: () => {dispatch({type: "ERASE_EMAIL_ERROR"})},
    // eraseEmailData: () => {dispatch({type: "ERASE_EMAIL_DATA"})},
    dispatchGetallphoneNo: () => {dispatch({type:"Get_ALLPHONE"})},
    deletePhoneNo: () => {dispatch({type:"DELETE_PHONENO"})}
});

  export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Phone);