import { ADMIN_URL } from '../../../../../config/AppConfig';
import AbstractService from "../../../../zynerator/service/AbstractService";

import {TechnicienDto} from '../../../model/collaborateur/Technicien.model';
import {TechnicienCriteria} from '../../../criteria/collaborateur/TechnicienCriteria.model';

export class TechnicienAdminService extends AbstractService<TechnicienDto, TechnicienCriteria>{

    constructor() {
        super(ADMIN_URL , 'technicien/');
    }

};
