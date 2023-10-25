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

import {TechnicienAdminService} from '../../../../../../controller/service/admin/collaborateur/TechnicienAdminService.service';
import  {TechnicienDto}  from '../../../../../../controller/model/collaborateur/Technicien.model';


type TechnicienUpdateScreenRouteProp = RouteProp<{ TechnicienUpdate: { technicien: TechnicienDto } }, 'TechnicienUpdate'>;

type Props = { route: TechnicienUpdateScreenRouteProp; };

const TechnicienAdminEdit: React.FC<Props> = ({ route }) => {

    const navigation = useNavigation<NavigationProp<any>>();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const { technicien } = route.params;



    const service = new TechnicienAdminService();


    const { control, handleSubmit } = useForm<TechnicienDto>({
        defaultValues: {
            id: technicien.id ,
            nom: technicien.nom ,
            prenom: technicien.prenom ,
            credentialsNonExpired: technicien.credentialsNonExpired ,
            enabled: technicien.enabled ,
            accountNonExpired: technicien.accountNonExpired ,
            accountNonLocked: technicien.accountNonLocked ,
            passwordChanged: technicien.passwordChanged ,
            username: technicien.username ,
            password: technicien.password ,
        },
    });





    useEffect(() => {
    }, []);



    const handleUpdate = async (item: TechnicienDto) => {
        Keyboard.dismiss();
        console.log('Data to be updated:', item);
        try {
            await service.update(item);
            navigation.navigate('Technicien');
        } catch (error) {
            console.error('Error saving technicien:', error);
            setShowErrorModal(true);
            setTimeout(() => setShowErrorModal(false), 1500);
        }
    };

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e6e8fa' }}>

        <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

            <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }} >Update Technicien</Text>

            <CustomInput control={control} name={'nom'} placeholder={'Nom'} keyboardT="default" />
            <CustomInput control={control} name={'prenom'} placeholder={'Prenom'} keyboardT="default" />
            <CustomInput control={control} name={'credentialsNonExpired'} placeholder={'Credentials non expired'} keyboardT="numeric" />
            <CustomInput control={control} name={'enabled'} placeholder={'Enabled'} keyboardT="numeric" />
            <CustomInput control={control} name={'accountNonExpired'} placeholder={'Account non expired'} keyboardT="numeric" />
            <CustomInput control={control} name={'accountNonLocked'} placeholder={'Account non locked'} keyboardT="numeric" />
            <CustomInput control={control} name={'passwordChanged'} placeholder={'Password changed'} keyboardT="numeric" />
            <CustomInput control={control} name={'username'} placeholder={'Username'} keyboardT="default" />
            <CustomInput control={control} name={'password'} placeholder={'Password'} keyboardT="default" />

            <CustomButton onPress={handleSubmit(handleUpdate)} text={"Update Technicien"} bgColor={'#ffa500'} fgColor={'white'} />

        </ScrollView>

        <SaveFeedbackModal isVisible={showErrorModal} icon={'close-sharp'} message={'Error on updating'} iconColor={'red'} />


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

export default TechnicienAdminEdit;
