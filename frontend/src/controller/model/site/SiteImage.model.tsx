import {BaseDto} from "../../../zynerator/dto/BaseDto.model";

import {SiteDto} from '../site/Site.model';

export class SiteImageDto extends BaseDto{

    public fileName: string;

    public filePath: string;

    public description: string;

    public site: SiteDto ;


    constructor() {
        super();
        this.fileName = 'select a siteImage';
        this.filePath = '';
        this.description = '';
        this.site = new SiteDto() ;
        }

}
