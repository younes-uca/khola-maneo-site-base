import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
import { ScrollView } from 'react-native-gesture-handler';

import  {SiteDto}  from '../../../../../../controller/model/site/Site.model';

type SiteViewScreenRouteProp = RouteProp<{ SiteDetails: { site : SiteDto } }, 'SiteDetails'>;

type Props = { route: SiteViewScreenRouteProp; };

const SiteAdminView: React.FC<Props> = ({ route }) => {

    const { site } = route.params;
    const [isSiteCollapsed, setIsSiteCollapsed] = useState(false);

    const [isSiteImagesCollapsed, setIsSiteImagesCollapsed] = useState(true);

    const siteImagesCollapsible = () => {
        setIsSiteImagesCollapsed(!isSiteImagesCollapsed);
    };

    const siteCollapsible = () => {
        setIsSiteCollapsed(!isSiteCollapsed);
    };

return(
    <View style={{ padding: 20 }}>

        <ScrollView>

            <TouchableOpacity onPress={siteCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Site</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isSiteCollapsed}>

                <View style={styles.itemCard}>

                    <View>

                        <Text style={styles.infos}>Id: {site.id}</Text>
                        <Text style={styles.infos}>G2r: {site.g2r}</Text>
                        <Text style={styles.infos}>Nom: {site.nom}</Text>
                        <Text style={styles.infos}>Technicien: {site?.technicien?.nom}</Text>
                        <Text style={styles.infos}>Commentaire: {site.commentaire}</Text>
                        <Text style={styles.infos}>Mode acces: {site?.modeAcces?.libelle}</Text>
                        <Text style={styles.infos}>Latitude: {site.latitude}</Text>
                        <Text style={styles.infos}>Longitude: {site.longitude}</Text>

                    </View>

                </View>

            </Collapsible>

            <TouchableOpacity onPress={siteImagesCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Site images</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isSiteImagesCollapsed}>

                {site.siteImages && site.siteImages.length > 0 ? ( site.siteImages.map((item, index) => (
                    <View key={index} style={styles.itemCard}>
                        <View>
                            <Text style={styles.infos}>File name : {item.fileName}</Text>
                            <Text style={styles.infos}>File path : {item.filePath}</Text>
                            <Text style={styles.infos}>Description : {item.description}</Text>

                        </View>
                    </View>
                    )) ) : (
                    <View style={styles.itemCard}>
                        <Text style={styles.infos}>No site images</Text>
                    </View>
                )}

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

export default SiteAdminView;
