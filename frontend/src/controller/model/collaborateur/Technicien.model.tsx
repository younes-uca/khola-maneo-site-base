import {BaseDto} from "../../../zynerator/dto/BaseDto.model";


export class TechnicienDto extends BaseDto{

    public nom: string;

    public prenom: string;

   public credentialsNonExpired: boolean;

   public enabled: boolean;

   public accountNonExpired: boolean;

   public accountNonLocked: boolean;

   public passwordChanged: boolean;

    public username: string;

    public password: string;



    constructor() {
        super();
        this.nom = 'select a technicien';
        this.prenom = '';
        this.credentialsNonExpired = null;
        this.enabled = null;
        this.accountNonExpired = null;
        this.accountNonLocked = null;
        this.passwordChanged = null;
        this.username = '';
        this.password = '';
        }

}
