import { ADMIN_URL } from '../../../../../config/AppConfig';
import AbstractService from "../../../../zynerator/service/AbstractService";

import {SiteImageDto} from '../../../model/site/SiteImage.model';
import {SiteImageCriteria} from '../../../criteria/site/SiteImageCriteria.model';

export class SiteImageAdminService extends AbstractService<SiteImageDto, SiteImageCriteria>{

    constructor() {
        super(ADMIN_URL , 'siteImage/');
    }

};
