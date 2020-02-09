import React, { useState } from 'react';
import { StyleSheet, View, Button, Modal } from 'react-native';
import Entrar  from './src/Entrar/index';

export default function App() {

  const [modalVisible, setModalVible] = useState(false);

  return (
    <View style={styles.container}>
        <Button title="entrar" onPress={entrar}></Button>
        <Modal transparent={true} animationType="fade" visible={modalVisible}>
          <View style={{margin: 15, flex:1,alignItems:'center', justifyContent: 'center'}}>
           <Entrar sair={sair}/>

          </View>
  
        </Modal>
     </View>
  );

  function entrar() {
    setModalVible(true);
  }

  function sair() {
    setModalVible(false);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
