import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Title } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Jsondata } from '../components/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { cos } from 'react-native-reanimated';
class Listdata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isvisiable: false,
            visialesubcategory: '',
            listdata: Jsondata
        }
    }
    onloadlistPress = () => {
        this.setState({
            isvisiable: true
        })
    }
    filetWoringData = (query) => {
        showMessage({
            message: 'No Record Found',
            type: 'info',
        });
        let filterdata = Jsondata.filter((data) =>
            data.category.toLowerCase().includes(query.toLowerCase())
        );
        if (filterdata.length >= 1) {
            console.log(filterdata)
            this.setState({
                listdata: filterdata,
            });
        } else {
            console.log(filterdata)
            this.setState({ listdata: Jsondata });
            showMessage({
                message: 'No Record Found',
                type: 'info',
            });
        }

    };
    renddataList = (item, index) => {

        let { category, id, subCategories } = item.item
        let { visialesubcategory, listdata } = this.state;
        return (
            <Card style={styles.singlecard}>
                <TouchableOpacity
                    onPress={() => { visialesubcategory === id ? this.setState({ visialesubcategory: null }) : this.setState({ visialesubcategory: id }) }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Title style={styles.categoryText} >{category}</Title>
                        <FontAwesome name={visialesubcategory === id ? "arrow-circle-up" : "arrow-circle-down"} size={30} color="white" style={styles.cancelicon} />
                    </View>

                    {visialesubcategory === id ? subCategories && subCategories.map(subcat => {
                        return (
                            <View>
                                <Text style={{ fontSize: 18, color: 'white', padding: 10 }}>{subcat.subCategory}</Text>
                            </View>
                        )
                    })
                        : null}
                </TouchableOpacity>
            </Card>
        )
    }
    render() {
        let { isvisiable, listdata } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <TouchableWithoutFeedback onPress={() => { this.onloadlistPress() }}>
                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.lineargradienttext} >
                        <Text style={styles.buttonText}>
                            Load List
           </Text>
                    </LinearGradient>
                </TouchableWithoutFeedback>
                <Modal
                    visible={isvisiable}
                    onRequestClose={() => { this.setState({ isvisiable: false }); }}
                >
                    <View style={{ flexDirection: 'row', marginTop: hp('4%') }}>
                        <TouchableOpacity onPress={() => { this.setState({ isvisiable: false }) }}>
                            <Entypo name="cross" size={30} color="#900" style={styles.cancelicon} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="search..."
                            style={styles.searchBox}
                            onChangeText={(text) => {
                                this.filetWoringData(text);
                            }}
                        />
                    </View>

                    <FlatList
                        data={listdata}
                        style={{ marginBottom: hp('10%') }}
                        renderItem={this.renddataList}
                        keyExtractor={(item, index) => String(index)}
                    />
                </Modal>
            </View>

        )
    }
}
export default Listdata;
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        padding: 5
    },
    lineargradienttext: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp('40%')
    },
    cancelicon: {
        padding: 10
    },
    singlecard: {
        marginTop: hp('4%'),
        width: wp('90%'),
        alignSelf: 'center',
        backgroundColor: '#385c63'
    },
    categoryText: {
        padding: 10,
        color: 'white'
    },
    searchBox: {
        width: wp('60%'),
        height: hp('6%'),
        fontSize: hp('2%'),
        borderRadius: 8,
        borderColor: '#aaa',
        color: '#000',
        backgroundColor: '#fff',
        borderWidth: 1.5,
        alignSelf: 'center',
        marginLeft: wp('2%'),
    },
    header:{
        height:hp('10%'),
        backgroundColor:'#056f80'
    }
});