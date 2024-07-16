import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Modal, Dimensions, TouchableOpacity } from "react-native";



const {width, height} = Dimensions.get('window');

export default function Prueba() {

    const [modal, setModal] = useState(false);


    return (
        

            <View 
                style={{
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}
            >
                <Modal visible={modal} animationType="slide">
                    <View
                        style={{
                            flex:1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.3)'
                        }}
                    >   

                        <TouchableOpacity onPress={() => setModal(false)}
                            style={{
                                width: width * 0.1,
                                height: height * 0.1,
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#f4f4f4',
                                borderRadius: width * 0.1,
                                left: width * 0.1,
                            }}
                        >
                            <FontAwesome5 name="chevron-circle-down" size={width * 0.1} color="#ff"/>
                        </TouchableOpacity>

                    </View>
                </Modal>

                <TouchableOpacity onPress={() => setModal(true)}
                    style={{
                        width: width * 0.3,
                        height: height * 0.2,
                        backgroundColor: '#0088f0',
                        borderRadius: width * 0.1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                
                >

                    <Text
                        style={{
                            fontSize: width * 0.04,
                            fontWeight: '700',
                            color: '#fff'
                        }}
                    >
                        Abrir Modal
                    </Text>
                
                </TouchableOpacity>
            </View>             
    );
}