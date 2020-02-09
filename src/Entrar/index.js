import React from 'react';
import {  Text, View, Button } from 'react-native';

export default function Entrar(props) {
  return (
    <View style={{  backgroundColor: '#292929', 
                    width: '100%', 
                    height: 350, 
                    borderRadius: 15
                    }}>
        <Text style={{paddingTop: 15, 
                      color: '#fff', 
                      fontSize: 28,
                      textAlign: "center"}}>
            Seja Bem-vindo!
        </Text>

        <Button title="Sair" onPress={props.sair}>
        </Button>
    </View>
  );
}
