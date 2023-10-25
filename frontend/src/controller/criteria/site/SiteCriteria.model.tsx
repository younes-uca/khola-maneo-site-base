import {BaseCriteria} from "../../../zynerator/criteria/BaseCriteria.model";


import {TechnicienCriteria} from '../collaborateur/TechnicienCriteria';
import {ModeAccesCriteria} from '../site/ModeAccesCriteria';



export class SiteCriteria  extends  BaseCriteria {

    public id: number;

    public g2r: string;
    public g2rLike: string;
    public nom: string;
    public nomLike: string;
    public commentaire: string;
    public commentaireLike: string;
     public latitude: null | number;
     public latitudeMin: null | number;
     public latitudeMax: null | number;
     public longitude: null | number;
     public longitudeMin: null | number;
     public longitudeMax: null | number;
  public technicien: TechnicienCriteria ;
  public techniciens: Array<TechnicienCriteria> ;
  public modeAcces: ModeAccesCriteria ;
  public modeAccess: Array<ModeAccesCriteria> ;
      public siteImages: Array<SiteImageCriteria>;

    constructor() {
        super();
        this.g2r = '';
        this.g2rLike = '';
        this.nom = '';
        this.nomLike = '';
        this.commentaire = '';
        this.commentaireLike = '';
        this.latitude = null;
        this.latitudeMin = null;
        this.latitudeMax = null;
        this.longitude = null;
        this.longitudeMin = null;
        this.longitudeMax = null;
        this.technicien = new TechnicienCriteria() ;
        this.techniciens = new Array<TechnicienCriteria>() ;
        this.modeAcces = new ModeAccesCriteria() ;
        this.modeAccess = new Array<ModeAccesCriteria>() ;
    }

}
