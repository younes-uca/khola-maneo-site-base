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

import {SiteAdminService} from '../../../../../../controller/service/admin/site/SiteAdminService.service';
import  {SiteDto}  from '../../../../../../controller/model/site/Site.model';

import {TechnicienDto} from '../../../../../../controller/model/site/Technicien.model';
import {TechnicienAdminService} from '../../../../../../controller/service/admin/site/TechnicienAdminService.service';
import {SiteImageDto} from '../../../../../../controller/model/site/SiteImage.model';
import {SiteImageAdminService} from '../../../../../../controller/service/admin/site/SiteImageAdminService.service';
import {ModeAccesDto} from '../../../../../../controller/model/site/ModeAcces.model';
import {ModeAccesAdminService} from '../../../../../../controller/service/admin/site/ModeAccesAdminService.service';

type SiteUpdateScreenRouteProp = RouteProp<{ SiteUpdate: { site: SiteDto } }, 'SiteUpdate'>;

type Props = { route: SiteUpdateScreenRouteProp; };

const SiteAdminEdit: React.FC<Props> = ({ route }) => {

    const navigation = useNavigation<NavigationProp<any>>();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const { site } = route.params;


    const emptyTechnicien = new TechnicienDto();
    const [techniciens, setTechniciens] = useState<TechnicienDto[]>([]);
    const [technicienModalVisible, setTechnicienModalVisible] = useState(false);
    const [selectedTechnicien, setSelectedTechnicien] = useState<TechnicienDto>(emptyTechnicien);

    const emptyModeAcces = new ModeAccesDto();
    const [modeAccess, setModeAccess] = useState<ModeAccesDto[]>([]);
    const [modeAccesModalVisible, setModeAccesModalVisible] = useState(false);
    const [selectedModeAcces, setSelectedModeAcces] = useState<ModeAccesDto>(emptyModeAcces);


    const service = new SiteAdminService();
    const technicienAdminService = new TechnicienAdminService();
    const siteImageAdminService = new SiteImageAdminService();
    const modeAccesAdminService = new ModeAccesAdminService();

    const [siteImagesElements, setSiteImagesElements] = useState<SiteImageDto[]>([]);
    const [siteImages, setSiteImages] = useState<SiteImageDto>(new SiteImageDto());
    const [isEditModeSiteImages, setIsEditModeSiteImages] = useState(false);
    const [editIndexSiteImages, setEditIndexSiteImages] = useState(null);

    const [isSiteImagesElementCollapsed, setIsSiteImagesElementCollapsed] = useState(true);
    const [isSiteImagesElementsCollapsed, setIsSiteImagesElementsCollapsed] = useState(true);
    const [isSiteImages, setIsSiteImages] = useState(false);
    const [isEditSiteImagesMode, setIsEditSiteImagesMode] = useState(false);


    const { control, handleSubmit } = useForm<SiteDto>({
        defaultValues: {
            id: site.id ,
            g2r: site.g2r ,
            nom: site.nom ,
            commentaire: site.commentaire ,
            latitude: site.latitude ,
            longitude: site.longitude ,
        },
    });



    const handleCloseTechnicienModal = () => {
        setTechnicienModalVisible(false);
    };

    const onTechnicienSelect = (item) => {
        console.log('Selected Item:', item);
        setSelectedTechnicien(item);
        setTechnicienModalVisible(false);
    };
    const handleCloseModeAccesModal = () => {
        setModeAccesModalVisible(false);
    };

    const onModeAccesSelect = (item) => {
        console.log('Selected Item:', item);
        setSelectedModeAcces(item);
        setModeAccesModalVisible(false);
    };


    useEffect(() => {
        technicienAdminService.getList().then(({data}) => setTechniciens(data)).catch(error => console.log(error));
        modeAccesAdminService.getList().then(({data}) => setModeAccess(data)).catch(error => console.log(error));

    }, []);



    const handleUpdate = async (item: SiteDto) => {
        item.technicien = selectedTechnicien;
        item.modeAcces = selectedModeAcces;
        Keyboard.dismiss();
        console.log('Data to be updated:', item);
        try {
            await service.update(item);
            navigation.navigate('Site');
        } catch (error) {
            console.error('Error saving site:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e6e8fa' }}>

        <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

            <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }} >Update Site</Text>

            <CustomInput control={control} name={'g2r'} placeholder={'G2r'} keyboardT="default" />
            <CustomInput control={control} name={'nom'} placeholder={'Nom'} keyboardT="default" />

            <TouchableOpacity onPress={() => setTechnicienModalVisible(true)} style={styles.placeHolder} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>{selectedTechnicien?.nom}</Text>
                    <Ionicons name="caret-down-outline" size={22} color={'black'} />
                </View>

            </TouchableOpacity>
            <CustomInput control={control} name={'commentaire'} placeholder={'Commentaire'} keyboardT="default" />

            <TouchableOpacity onPress={() => setModeAccesModalVisible(true)} style={styles.placeHolder} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>{selectedModeAcces?.libelle}</Text>
                    <Ionicons name="caret-down-outline" size={22} color={'black'} />
                </View>

            </TouchableOpacity>

            <CustomButton onPress={handleSubmit(handleUpdate)} text={"Update Site"} bgColor={'#ffa500'} fgColor={'white'} />

        </ScrollView>

        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on updating'} iconColor={'red'} />

        {techniciens &&
            <FilterModal visibility={technicienModalVisible} placeholder={"Select a Technicien"} onItemSelect={onTechnicienSelect} items={techniciens} onClose={handleCloseTechnicienModal} variable={'nom'} />
        }
        {modeAccess &&
            <FilterModal visibility={modeAccesModalVisible} placeholder={"Select a ModeAcces"} onItemSelect={onModeAccesSelect} items={modeAccess} onClose={handleCloseModeAccesModal} variable={'libelle'} />
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

export default SiteAdminEdit;
