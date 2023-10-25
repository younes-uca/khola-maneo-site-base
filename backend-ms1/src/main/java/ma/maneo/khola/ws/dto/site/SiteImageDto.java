package  ma.maneo.khola.ws.dto.site;

import ma.maneo.khola.zynerator.audit.Log;
import ma.maneo.khola.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class SiteImageDto  extends AuditBaseDto {

    private String fileName  ;
    private String filePath  ;
    private String description  ;

    private SiteDto site ;



    public SiteImageDto(){
        super();
    }



    @Log
    public String getFileName(){
        return this.fileName;
    }
    public void setFileName(String fileName){
        this.fileName = fileName;
    }

    @Log
    public String getFilePath(){
        return this.filePath;
    }
    public void setFilePath(String filePath){
        this.filePath = filePath;
    }

    @Log
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }


    public SiteDto getSite(){
        return this.site;
    }

    public void setSite(SiteDto site){
        this.site = site;
    }






}
