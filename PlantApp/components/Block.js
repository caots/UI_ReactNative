import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'

export default class BlockComponent extends Component{
    render(){
        const {navigation} = this.props;
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Product Screen</Text>
            </View>
        )
    }
}