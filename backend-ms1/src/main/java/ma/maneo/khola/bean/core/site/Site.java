package ma.maneo.khola.bean.core.site;

import java.util.Objects;
import java.util.List;





import ma.maneo.khola.bean.core.collaborateur.Technicien;


import com.fasterxml.jackson.annotation.JsonInclude;
import ma.maneo.khola.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "site")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="site_seq",sequenceName="site_seq",allocationSize=1, initialValue = 1)
public class Site   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String g2r;
    @Column(length = 500)
    private String nom;
    @Column(length = 500)
    private String commentaire;
    private BigDecimal latitude = BigDecimal.ZERO;
    private BigDecimal longitude = BigDecimal.ZERO;

    private Technicien technicien ;
    private ModeAcces modeAcces ;

    private List<SiteImage> siteImages ;

    public Site(){
        super();
    }

    public Site(Long id,String nom){
        this.id = id;
        this.nom = nom ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="site_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getG2r(){
        return this.g2r;
    }
    public void setG2r(String g2r){
        this.g2r = g2r;
    }
    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Technicien getTechnicien(){
        return this.technicien;
    }
    public void setTechnicien(Technicien technicien){
        this.technicien = technicien;
    }
    public String getCommentaire(){
        return this.commentaire;
    }
    public void setCommentaire(String commentaire){
        this.commentaire = commentaire;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public ModeAcces getModeAcces(){
        return this.modeAcces;
    }
    public void setModeAcces(ModeAcces modeAcces){
        this.modeAcces = modeAcces;
    }
    public BigDecimal getLatitude(){
        return this.latitude;
    }
    public void setLatitude(BigDecimal latitude){
        this.latitude = latitude;
    }
    public BigDecimal getLongitude(){
        return this.longitude;
    }
    public void setLongitude(BigDecimal longitude){
        this.longitude = longitude;
    }
    @OneToMany(mappedBy = "site")

    public List<SiteImage> getSiteImages(){
        return this.siteImages;
    }
    public void setSiteImages(List<SiteImage> siteImages){
        this.siteImages = siteImages;
    }

    @Transient
    public String getLabel() {
        label = nom;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Site site = (Site) o;
        return id != null && id.equals(site.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

