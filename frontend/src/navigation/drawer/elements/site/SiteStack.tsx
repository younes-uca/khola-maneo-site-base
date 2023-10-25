import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SiteAdminView from "../../../../component/admin/view/site/site/view/site-view-admin.component";
import SiteAdminList from "../../../../component/admin/view/site/site/list/site-list-admin.component";
import SiteAdminEdit from "../../../../component/admin/view/site/site/edit/site-edit-admin.component";


const Stack = createNativeStackNavigator();

function StackSiteAdmin() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SiteAdminList"
                component={SiteAdminList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SiteAdminUpdate"
                component={SiteAdminEdit}
            />
            <Stack.Screen
                name="SiteAdminDetails"
                component={SiteAdminView}
            />
        </Stack.Navigator>
    );
}

export default StackSiteAdmin;
