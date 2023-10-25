import { View, Text, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ConfirmDeleteModal from '../../../../../../zynerator/ConfirmDeleteModal';
import { AxiosResponse } from 'axios';

import {SiteAdminService} from '../../../../../../controller/service/admin/site/SiteAdminService.service';
import  {SiteDto}  from '../../../../../../controller/model/site/Site.model';
import SiteAdminCard from "../card/site-card-admin.component";


const SiteAdminList: React.FC = () =>  {

    const [sites, setSites] = useState<SiteDto[]>([]);
    const navigation = useNavigation<NavigationProp<any>>();
    type SiteResponse = AxiosResponse<SiteDto[]>;
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [siteId, setSiteId] = useState(0);

    const service = new SiteAdminService();

    const handleDeletePress = (id: number) => {
        setSiteId(id);
        setIsDeleteModalVisible(true);
    };

    const handleCancelDelete = () => {
        setIsDeleteModalVisible(false);
    };

    const handleConfirmDelete = async () => {
        try {
            await service.delete(siteId);
            setSites((prevSites) => prevSites.filter((site) => site.id !== siteId));
            setIsDeleteModalVisible(false);
        } catch (error) {
            console.error('Error deleting site:', error);
            setIsDeleteModalVisible(false);
        }
    };

    const fetchData = async () => {
        try {
            const [siteResponse] = await Promise.all<SiteResponse>([
            service.getList(),
            ]);
            setSites(siteResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [])
    );

    const handleFetchAndUpdate = async (id: number) => {
        try {
            const siteResponse = await service.find(id);
            const siteData = siteResponse.data;
            navigation.navigate('SiteUpdate', { site: siteData });
        } catch (error) {
            console.error('Error fetching site data:', error);
        }
    };

    const handleFetchAndDetails = async (id: number) => {
        try {
            const siteResponse = await service.find(id);
            const siteData = siteResponse.data;
            navigation.navigate('SiteDetails', { site: siteData });
        } catch (error) {
            console.error('Error fetching site data:', error);
        }
    };

return(
    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10, backgroundColor: '#e6e8fa' }}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginVertical: 10, }} >Site List</Text>

        <View style={{ marginBottom: 100 }}>
            {sites && sites.length > 0 ? ( sites.map((site) => (
                <SiteAdminCard key={site.id}
                    g2r = {site.g2r}
                    nom = {site.nom}
                    technicienName = {site.technicien.nom}
                    commentaire = {site.commentaire}
                    modeAccesName = {site.modeAcces.libelle}
                    latitude = {site.latitude}
                    longitude = {site.longitude}
                    onPressDelete={() => handleDeletePress(site.id)}
                    onUpdate={() => handleFetchAndUpdate(site.id)}
                    onDetails={() => handleFetchAndDetails(site.id)}
                />
                )) ) : (
                <Text style={{ fontSize: 20, textAlign: 'center', color: 'red', marginTop: 20 }}>No sites found.</Text>
            )}
        </View>

        <ConfirmDeleteModal isVisible={isDeleteModalVisible} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete} name={'Site'} />

    </ScrollView>

);
};

export default SiteAdminList;
