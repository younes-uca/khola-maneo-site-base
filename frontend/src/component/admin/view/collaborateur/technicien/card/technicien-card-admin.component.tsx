import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TechnicienAdminCard = ({ nom ,prenom ,credentialsNonExpired ,enabled ,accountNonExpired ,accountNonLocked ,passwordChanged ,username ,password , onPressDelete, onUpdate, onDetails }) =>{

return (

    <SafeAreaView>

        <View style={{ flexDirection: 'row', width: '100%' }} >

            <TouchableOpacity onPress={onDetails} style={{ height: 170, marginHorizontal: 10, borderRadius: 15, marginVertical: 10, elevation: 13, backgroundColor: 'white', width: '95%', flexDirection: 'row', justifyContent: 'space-between' }} >

                <View style={{ marginLeft: 15, marginVertical: 10 }}>

                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Nom: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{nom}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Prenom: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{prenom}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Credentials non expired: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{credentialsNonExpired}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Enabled: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{enabled}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Account non expired: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{accountNonExpired}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Account non locked: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{accountNonLocked}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Password changed: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{passwordChanged}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Username: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{username}</Text>
                    </View>
                    <View style={styles.infos}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>- Password: </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{password}</Text>
                    </View>

                </View>


                <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>

                    <TouchableOpacity onPress={() => onPressDelete()} style={styles.deleteButton}>
                        <Ionicons name="trash-outline" size={25} color={'red'} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onUpdate()} style={styles.updateButton}>
                        <Ionicons name="pencil-outline" size={25} color={'blue'} />
                    </TouchableOpacity>

                </View>

            </TouchableOpacity>

        </View>

    </SafeAreaView>
);
};

const styles = StyleSheet.create({
    card: {
        height: 170,
        marginHorizontal: 10,
        borderRadius: 15,
        marginVertical: 10,
        elevation: 13,
        backgroundColor: 'white',
        width: '90%',
        flexDirection: 'row',
        marginRight: '25%',
    },

    deleteButton: {
        margin: 15
    },

    updateButton: {
        margin: 15
    },

    buttons: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        right: '10%'
    },

    infos: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginVertical: 6.5
    }
});

export default TechnicienAdminCard;
