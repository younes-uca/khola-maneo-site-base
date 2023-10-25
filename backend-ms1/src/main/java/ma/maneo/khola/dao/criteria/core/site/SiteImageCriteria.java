package  ma.maneo.khola.dao.criteria.core.site;



import ma.maneo.khola.zynerator.criteria.BaseCriteria;
import java.util.List;

public class SiteImageCriteria extends  BaseCriteria  {

    private String fileName;
    private String fileNameLike;
    private String filePath;
    private String filePathLike;
    private String description;
    private String descriptionLike;

    private SiteCriteria site ;
    private List<SiteCriteria> sites ;


    public SiteImageCriteria(){}

    public String getFileName(){
        return this.fileName;
    }
    public void setFileName(String fileName){
        this.fileName = fileName;
    }
    public String getFileNameLike(){
        return this.fileNameLike;
    }
    public void setFileNameLike(String fileNameLike){
        this.fileNameLike = fileNameLike;
    }

    public String getFilePath(){
        return this.filePath;
    }
    public void setFilePath(String filePath){
        this.filePath = filePath;
    }
    public String getFilePathLike(){
        return this.filePathLike;
    }
    public void setFilePathLike(String filePathLike){
        this.filePathLike = filePathLike;
    }

    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public String getDescriptionLike(){
        return this.descriptionLike;
    }
    public void setDescriptionLike(String descriptionLike){
        this.descriptionLike = descriptionLike;
    }


    public SiteCriteria getSite(){
        return this.site;
    }

    public void setSite(SiteCriteria site){
        this.site = site;
    }
    public List<SiteCriteria> getSites(){
        return this.sites;
    }

    public void setSites(List<SiteCriteria> sites){
        this.sites = sites;
    }
}
