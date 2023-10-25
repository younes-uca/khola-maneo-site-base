import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SiteImageAdminView from "../../../../component/admin/view/site/site-image/view/site-image-view-admin.component";
import SiteImageAdminList from "../../../../component/admin/view/site/site-image/list/site-image-list-admin.component";
import SiteImageAdminEdit from "../../../../component/admin/view/site/site-image/edit/site-image-edit-admin.component";


const Stack = createNativeStackNavigator();

function StackSiteImageAdmin() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SiteImageAdminList"
                component={SiteImageAdminList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SiteImageAdminUpdate"
                component={SiteImageAdminEdit}
            />
            <Stack.Screen
                name="SiteImageAdminDetails"
                component={SiteImageAdminView}
            />
        </Stack.Navigator>
    );
}

export default StackSiteImageAdmin;
