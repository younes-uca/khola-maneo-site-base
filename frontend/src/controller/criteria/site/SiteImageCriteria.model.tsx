import {BaseCriteria} from "../../../zynerator/criteria/BaseCriteria.model";


import {SiteCriteria} from '../site/SiteCriteria';



export class SiteImageCriteria  extends  BaseCriteria {

    public id: number;

    public fileName: string;
    public fileNameLike: string;
    public filePath: string;
    public filePathLike: string;
    public description: string;
    public descriptionLike: string;
  public site: SiteCriteria ;
  public sites: Array<SiteCriteria> ;

    constructor() {
        super();
        this.fileName = '';
        this.fileNameLike = '';
        this.filePath = '';
        this.filePathLike = '';
        this.description = '';
        this.descriptionLike = '';
        this.site = new SiteCriteria() ;
        this.sites = new Array<SiteCriteria>() ;
    }

}
