import { View, Text, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ConfirmDeleteModal from '../../../../../../zynerator/ConfirmDeleteModal';
import { AxiosResponse } from 'axios';

import {ModeAccesAdminService} from '../../../../../../controller/service/admin/site/ModeAccesAdminService.service';
import  {ModeAccesDto}  from '../../../../../../controller/model/site/ModeAcces.model';
import ModeAccesAdminCard from "../card/mode-acces-card-admin.component";


const ModeAccesAdminList: React.FC = () =>  {

    const [modeAccess, setModeAccess] = useState<ModeAccesDto[]>([]);
    const navigation = useNavigation<NavigationProp<any>>();
    type ModeAccesResponse = AxiosResponse<ModeAccesDto[]>;
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [modeAccesId, setModeAccesId] = useState(0);

    const service = new ModeAccesAdminService();

    const handleDeletePress = (id: number) => {
        setModeAccesId(id);
        setIsDeleteModalVisible(true);
    };

    const handleCancelDelete = () => {
        setIsDeleteModalVisible(false);
    };

    const handleConfirmDelete = async () => {
        try {
            await service.delete(modeAccesId);
            setModeAccess((prevModeAccess) => prevModeAccess.filter((modeAcces) => modeAcces.id !== modeAccesId));
            setIsDeleteModalVisible(false);
        } catch (error) {
            console.error('Error deleting mode acces:', error);
            setIsDeleteModalVisible(false);
        }
    };

    const fetchData = async () => {
        try {
            const [modeAccesResponse] = await Promise.all<ModeAccesResponse>([
            service.getList(),
            ]);
            setModeAccess(modeAccesResponse.data);
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
            const modeAccesResponse = await service.find(id);
            const modeAccesData = modeAccesResponse.data;
            navigation.navigate('ModeAccesUpdate', { modeAcces: modeAccesData });
        } catch (error) {
            console.error('Error fetching mode acces data:', error);
        }
    };

    const handleFetchAndDetails = async (id: number) => {
        try {
            const modeAccesResponse = await service.find(id);
            const modeAccesData = modeAccesResponse.data;
            navigation.navigate('ModeAccesDetails', { modeAcces: modeAccesData });
        } catch (error) {
            console.error('Error fetching mode acces data:', error);
        }
    };

return(
    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10, backgroundColor: '#e6e8fa' }}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginVertical: 10, }} >Mode acces List</Text>

        <View style={{ marginBottom: 100 }}>
            {modeAccess && modeAccess.length > 0 ? ( modeAccess.map((modeAcces) => (
                <ModeAccesAdminCard key={modeAcces.id}
                    libelle = {modeAcces.libelle}
                    code = {modeAcces.code}
                    onPressDelete={() => handleDeletePress(modeAcces.id)}
                    onUpdate={() => handleFetchAndUpdate(modeAcces.id)}
                    onDetails={() => handleFetchAndDetails(modeAcces.id)}
                />
                )) ) : (
                <Text style={{ fontSize: 20, textAlign: 'center', color: 'red', marginTop: 20 }}>No mode access found.</Text>
            )}
        </View>

        <ConfirmDeleteModal isVisible={isDeleteModalVisible} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete} name={'ModeAcces'} />

    </ScrollView>

);
};

export default ModeAccesAdminList;
