package  ma.maneo.khola.ws.converter.collaborateur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




import ma.maneo.khola.zynerator.util.StringUtil;
import ma.maneo.khola.zynerator.converter.AbstractConverter;
import ma.maneo.khola.zynerator.util.DateUtil;
import ma.maneo.khola.bean.core.collaborateur.Technicien;
import ma.maneo.khola.ws.dto.collaborateur.TechnicienDto;

@Component
public class TechnicienConverter extends AbstractConverter<Technicien, TechnicienDto> {


    public  TechnicienConverter(){
        super(Technicien.class, TechnicienDto.class);
    }

    @Override
    public Technicien toItem(TechnicienDto dto) {
        if (dto == null) {
            return null;
        } else {
        Technicien item = new Technicien();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getNom()))
                item.setNom(dto.getNom());
            if(StringUtil.isNotEmpty(dto.getPrenom()))
                item.setPrenom(dto.getPrenom());
            item.setCredentialsNonExpired(dto.getCredentialsNonExpired());
            item.setEnabled(dto.getEnabled());
            item.setAccountNonExpired(dto.getAccountNonExpired());
            item.setAccountNonLocked(dto.getAccountNonLocked());
            item.setPasswordChanged(dto.getPasswordChanged());
            if(StringUtil.isNotEmpty(dto.getUsername()))
                item.setUsername(dto.getUsername());
            if(StringUtil.isNotEmpty(dto.getPassword()))
                item.setPassword(dto.getPassword());


            item.setRoles(dto.getRoles());

        return item;
        }
    }

    @Override
    public TechnicienDto toDto(Technicien item) {
        if (item == null) {
            return null;
        } else {
            TechnicienDto dto = new TechnicienDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getNom()))
                dto.setNom(item.getNom());
            if(StringUtil.isNotEmpty(item.getPrenom()))
                dto.setPrenom(item.getPrenom());
            if(StringUtil.isNotEmpty(item.getCredentialsNonExpired()))
                dto.setCredentialsNonExpired(item.getCredentialsNonExpired());
            if(StringUtil.isNotEmpty(item.getEnabled()))
                dto.setEnabled(item.getEnabled());
            if(StringUtil.isNotEmpty(item.getAccountNonExpired()))
                dto.setAccountNonExpired(item.getAccountNonExpired());
            if(StringUtil.isNotEmpty(item.getAccountNonLocked()))
                dto.setAccountNonLocked(item.getAccountNonLocked());
            if(StringUtil.isNotEmpty(item.getPasswordChanged()))
                dto.setPasswordChanged(item.getPasswordChanged());
            if(StringUtil.isNotEmpty(item.getUsername()))
                dto.setUsername(item.getUsername());
            if(StringUtil.isNotEmpty(item.getPassword()))
                dto.setPassword(item.getPassword());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
