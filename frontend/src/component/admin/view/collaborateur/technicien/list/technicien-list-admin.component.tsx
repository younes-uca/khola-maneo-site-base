import { View, Text, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ConfirmDeleteModal from '../../../../../../zynerator/ConfirmDeleteModal';
import { AxiosResponse } from 'axios';

import {TechnicienAdminService} from '../../../../../../controller/service/admin/collaborateur/TechnicienAdminService.service';
import  {TechnicienDto}  from '../../../../../../controller/model/collaborateur/Technicien.model';
import TechnicienAdminCard from "../card/technicien-card-admin.component";


const TechnicienAdminList: React.FC = () =>  {

    const [techniciens, setTechniciens] = useState<TechnicienDto[]>([]);
    const navigation = useNavigation<NavigationProp<any>>();
    type TechnicienResponse = AxiosResponse<TechnicienDto[]>;
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [technicienId, setTechnicienId] = useState(0);

    const service = new TechnicienAdminService();

    const handleDeletePress = (id: number) => {
        setTechnicienId(id);
        setIsDeleteModalVisible(true);
    };

    const handleCancelDelete = () => {
        setIsDeleteModalVisible(false);
    };

    const handleConfirmDelete = async () => {
        try {
            await service.delete(technicienId);
            setTechniciens((prevTechniciens) => prevTechniciens.filter((technicien) => technicien.id !== technicienId));
            setIsDeleteModalVisible(false);
        } catch (error) {
            console.error('Error deleting technicien:', error);
            setIsDeleteModalVisible(false);
        }
    };

    const fetchData = async () => {
        try {
            const [technicienResponse] = await Promise.all<TechnicienResponse>([
            service.getList(),
            ]);
            setTechniciens(technicienResponse.data);
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
            const technicienResponse = await service.find(id);
            const technicienData = technicienResponse.data;
            navigation.navigate('TechnicienUpdate', { technicien: technicienData });
        } catch (error) {
            console.error('Error fetching technicien data:', error);
        }
    };

    const handleFetchAndDetails = async (id: number) => {
        try {
            const technicienResponse = await service.find(id);
            const technicienData = technicienResponse.data;
            navigation.navigate('TechnicienDetails', { technicien: technicienData });
        } catch (error) {
            console.error('Error fetching technicien data:', error);
        }
    };

return(
    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 10, backgroundColor: '#e6e8fa' }}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginVertical: 10, }} >Technicien List</Text>

        <View style={{ marginBottom: 100 }}>
            {techniciens && techniciens.length > 0 ? ( techniciens.map((technicien) => (
                <TechnicienAdminCard key={technicien.id}
                    nom = {technicien.nom}
                    prenom = {technicien.prenom}
                    credentialsNonExpired = {technicien.credentialsNonExpired}
                    enabled = {technicien.enabled}
                    accountNonExpired = {technicien.accountNonExpired}
                    accountNonLocked = {technicien.accountNonLocked}
                    passwordChanged = {technicien.passwordChanged}
                    username = {technicien.username}
                    password = {technicien.password}
                    onPressDelete={() => handleDeletePress(technicien.id)}
                    onUpdate={() => handleFetchAndUpdate(technicien.id)}
                    onDetails={() => handleFetchAndDetails(technicien.id)}
                />
                )) ) : (
                <Text style={{ fontSize: 20, textAlign: 'center', color: 'red', marginTop: 20 }}>No techniciens found.</Text>
            )}
        </View>

        <ConfirmDeleteModal isVisible={isDeleteModalVisible} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete} name={'Technicien'} />

    </ScrollView>

);
};

export default TechnicienAdminList;
