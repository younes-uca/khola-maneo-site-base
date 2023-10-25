import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../../../../zynerator/CustomInput';
import CustomButton from '../../../../../../zynerator/CustomButton';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import SaveFeedbackModal from '../../../../../../zynerator/SaveFeedbackModal';
import FilterModal from '../../../../../../zynerator/FilterModal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SiteImageAdminService} from '../../../../../../controller/service/admin/site/SiteImageAdminService.service';
import  {SiteImageDto}  from '../../../../../../controller/model/site/SiteImage.model';

import {SiteDto} from '../../../../../../controller/model/site/Site.model';
import {SiteAdminService} from '../../../../../../controller/service/admin/site/SiteAdminService.service';

type SiteImageUpdateScreenRouteProp = RouteProp<{ SiteImageUpdate: { siteImage: SiteImageDto } }, 'SiteImageUpdate'>;

type Props = { route: SiteImageUpdateScreenRouteProp; };

const SiteImageAdminEdit: React.FC<Props> = ({ route }) => {

    const navigation = useNavigation<NavigationProp<any>>();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const { siteImage } = route.params;


    const emptySite = new SiteDto();
    const [sites, setSites] = useState<SiteDto[]>([]);
    const [siteModalVisible, setSiteModalVisible] = useState(false);
    const [selectedSite, setSelectedSite] = useState<SiteDto>(emptySite);


    const service = new SiteImageAdminService();
    const siteAdminService = new SiteAdminService();


    const { control, handleSubmit } = useForm<SiteImageDto>({
        defaultValues: {
            id: siteImage.id ,
            fileName: siteImage.fileName ,
            filePath: siteImage.filePath ,
            description: siteImage.description ,
        },
    });



    const handleCloseSiteModal = () => {
        setSiteModalVisible(false);
    };

    const onSiteSelect = (item) => {
        console.log('Selected Item:', item);
        setSelectedSite(item);
        setSiteModalVisible(false);
    };


    useEffect(() => {
        siteAdminService.getList().then(({data}) => setSites(data)).catch(error => console.log(error));
    }, []);



    const handleUpdate = async (item: SiteImageDto) => {
        item.site = selectedSite;
        Keyboard.dismiss();
        console.log('Data to be updated:', item);
        try {
            await service.update(item);
            navigation.navigate('SiteImage');
        } catch (error) {
            console.error('Error saving site image:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e6e8fa' }}>

        <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

            <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }} >Update Site image</Text>


            <TouchableOpacity onPress={() => setSiteModalVisible(true)} style={styles.placeHolder} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>{selectedSite?.nom}</Text>
                    <Ionicons name="caret-down-outline" size={22} color={'black'} />
                </View>

            </TouchableOpacity>
            <CustomInput control={control} name={'fileName'} placeholder={'File name'} keyboardT="default" />
            <CustomInput control={control} name={'filePath'} placeholder={'File path'} keyboardT="default" />
            <CustomInput control={control} name={'description'} placeholder={'Description'} keyboardT="default" />

            <CustomButton onPress={handleSubmit(handleUpdate)} text={"Update Site image"} bgColor={'#ffa500'} fgColor={'white'} />

        </ScrollView>

        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on updating'} iconColor={'red'} />

        {sites &&
            <FilterModal visibility={siteModalVisible} placeholder={"Select a Site"} onItemSelect={onSiteSelect} items={sites} onClose={handleCloseSiteModal} variable={'nom'} />
        }

    </SafeAreaView>
);
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 15,
        marginTop: 15
    },

    input: {
        height: 50,
    },

    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
    },

    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    placeHolder: {
        backgroundColor: '#f5f5f5',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 15,
        padding: 15,
        marginTop: 15,
        marginBottom: 10,
    }

});

export default SiteImageAdminEdit;
