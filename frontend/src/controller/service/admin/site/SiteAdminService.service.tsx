import { ADMIN_URL } from '../../../../../config/AppConfig';
import AbstractService from "../../../../zynerator/service/AbstractService";

import {SiteDto} from '../../../model/site/Site.model';
import {SiteCriteria} from '../../../criteria/site/SiteCriteria.model';

export class SiteAdminService extends AbstractService<SiteDto, SiteCriteria>{

    constructor() {
        super(ADMIN_URL , 'site/');
    }

};
