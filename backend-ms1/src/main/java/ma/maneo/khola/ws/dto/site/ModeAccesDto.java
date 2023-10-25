package  ma.maneo.khola.ws.dto.site;

import ma.maneo.khola.zynerator.audit.Log;
import ma.maneo.khola.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class ModeAccesDto  extends AuditBaseDto {

    private String libelle  ;
    private String code  ;




    public ModeAccesDto(){
        super();
    }



    @Log
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }

    @Log
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }








}
