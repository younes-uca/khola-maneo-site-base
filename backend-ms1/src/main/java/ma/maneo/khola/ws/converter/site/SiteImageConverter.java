package  ma.maneo.khola.ws.converter.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.maneo.khola.ws.converter.site.SiteConverter;

import ma.maneo.khola.bean.core.site.Site;


import ma.maneo.khola.zynerator.util.StringUtil;
import ma.maneo.khola.zynerator.converter.AbstractConverter;
import ma.maneo.khola.zynerator.util.DateUtil;
import ma.maneo.khola.bean.core.site.SiteImage;
import ma.maneo.khola.ws.dto.site.SiteImageDto;

@Component
public class SiteImageConverter extends AbstractConverter<SiteImage, SiteImageDto> {

    @Autowired
    private SiteConverter siteConverter ;
    private boolean site;

    public  SiteImageConverter(){
        super(SiteImage.class, SiteImageDto.class);
    }

    @Override
    public SiteImage toItem(SiteImageDto dto) {
        if (dto == null) {
            return null;
        } else {
        SiteImage item = new SiteImage();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getFileName()))
                item.setFileName(dto.getFileName());
            if(StringUtil.isNotEmpty(dto.getFilePath()))
                item.setFilePath(dto.getFilePath());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            if(dto.getSite() != null && dto.getSite().getId() != null){
                item.setSite(new Site());
                item.getSite().setId(dto.getSite().getId());
                item.getSite().setNom(dto.getSite().getNom());
            }




        return item;
        }
    }

    @Override
    public SiteImageDto toDto(SiteImage item) {
        if (item == null) {
            return null;
        } else {
            SiteImageDto dto = new SiteImageDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getFileName()))
                dto.setFileName(item.getFileName());
            if(StringUtil.isNotEmpty(item.getFilePath()))
                dto.setFilePath(item.getFilePath());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
        if(this.site && item.getSite()!=null) {
            dto.setSite(siteConverter.toDto(item.getSite())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.site = value;
    }


    public SiteConverter getSiteConverter(){
        return this.siteConverter;
    }
    public void setSiteConverter(SiteConverter siteConverter ){
        this.siteConverter = siteConverter;
    }
    public boolean  isSite(){
        return this.site;
    }
    public void  setSite(boolean site){
        this.site = site;
    }
}
