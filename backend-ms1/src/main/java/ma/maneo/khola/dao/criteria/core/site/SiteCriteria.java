package  ma.maneo.khola.dao.criteria.core.site;


import ma.maneo.khola.dao.criteria.core.collaborateur.TechnicienCriteria;

import ma.maneo.khola.zynerator.criteria.BaseCriteria;
import java.util.List;

public class SiteCriteria extends  BaseCriteria  {

    private String g2r;
    private String g2rLike;
    private String nom;
    private String nomLike;
    private String commentaire;
    private String commentaireLike;
    private String latitude;
    private String latitudeMin;
    private String latitudeMax;
    private String longitude;
    private String longitudeMin;
    private String longitudeMax;

    private TechnicienCriteria technicien ;
    private List<TechnicienCriteria> techniciens ;
    private ModeAccesCriteria modeAcces ;
    private List<ModeAccesCriteria> modeAccess ;


    public SiteCriteria(){}

    public String getG2r(){
        return this.g2r;
    }
    public void setG2r(String g2r){
        this.g2r = g2r;
    }
    public String getG2rLike(){
        return this.g2rLike;
    }
    public void setG2rLike(String g2rLike){
        this.g2rLike = g2rLike;
    }

    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }
    public String getNomLike(){
        return this.nomLike;
    }
    public void setNomLike(String nomLike){
        this.nomLike = nomLike;
    }

    public String getCommentaire(){
        return this.commentaire;
    }
    public void setCommentaire(String commentaire){
        this.commentaire = commentaire;
    }
    public String getCommentaireLike(){
        return this.commentaireLike;
    }
    public void setCommentaireLike(String commentaireLike){
        this.commentaireLike = commentaireLike;
    }

    public String getLatitude(){
        return this.latitude;
    }
    public void setLatitude(String latitude){
        this.latitude = latitude;
    }   
    public String getLatitudeMin(){
        return this.latitudeMin;
    }
    public void setLatitudeMin(String latitudeMin){
        this.latitudeMin = latitudeMin;
    }
    public String getLatitudeMax(){
        return this.latitudeMax;
    }
    public void setLatitudeMax(String latitudeMax){
        this.latitudeMax = latitudeMax;
    }
      
    public String getLongitude(){
        return this.longitude;
    }
    public void setLongitude(String longitude){
        this.longitude = longitude;
    }   
    public String getLongitudeMin(){
        return this.longitudeMin;
    }
    public void setLongitudeMin(String longitudeMin){
        this.longitudeMin = longitudeMin;
    }
    public String getLongitudeMax(){
        return this.longitudeMax;
    }
    public void setLongitudeMax(String longitudeMax){
        this.longitudeMax = longitudeMax;
    }
      

    public TechnicienCriteria getTechnicien(){
        return this.technicien;
    }

    public void setTechnicien(TechnicienCriteria technicien){
        this.technicien = technicien;
    }
    public List<TechnicienCriteria> getTechniciens(){
        return this.techniciens;
    }

    public void setTechniciens(List<TechnicienCriteria> techniciens){
        this.techniciens = techniciens;
    }
    public ModeAccesCriteria getModeAcces(){
        return this.modeAcces;
    }

    public void setModeAcces(ModeAccesCriteria modeAcces){
        this.modeAcces = modeAcces;
    }
    public List<ModeAccesCriteria> getModeAccess(){
        return this.modeAccess;
    }

    public void setModeAccess(List<ModeAccesCriteria> modeAccess){
        this.modeAccess = modeAccess;
    }
}
