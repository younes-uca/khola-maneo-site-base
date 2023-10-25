import {BaseCriteria} from "../../../zynerator/criteria/BaseCriteria.model";





export class TechnicienCriteria  extends  BaseCriteria {

    public id: number;

    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public username: string;
    public usernameLike: string;
    public password: string;
    public passwordLike: string;

    constructor() {
        super();
        this.nom = '';
        this.nomLike = '';
        this.prenom = '';
        this.prenomLike = '';
        this.credentialsNonExpired = null;
        this.enabled = null;
        this.accountNonExpired = null;
        this.accountNonLocked = null;
        this.passwordChanged = null;
        this.username = '';
        this.usernameLike = '';
        this.password = '';
        this.passwordLike = '';
    }

}
