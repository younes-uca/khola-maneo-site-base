import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ModeAccesAdminView from "../../../../component/admin/view/site/mode-acces/view/mode-acces-view-admin.component";
import ModeAccesAdminList from "../../../../component/admin/view/site/mode-acces/list/mode-acces-list-admin.component";
import ModeAccesAdminEdit from "../../../../component/admin/view/site/mode-acces/edit/mode-acces-edit-admin.component";


const Stack = createNativeStackNavigator();

function StackModeAccesAdmin() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ModeAccesAdminList"
                component={ModeAccesAdminList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ModeAccesAdminUpdate"
                component={ModeAccesAdminEdit}
            />
            <Stack.Screen
                name="ModeAccesAdminDetails"
                component={ModeAccesAdminView}
            />
        </Stack.Navigator>
    );
}

export default StackModeAccesAdmin;
