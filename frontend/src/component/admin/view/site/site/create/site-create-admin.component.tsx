import { View, Text, StyleSheet, SafeAreaView, Keyboard, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../../../../zynerator/CustomInput';
import CustomButton from '../../../../../../zynerator/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';
import { AxiosResponse } from 'axios';
import SaveFeedbackModal from '../../../../../../zynerator/SaveFeedbackModal';
import Collapsible from 'react-native-collapsible';
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

const SiteAdminCreate = () => {

    const [showSavedModal, setShowSavedModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isSiteCollapsed, setIsSiteCollapsed] = useState(true);


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


    const { control, handleSubmit, reset } = useForm<SiteDto>({
        defaultValues: {
        g2r: '' ,
        nom: '' ,
        technicien: undefined,
        commentaire: '' ,
        modeAcces: undefined,
        latitude: null ,
        longitude: null ,
        },
    });

    const siteCollapsible = () => {
        setIsSiteCollapsed(!isSiteCollapsed);
    };

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


    const { control: itemControl, handleSubmit: handleItemSubmit, reset: resetItem } = useForm<SiteImageDto>({
        defaultValues: {
            site: undefined,
            fileName: '' ,
            filePath: '' ,
            description: '' ,
        },
    });

    const siteImagesElementCollapsible = () => {
        setIsSiteImagesElementCollapsed(!isSiteImagesElementCollapsed);
    };

    const siteImagesElementsCollapsible = () => {
        setIsSiteImagesElementsCollapsed(!isSiteImagesElementsCollapsed);
    };

    const handleAddSiteImages = (data: SiteImageDto) => {
        if (data) {
            const newSiteImage: SiteImageDto = { id: null  , site: undefined ,fileName: data.fileName ,filePath: data.filePath ,description: data.description , };
            setSiteImagesElements((prevItems) => [...prevItems, newSiteImage]);
            resetItem({fileName: '' ,filePath: '' ,description: '' ,});
        }
    };

    const handleDeleteSiteImages = (index) => {
        const updatedItems = siteImagesElements.filter((item, i) => i !== index);
        setSiteImagesElements(updatedItems);
    };

    const handleUpdateSiteImages = (data: SiteImageDto) => {
        if (data) {
            siteImagesElements.map((item, i) => {
                if (i === editIndexSiteImages) {
                    item.fileName = data.fileName;
                    item.filePath = data.filePath;
                    item.description = data.description;
                }
            });
            resetItem({fileName: '' ,filePath: '' ,description: '' ,});
            setIsEditModeSiteImages(false);
        }
        setIsSiteImagesElementCollapsed(!isSiteImagesElementCollapsed);
        setIsSiteImagesElementsCollapsed(!isSiteImagesElementsCollapsed);
    }

    const updateFormDefaultValuesSiteImages = (index: number) => {
        let updatedSiteImage: SiteImageDto;
        setEditIndexSiteImages(index);
        setIsEditModeSiteImages(true);
        siteImagesElements.map((item, i) => {
            if (i === index) {
                updatedSiteImage = item;
            }
        });
        resetItem({fileName: updatedSiteImage.fileName ,filePath: updatedSiteImage.filePath ,description: updatedSiteImage.description ,});
        setIsSiteImagesElementCollapsed(!isSiteImagesElementCollapsed);
        setIsSiteImagesElementsCollapsed(!isSiteImagesElementsCollapsed);
    };


    const handleSave = async (item: SiteDto) => {
        item.technicien = selectedTechnicien;
        item.modeAcces = selectedModeAcces;
        item.siteImages = siteImagesElements;
        Keyboard.dismiss();
        try {
            await service.save( item );
            reset();
            setSelectedTechnicien(emptyTechnicien);
            setSelectedModeAcces(emptyModeAcces);
            setShowSavedModal(true);
            setTimeout(() => setShowSavedModal(false), 1500);
            item.siteImages = siteImagesElements;
            setSiteImagesElements([]);
        } catch (error) {
            console.error('Error saving site:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e6e8fa' }} >
        <ScrollView style={{ margin: 20, marginBottom: 80 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" >
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }} >Create Site</Text>

            <TouchableOpacity onPress={siteCollapsible} style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Site</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isSiteCollapsed}>
                            <CustomInput control={control} name={'g2r'} placeholder={'G2r'} keyboardT="default" />
                            <CustomInput control={control} name={'nom'} placeholder={'Nom'} keyboardT="default" />
                        <TouchableOpacity onPress={() => setTechnicienModalVisible(true)} style={styles.placeHolder} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>{selectedTechnicien.nom}</Text>
                                <Ionicons name="caret-down-outline" size={22} color={'black'} />
                            </View>
                        </TouchableOpacity>
                            <CustomInput control={control} name={'commentaire'} placeholder={'Commentaire'} keyboardT="default" />
                        <TouchableOpacity onPress={() => setModeAccesModalVisible(true)} style={styles.placeHolder} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>{selectedModeAcces.libelle}</Text>
                                <Ionicons name="caret-down-outline" size={22} color={'black'} />
                            </View>
                        </TouchableOpacity>
            </Collapsible>
            <TouchableOpacity onPress={siteImagesElementCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Add Site images</Text>
            </TouchableOpacity>

            <Collapsible collapsed={isSiteImagesElementCollapsed}>
                            <CustomInput control={itemControl} name={'fileName'} placeholder={'File name'} keyboardT="default" />
                            <CustomInput control={itemControl} name={'filePath'} placeholder={'File path'} keyboardT="default" />
                            <CustomInput control={itemControl} name={'description'} placeholder={'Description'} keyboardT="default" />
                <TouchableOpacity onPress={ isEditSiteImagesMode ? handleItemSubmit((data) => { handleUpdateSiteImages(data); }) : handleItemSubmit(handleAddSiteImages) } style={{ backgroundColor: '#32cd32', borderRadius: 10, marginBottom: 5, width: '20%', paddingVertical: 10, marginLeft: '80%', marginTop: 10 }} >
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
                    {isEditModeSiteImages ? <Ionicons name="pencil-outline" size={25} color={'blue'} /> : '+' }
                    </Text>
                </TouchableOpacity>

            </Collapsible>
            <TouchableOpacity onPress={siteImagesElementsCollapsible} style={{ backgroundColor: '#ffd700', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>List Site images</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isSiteImagesElementsCollapsed}>
                { siteImages && siteImagesElements.length > 0 ? ( siteImagesElements.map((item, index) => (
                    <View key={index} style={styles.itemCard}>
                        <View>
                            <Text style={styles.infos}>'File name: {item.fileName}</Text>
                            <Text style={styles.infos}>'File path: {item.filePath}</Text>
                            <Text style={styles.infos}>'Description: {item.description}</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => handleDeleteSiteImages(index)}>
                                <Ionicons name="trash-outline" size={22} color={'red'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => updateFormDefaultValuesSiteImages(index)}>
                                <Ionicons name="pencil-outline" size={22} color={'blue'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )) ) : (
                    <View style={styles.itemCard}>
                        <Text style={styles.infos}>No site images yet.</Text>
                    </View>
                )}
            </Collapsible>
        <CustomButton onPress={handleSubmit(handleSave)} text={"Save Site"} bgColor={'#000080'} fgColor={'white'} />
        </ScrollView>
        <SaveFeedbackModal isVisible={showSavedModal} icon={'checkmark-done-sharp'} message={'saved successfully'} iconColor={'#32cd32'} />
        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on saving'} iconColor={'red'} />
        {techniciens !== null && techniciens.length > 0 ? ( <FilterModal visibility={technicienModalVisible} placeholder={"Select a Technicien"} onItemSelect={onTechnicienSelect} items={techniciens} onClose={handleCloseTechnicienModal} variable={'nom'} /> ) : null}
        {modeAccess !== null && modeAccess.length > 0 ? ( <FilterModal visibility={modeAccesModalVisible} placeholder={"Select a ModeAcces"} onItemSelect={onModeAccesSelect} items={modeAccess} onClose={handleCloseModeAccesModal} variable={'libelle'} /> ) : null}
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 7,
        //paddingHorizontal: 5,
        marginTop: 15,
        marginBottom: 10
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
        flexDirection: 'row'
    },

    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10
    },

    itemInput: {
        backgroundColor: '#f5f5f5',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 15,
        marginTop: 15,
        height: 50,
    },

    infos: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginVertical: 6.5,
        fontSize: 15,
        fontWeight: 'bold'
    },

    itemCard: {
        marginVertical: 5,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
});

export default SiteAdminCreate;
