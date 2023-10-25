package  ma.maneo.khola.ws.dto.site;

import ma.maneo.khola.zynerator.audit.Log;
import ma.maneo.khola.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;
import java.math.BigDecimal;


import ma.maneo.khola.ws.dto.collaborateur.TechnicienDto;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class SiteDto  extends AuditBaseDto {

    private String g2r  ;
    private String nom  ;
    private String commentaire  ;
    private BigDecimal latitude  ;
    private BigDecimal longitude  ;

    private TechnicienDto technicien ;
    private ModeAccesDto modeAcces ;

    private List<SiteImageDto> siteImages ;


    public SiteDto(){
        super();
    }



    @Log
    public String getG2r(){
        return this.g2r;
    }
    public void setG2r(String g2r){
        this.g2r = g2r;
    }

    @Log
    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }

    @Log
    public String getCommentaire(){
        return this.commentaire;
    }
    public void setCommentaire(String commentaire){
        this.commentaire = commentaire;
    }

    @Log
    public BigDecimal getLatitude(){
        return this.latitude;
    }
    public void setLatitude(BigDecimal latitude){
        this.latitude = latitude;
    }

    @Log
    public BigDecimal getLongitude(){
        return this.longitude;
    }
    public void setLongitude(BigDecimal longitude){
        this.longitude = longitude;
    }


    public TechnicienDto getTechnicien(){
        return this.technicien;
    }

    public void setTechnicien(TechnicienDto technicien){
        this.technicien = technicien;
    }
    public ModeAccesDto getModeAcces(){
        return this.modeAcces;
    }

    public void setModeAcces(ModeAccesDto modeAcces){
        this.modeAcces = modeAcces;
    }



    public List<SiteImageDto> getSiteImages(){
        return this.siteImages;
    }

    public void setSiteImages(List<SiteImageDto> siteImages){
        this.siteImages = siteImages;
    }



}
