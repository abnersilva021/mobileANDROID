import React from 'react';
import { ScrollView, View, Image } from 'react-native';

const Imagem = () =>{
    return(
        <View>
            <ScrollView>
                <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt41ru6YGU06uxGryl0dsS9HCJ0Pk9csGsm4w_q6JG6Q&s'}}/>
                <Image
                source={{ uri: 'https://pbs.twimg.com/media/EGPHaO9WoAA4vAR.jpg'}}/>
                <Image
                source={{ uri: 'https://s2-g1.glbimg.com/l7fUkvdovxaODjM-7_LKacF-pU4=/0x0:1700x1065/1008x0/smart/filters:strip_icc()/s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/photos/apis/b03aa813eaaa4e059f069c843d77415a/selfie.jpg'}}/>
            </ScrollView>
        </View>
    )
}

export default Imagem;