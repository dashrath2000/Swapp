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

const RBsheet = ({refRBSheet,id,email,ChangetoPrimaryEmail }) => {
    
    console.log("mac" ,id);
    const closeSheet=()=>{
        if (refRBSheet && refRBSheet.current) {
          refRBSheet.current.close();
        }
      };
    return (
        <View>
           <RBSheet
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
              <Text style={{color:'#fff',fontFamily:'Inter-Medium'}}>{id}</Text>
              </View>
              <TouchableOpacity onPress={closeSheet} style={{width:wp('10%'),alignContent:'flex-end',marginRight:'2%'}}>
                <AntDesign name="closecircle" size={30} color={"white"}/>
              </TouchableOpacity>
            </View>
            <View style={[style.line,{width:'100%'}]}></View>
           <TouchableOpacity
            // onPress={() =>ChangetoPrimaryEmail(id,email)}
            >
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
        </RBSheet>
        </View>
    )
}

export default RBsheet
