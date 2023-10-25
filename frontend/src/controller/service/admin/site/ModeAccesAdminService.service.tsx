import { ADMIN_URL } from '../../../../../config/AppConfig';
import AbstractService from "../../../../zynerator/service/AbstractService";

import {ModeAccesDto} from '../../../model/site/ModeAcces.model';
import {ModeAccesCriteria} from '../../../criteria/site/ModeAccesCriteria.model';

export class ModeAccesAdminService extends AbstractService<ModeAccesDto, ModeAccesCriteria>{

    constructor() {
        super(ADMIN_URL , 'modeAcces/');
    }

};
