package  ma.maneo.khola.ws.converter.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




import ma.maneo.khola.zynerator.util.StringUtil;
import ma.maneo.khola.zynerator.converter.AbstractConverter;
import ma.maneo.khola.zynerator.util.DateUtil;
import ma.maneo.khola.bean.core.site.ModeAcces;
import ma.maneo.khola.ws.dto.site.ModeAccesDto;

@Component
public class ModeAccesConverter extends AbstractConverter<ModeAcces, ModeAccesDto> {


    public  ModeAccesConverter(){
        super(ModeAcces.class, ModeAccesDto.class);
    }

    @Override
    public ModeAcces toItem(ModeAccesDto dto) {
        if (dto == null) {
            return null;
        } else {
        ModeAcces item = new ModeAcces();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());



        return item;
        }
    }

    @Override
    public ModeAccesDto toDto(ModeAcces item) {
        if (item == null) {
            return null;
        } else {
            ModeAccesDto dto = new ModeAccesDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
