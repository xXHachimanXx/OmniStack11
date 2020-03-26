import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();
    //mensagem para debug
    const message = "Olá ONG, estou entrando em contato poi meu doguinho foi atropelado e preciso de ajuda.";
    const ms = "Oi meu chuchuzinho to testando o meu app aqui. Essa mensagem foi enviada através dele kkkkk";

    // Função para voltar para a página anterior
    function navigationBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: "Herói do caso: Dog atropelado",
            recipients: ["globaldep90@gmail.com"],
            body: message,
        });
    }

    // Utilizando deeplinking
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=553197872547&text=${ms}`);
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={ navigationBack }>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View> 

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Dog atropelado</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text> 
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato: </Text>

                <View style={styles.actions}>
                    
                    <TouchableOpacity style={styles.action} onPress={ sendWhatsapp } >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={ sendMail } >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
}