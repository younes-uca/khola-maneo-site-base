import { View, Text, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ConfirmDeleteModal from '../../../../../../zynerator/ConfirmDeleteModal';
import { AxiosResponse } from 'axios';

import {SiteImageAdminService} from '../../../../../../controller/service/admin/site/SiteImageAdminService.service';
import  {SiteImageDto}  from '../../../../../../controller/model/site/SiteImage.model';
import SiteImageAdminCard from "../card/site-image-card-admin.component";


const SiteImageAdminList: React.FC = () =>  {

    const [siteImages, setSiteImages] = useState<SiteImageDto[]>([]);
    const navigation = useNavigation<NavigationProp<any>>();
    type SiteImageResponse = AxiosResponse<SiteImageDto[]>;
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [siteImageId, setSiteImageId] = useState(0);

    const service = new SiteImageAdminService();

    const handleDeletePress = (id: number) => {
        setSiteImageId(id);
        setIsDeleteModalVisible(true);
    };

    const handleCancelDelete = () => {
        setIsDeleteModalVisible(false);
    };

    const handleConfirmDelete = async () => {
        try {
            await service.delete(siteImageId);
            setSiteImages((prevSiteImages) => prevSiteImages.filter((siteImage) => siteImage.id !== siteImageId));
            setIsDeleteModalVisible(false);
        } catch (error) {
            console.error('Error deleting site image:', error);
            setIsDeleteModalVisible(false);
        }
    };

    const fetchData = async () => {
        try {
            const [siteImageResponse] = await Promise.all<SiteImageResponse>([
            service.getList(),
            ]);
            setSiteImages(siteImageResponse.data);
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
            const siteImageResponse = await service.find(id);
            const siteImageData = siteImageResponse.data;
            navigation.navigate('SiteImageUpdate', { siteImage: siteImageData });
        } catch (error) {
            console.error('Error fetching site image data:', error);
        }
    };

    const handleFetchAndDetails = async (id: number) => {
        try {
            const siteImageResponse = await service.find(id);
            const siteImageData = siteImageResponse.data;
            navigation.navigate('SiteImageDetails', { siteImage: siteImageData });
        } catch (error) {
            console.error('Error fetching site image data:', error);
        }
    };

return(
    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10, backgroundColor: '#e6e8fa' }}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginVertical: 10, }} >Site image List</Text>

        <View style={{ marginBottom: 100 }}>
            {siteImages && siteImages.length > 0 ? ( siteImages.map((siteImage) => (
                <SiteImageAdminCard key={siteImage.id}
                    siteName = {siteImage.site.nom}
                    fileName = {siteImage.fileName}
                    filePath = {siteImage.filePath}
                    description = {siteImage.description}
                    onPressDelete={() => handleDeletePress(siteImage.id)}
                    onUpdate={() => handleFetchAndUpdate(siteImage.id)}
                    onDetails={() => handleFetchAndDetails(siteImage.id)}
                />
                )) ) : (
                <Text style={{ fontSize: 20, textAlign: 'center', color: 'red', marginTop: 20 }}>No site images found.</Text>
            )}
        </View>

        <ConfirmDeleteModal isVisible={isDeleteModalVisible} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete} name={'SiteImage'} />

    </ScrollView>

);
};

export default SiteImageAdminList;
