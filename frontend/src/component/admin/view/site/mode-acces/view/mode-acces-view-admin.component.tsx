import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native-gesture-handler';

import  {ModeAccesDto}  from '../../../../../../controller/model/site/ModeAcces.model';

type ModeAccesViewScreenRouteProp = RouteProp<{ ModeAccesDetails: { modeAcces : ModeAccesDto } }, 'ModeAccesDetails'>;

type Props = { route: ModeAccesViewScreenRouteProp; };

const ModeAccesAdminView: React.FC<Props> = ({ route }) => {

    const { modeAcces } = route.params;
    const [isModeAccesCollapsed, setIsModeAccesCollapsed] = useState(false);



    const modeAccesCollapsible = () => {
        setIsModeAccesCollapsed(!isModeAccesCollapsed);
    };

return(
    <View style={{ padding: 20 }}>

        <ScrollView>

            <TouchableOpacity onPress={modeAccesCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Mode acces</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isModeAccesCollapsed}>

                <View style={styles.itemCard}>

                    <View>

                        <Text style={styles.infos}>Id: {modeAcces.id}</Text>
                        <Text style={styles.infos}>Libelle: {modeAcces.libelle}</Text>
                        <Text style={styles.infos}>Code: {modeAcces.code}</Text>

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

export default ModeAccesAdminView;
