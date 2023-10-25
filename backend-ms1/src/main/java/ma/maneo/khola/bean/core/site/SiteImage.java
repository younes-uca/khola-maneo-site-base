package ma.maneo.khola.bean.core.site;

import java.util.Objects;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.maneo.khola.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "site_image")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="site_image_seq",sequenceName="site_image_seq",allocationSize=1, initialValue = 1)
public class SiteImage   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String fileName;
    @Column(length = 500)
    private String filePath;
    @Column(length = 500)
    private String description;

    private Site site ;


    public SiteImage(){
        super();
    }

    public SiteImage(Long id,String fileName){
        this.id = id;
        this.fileName = fileName ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="site_image_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Site getSite(){
        return this.site;
    }
    public void setSite(Site site){
        this.site = site;
    }
    public String getFileName(){
        return this.fileName;
    }
    public void setFileName(String fileName){
        this.fileName = fileName;
    }
    public String getFilePath(){
        return this.filePath;
    }
    public void setFilePath(String filePath){
        this.filePath = filePath;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }

    @Transient
    public String getLabel() {
        label = fileName;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SiteImage siteImage = (SiteImage) o;
        return id != null && id.equals(siteImage.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

