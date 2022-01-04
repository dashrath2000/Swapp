import React,{useEffect} from 'react';
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
import Button from '../../Components/CreatingAccount/Button';
  import style from './Styles';
  import {connect} from "react-redux";
  import {useNavigation} from '@react-navigation/native';
  import RBSheet from "react-native-raw-bottom-sheet";
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  import { BlurView, VibrancyView } from "react-native-blur";
import RBsheet from './RBsheet';
  const emails=(props)=>{
    const navigation = useNavigation();
    const refRBSheet = React.useRef();

    const ChangetoPrimaryEmail = (id) => {
      console.log(id + 'ddd')
      let objt = {id:'59d4c25d-3ddf-4667-8de2-8f91dd0fac48'}
      props.ChageToPrimaryemail(objt)
    }
    useEffect(() => {
            // props.dispatchGetallphoneNo();
            props.dispatchGetAllEmail();
            // props.eraseEmailData();
            // console.log(props.GetAllEmail)
            console.log('========================')
            console.log(JSON.stringify(props?.allPrimaryEmail) + 'primaryemail');
            console.log('========================')
            
        
    },[])
    // console.log(JSON.stringify(props.GetAllEmail.allEmail) + 'das');
    const openBottomSheet = (id,email) => {
      // console.log(id)
      if (refRBSheet && refRBSheet.current) {

        refRBSheet.current.open();
        // sheet(id,email)
      }
    };
    const sheet = (id,email) => {
      // refRBSheet.current.open();
      return (
        <RBsheet refRBSheet={refRBSheet} id={id} email={email} ChangetoPrimaryEmail={ChangetoPrimaryEmail}/>
      )
    }
    const closeSheet=()=>{
      if (refRBSheet && refRBSheet.current) {
        refRBSheet.current.close();
      }
    };
      return(
          <SafeAreaView style={{flex:1}}>
            <View style={style.viewprimary}>
                <Text style={style.primary}>Primary Email</Text>
            </View>
            <View style={style.line}></View>
           
             {/* {props?.allemailloader === false ?  props?.GetAllEmail?.allEmail?.map(({email,is_primary,id}) => {
               return(
                  <View style={style.EmailContainer}>
               <Text style={style.emailText}>Bella_Adams@gmail.com</Text>
            </View> 
               )
             })
             :<View><Text>dash</Text></View>} */}
             {
               props?.allemailloader === false ?
               props?.GetAllEmail?.allEmail?.filter((item)=>item.is_primary === true)?.map(({email})=>
               {
                 return(
                  <View style={style.EmailContainer}>
                  <Text style={style.emailText}>{email}</Text>
               </View> 
                 )
               }
               ):
               <View style={{justifyContent:'center',alignItems:'center',flex:1}}><ActivityIndicator size="large" color="#0000ff" />
               <Text style={{marginVertical:hp('4')}}>Loading Please Wait...</Text></View>
             }
            <View style={[style.viewprimary,{marginTop:hp('3%')}]}>
                <Text style={style.primary}>Other Emails</Text>

            </View>
            <View style={style.line}></View>

         
            
            {/* <Text>{JSON.stringify(props?.allemailloader)}Loading</Text> */}
            {props?.allemailloader === false ?  props?.GetAllEmail?.allEmail?.map(({email,is_primary,id}) => {
              return (
                <View style={[style.EmailContainer,{flexDirection:'row'}]}>
                <View style={{width:'80%',alignSelf:'center'}}>
               <Text style={style.emailText}>{email}</Text>
               </View>
               <TouchableOpacity onPress={() => openBottomSheet(id,email)} style={{width:'20%',justifyContent:'center',alignSelf:'center',alignItems:'center',flexDirection:'row'}}>
                 <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,}}></View>
                 <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,marginLeft:5}}></View>
                 <View style={{width:5,height:5,backgroundColor:'#246BFD',borderRadius:20,marginLeft:5}}></View>
               </TouchableOpacity>
             
               {sheet(id,email)}
            </View>
               
               )
              }) : <TouchableOpacity onPress={() => openBottomSheet(id)} style={{justifyContent:'center',alignItems:'center',flex:1}}><ActivityIndicator size="large" color="#0000ff" />
            <Text style={{marginVertical:hp('4')}}>Loading Please Wait...</Text></TouchableOpacity>
           }
           
              {/* <RBsheet refRBSheet={refRBSheet} /> */}
            
            
            {/* <RBSheet
          ref={refRBSheet}
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
              <Text style={{color:'#fff',fontFamily:'Inter-Medium'}}>Bella_Adams@gmail.com</Text>
              </View>
              <TouchableOpacity onPress={closeSheet} style={{width:wp('10%'),alignContent:'flex-end',marginRight:'2%'}}>
                <AntDesign name="closecircle" size={30} color={"white"}/>
              </TouchableOpacity>
            </View>
            <View style={[style.line,{width:'100%'}]}></View>
           <TouchableOpacity onPress={ChangetoPrimaryEmail}>
           <View style={{marginTop:hp('3%'),marginLeft:wp('6%'),flexDirection:'row'}}> 
            <View style={{width:wp('10%')}}>
              <AntDesign name="staro" color={'#fff'} size={30} />
              </View>
              <View style={{justifyContent:'center',marginLeft:wp('3%')}}>
              <Text style={{fontFamily:'Inter-Medium',color:'#fff',fontSize:wp('4%'),fontWeight:'500'}}>Make it the Primary email</Text>
              </View>
            </View>
             </TouchableOpacity>
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
              <TouchableOpacity onPress={() => props.deleteEmailDispatch()}>
            <View style={{marginTop:hp('3%'),marginLeft:wp('6%'),flexDirection:'row'}}> 
            <View style={{width:wp('10%')}}>
              <AntDesign name="delete" color={'#fff'} size={25} />
              </View>
              <View style={{justifyContent:'center',marginLeft:wp('3%')}}>
              <Text style={{fontFamily:'Inter-Medium',color:'#fff',fontSize:wp('4%'),fontWeight:'500'}}>Disable Email</Text>
              </View>
                
            </View>
              </TouchableOpacity>
          </View>
        </RBSheet> */}
            <Button roundBtn isTransparent handleFunction={() => navigation.navigate('EnterEmailPhoneScreen', {isPhone: false,addNew:'Add new Email'})} btnText={'Add new Email'} />
          </SafeAreaView>
      )
  }
  const mapStateToProps = (state) => ({
    auth: state.auth,
    GetAllEmail: state.Email,
    allemailloader : state.Email.allemailloader,
    allPrimaryEmail : state.Email

});

const mapDispatchToProps = (dispatch) =>  ({
    // sendEmailPhone: (data) => {dispatch({type: "SEND_EMAIL", data})},
    // eraseEmailError: () => {dispatch({type: "ERASE_EMAIL_ERROR"})},
    // eraseEmailData: () => {dispatch({type: "ERASE_EMAIL_DATA"})},
    dispatchGetAllEmail: () => {dispatch({type:"GET_ALLEMAIL"})},
    ChageToPrimaryemail: (data) => {dispatch({type:"CHANGE_TO_PRIMARY",data})},
  deleteEmailDispatch:(data) => {dispatch({type:"DELETE_EMAIL",data})}

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(emails);