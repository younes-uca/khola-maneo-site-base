import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TechnicienAdminView from "../../../../component/admin/view/collaborateur/technicien/view/technicien-view-admin.component";
import TechnicienAdminList from "../../../../component/admin/view/collaborateur/technicien/list/technicien-list-admin.component";
import TechnicienAdminEdit from "../../../../component/admin/view/collaborateur/technicien/edit/technicien-edit-admin.component";


const Stack = createNativeStackNavigator();

function StackTechnicienAdmin() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TechnicienAdminList"
                component={TechnicienAdminList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TechnicienAdminUpdate"
                component={TechnicienAdminEdit}
            />
            <Stack.Screen
                name="TechnicienAdminDetails"
                component={TechnicienAdminView}
            />
        </Stack.Navigator>
    );
}

export default StackTechnicienAdmin;
