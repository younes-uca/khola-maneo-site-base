import {BaseDto} from "../../../zynerator/dto/BaseDto.model";


export class ModeAccesDto extends BaseDto{

    public libelle: string;

    public code: string;



    constructor() {
        super();
        this.libelle = 'select a modeAcces';
        this.code = '';
        }

}
