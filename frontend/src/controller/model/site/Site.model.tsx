import {BaseDto} from "../../../zynerator/dto/BaseDto.model";

import {TechnicienDto} from '../collaborateur/Technicien.model';
import {ModeAccesDto} from '../site/ModeAcces.model';

export class SiteDto extends BaseDto{

    public g2r: string;

    public nom: string;

    public commentaire: string;

    public latitude: null | number;

    public longitude: null | number;

    public technicien: TechnicienDto ;
    public modeAcces: ModeAccesDto ;
     public siteImages: Array<SiteImageDto>;


    constructor() {
        super();
        this.g2r = '';
        this.nom = 'select a site';
        this.commentaire = '';
        this.latitude = null;
        this.longitude = null;
        this.technicien = new TechnicienDto() ;
        this.modeAcces = new ModeAccesDto() ;
        this.siteImages = new Array<SiteImageDto>();
        }

}
