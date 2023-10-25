package  ma.maneo.khola.ws.converter.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ma.maneo.khola.zynerator.util.ListUtil;

import ma.maneo.khola.ws.converter.collaborateur.TechnicienConverter;
import ma.maneo.khola.ws.converter.site.SiteImageConverter;
import ma.maneo.khola.ws.converter.site.ModeAccesConverter;



import ma.maneo.khola.zynerator.util.StringUtil;
import ma.maneo.khola.zynerator.converter.AbstractConverter;
import ma.maneo.khola.zynerator.util.DateUtil;
import ma.maneo.khola.bean.core.site.Site;
import ma.maneo.khola.ws.dto.site.SiteDto;

@Component
public class SiteConverter extends AbstractConverter<Site, SiteDto> {

    @Autowired
    private TechnicienConverter technicienConverter ;
    @Autowired
    private SiteImageConverter siteImageConverter ;
    @Autowired
    private ModeAccesConverter modeAccesConverter ;
    private boolean technicien;
    private boolean modeAcces;
    private boolean siteImages;

    public  SiteConverter(){
        super(Site.class, SiteDto.class);
        init(true);
    }

    @Override
    public Site toItem(SiteDto dto) {
        if (dto == null) {
            return null;
        } else {
        Site item = new Site();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getG2r()))
                item.setG2r(dto.getG2r());
            if(StringUtil.isNotEmpty(dto.getNom()))
                item.setNom(dto.getNom());
            if(StringUtil.isNotEmpty(dto.getCommentaire()))
                item.setCommentaire(dto.getCommentaire());
            if(StringUtil.isNotEmpty(dto.getLatitude()))
                item.setLatitude(dto.getLatitude());
            if(StringUtil.isNotEmpty(dto.getLongitude()))
                item.setLongitude(dto.getLongitude());
            if(this.technicien && dto.getTechnicien()!=null &&  dto.getTechnicien().getId() != null)
                item.setTechnicien(technicienConverter.toItem(dto.getTechnicien())) ;

            if(this.modeAcces && dto.getModeAcces()!=null &&  dto.getModeAcces().getId() != null)
                item.setModeAcces(modeAccesConverter.toItem(dto.getModeAcces())) ;


            if(this.siteImages && ListUtil.isNotEmpty(dto.getSiteImages()))
                item.setSiteImages(siteImageConverter.toItem(dto.getSiteImages()));


        return item;
        }
    }

    @Override
    public SiteDto toDto(Site item) {
        if (item == null) {
            return null;
        } else {
            SiteDto dto = new SiteDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getG2r()))
                dto.setG2r(item.getG2r());
            if(StringUtil.isNotEmpty(item.getNom()))
                dto.setNom(item.getNom());
            if(StringUtil.isNotEmpty(item.getCommentaire()))
                dto.setCommentaire(item.getCommentaire());
            if(StringUtil.isNotEmpty(item.getLatitude()))
                dto.setLatitude(item.getLatitude());
            if(StringUtil.isNotEmpty(item.getLongitude()))
                dto.setLongitude(item.getLongitude());
        if(this.technicien && item.getTechnicien()!=null) {
            dto.setTechnicien(technicienConverter.toDto(item.getTechnicien())) ;
        }
        if(this.modeAcces && item.getModeAcces()!=null) {
            dto.setModeAcces(modeAccesConverter.toDto(item.getModeAcces())) ;
        }
        if(this.siteImages && ListUtil.isNotEmpty(item.getSiteImages())){
            siteImageConverter.init(true);
            siteImageConverter.setSite(false);
            dto.setSiteImages(siteImageConverter.toDto(item.getSiteImages()));
            siteImageConverter.setSite(true);

        }


        return dto;
        }
    }

    public void initList(boolean value) {
        this.siteImages = value;
    }

    public void initObject(boolean value) {
        this.technicien = value;
        this.modeAcces = value;
    }


    public TechnicienConverter getTechnicienConverter(){
        return this.technicienConverter;
    }
    public void setTechnicienConverter(TechnicienConverter technicienConverter ){
        this.technicienConverter = technicienConverter;
    }
    public SiteImageConverter getSiteImageConverter(){
        return this.siteImageConverter;
    }
    public void setSiteImageConverter(SiteImageConverter siteImageConverter ){
        this.siteImageConverter = siteImageConverter;
    }
    public ModeAccesConverter getModeAccesConverter(){
        return this.modeAccesConverter;
    }
    public void setModeAccesConverter(ModeAccesConverter modeAccesConverter ){
        this.modeAccesConverter = modeAccesConverter;
    }
    public boolean  isTechnicien(){
        return this.technicien;
    }
    public void  setTechnicien(boolean technicien){
        this.technicien = technicien;
    }
    public boolean  isModeAcces(){
        return this.modeAcces;
    }
    public void  setModeAcces(boolean modeAcces){
        this.modeAcces = modeAcces;
    }
    public boolean  isSiteImages(){
        return this.siteImages ;
    }
    public void  setSiteImages(boolean siteImages ){
        this.siteImages  = siteImages ;
    }
}
