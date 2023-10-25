package ma.maneo.khola.service.impl.admin.site;


import ma.maneo.khola.bean.core.site.ModeAcces;
import ma.maneo.khola.dao.criteria.core.site.ModeAccesCriteria;
import ma.maneo.khola.dao.facade.core.site.ModeAccesDao;
import ma.maneo.khola.dao.specification.core.site.ModeAccesSpecification;
import ma.maneo.khola.service.facade.admin.site.ModeAccesAdminService;
import ma.maneo.khola.zynerator.service.AbstractServiceImpl;
import ma.maneo.khola.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
@Service
public class ModeAccesAdminServiceImpl extends AbstractServiceImpl<ModeAcces, ModeAccesCriteria, ModeAccesDao> implements ModeAccesAdminService {





    public ModeAcces findByReferenceEntity(ModeAcces t){
        return  dao.findByCode(t.getCode());
    }







    public void configure() {
        super.configure(ModeAcces.class, ModeAccesSpecification.class);
    }



    public ModeAccesAdminServiceImpl(ModeAccesDao dao) {
        super(dao);
    }

}
