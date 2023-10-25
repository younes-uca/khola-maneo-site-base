import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native-gesture-handler';

import  {SiteImageDto}  from '../../../../../../controller/model/site/SiteImage.model';

type SiteImageViewScreenRouteProp = RouteProp<{ SiteImageDetails: { siteImage : SiteImageDto } }, 'SiteImageDetails'>;

type Props = { route: SiteImageViewScreenRouteProp; };

const SiteImageAdminView: React.FC<Props> = ({ route }) => {

    const { siteImage } = route.params;
    const [isSiteImageCollapsed, setIsSiteImageCollapsed] = useState(false);



    const siteImageCollapsible = () => {
        setIsSiteImageCollapsed(!isSiteImageCollapsed);
    };

return(
    <View style={{ padding: 20 }}>

        <ScrollView>

            <TouchableOpacity onPress={siteImageCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Site image</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isSiteImageCollapsed}>

                <View style={styles.itemCard}>

                    <View>

                        <Text style={styles.infos}>Id: {siteImage.id}</Text>
                        <Text style={styles.infos}>Site: {siteImage?.site?.nom}</Text>
                        <Text style={styles.infos}>File name: {siteImage.fileName}</Text>
                        <Text style={styles.infos}>File path: {siteImage.filePath}</Text>
                        <Text style={styles.infos}>Description: {siteImage.description}</Text>

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

export default SiteImageAdminView;
