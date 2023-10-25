import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native-gesture-handler';

import  {TechnicienDto}  from '../../../../../../controller/model/collaborateur/Technicien.model';

type TechnicienViewScreenRouteProp = RouteProp<{ TechnicienDetails: { technicien : TechnicienDto } }, 'TechnicienDetails'>;

type Props = { route: TechnicienViewScreenRouteProp; };

const TechnicienAdminView: React.FC<Props> = ({ route }) => {

    const { technicien } = route.params;
    const [isTechnicienCollapsed, setIsTechnicienCollapsed] = useState(false);



    const technicienCollapsible = () => {
        setIsTechnicienCollapsed(!isTechnicienCollapsed);
    };

return(
    <View style={{ padding: 20 }}>

        <ScrollView>

            <TouchableOpacity onPress={technicienCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Technicien</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isTechnicienCollapsed}>

                <View style={styles.itemCard}>

                    <View>

                        <Text style={styles.infos}>Id: {technicien.id}</Text>
                        <Text style={styles.infos}>Nom: {technicien.nom}</Text>
                        <Text style={styles.infos}>Prenom: {technicien.prenom}</Text>
                        <Text style={styles.infos}>Credentials non expired: {technicien.credentialsNonExpired}</Text>
                        <Text style={styles.infos}>Enabled: {technicien.enabled}</Text>
                        <Text style={styles.infos}>Account non expired: {technicien.accountNonExpired}</Text>
                        <Text style={styles.infos}>Account non locked: {technicien.accountNonLocked}</Text>
                        <Text style={styles.infos}>Password changed: {technicien.passwordChanged}</Text>
                        <Text style={styles.infos}>Username: {technicien.username}</Text>
                        <Text style={styles.infos}>Password: {technicien.password}</Text>

                    </View>

                </View>

            </Collapsible>


        </ScrollView>

    </View>
);
};

const styles = StyleSheet.create({
    infos: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginVertical: 6.5,
        fontSize: 15,
        fontWeight: 'bold',
    },

    itemCard: {
        marginVertical: 5,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default TechnicienAdminView;
