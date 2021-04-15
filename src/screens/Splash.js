import React, { Component } from 'react';
import { Image, View, Text,StyleSheet } from 'react-native';
import { Jsondata } from '../components/constants';
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
export default class MyComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let { navigation } = this.props
        setTimeout(() => {
            navigation.navigate('listdata')
        }, 3000);
    }
    UNSAFE_componentWillMount() {
        clearInterval()
    }
    render() {
        return (
            <View style={styles.container}>
             <Text style={styles.splashtext}>
             Welcome
             </Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#056f80'
    },
    splashtext:{
       fontSize:40,
       color:'white',
       fontWeight:'bold',
       alignSelf:'center',
       marginTop:hp('40%')
    }
})