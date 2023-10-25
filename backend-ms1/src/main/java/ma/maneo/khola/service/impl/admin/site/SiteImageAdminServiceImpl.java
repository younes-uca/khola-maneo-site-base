package ma.maneo.khola.service.impl.admin.site;


import ma.maneo.khola.bean.core.site.SiteImage;
import ma.maneo.khola.dao.criteria.core.site.SiteImageCriteria;
import ma.maneo.khola.dao.facade.core.site.SiteImageDao;
import ma.maneo.khola.dao.specification.core.site.SiteImageSpecification;
import ma.maneo.khola.service.facade.admin.site.SiteImageAdminService;
import ma.maneo.khola.zynerator.service.AbstractServiceImpl;
import ma.maneo.khola.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;

import ma.maneo.khola.service.facade.admin.site.SiteAdminService ;
import ma.maneo.khola.bean.core.site.Site ;

import java.util.List;
@Service
public class SiteImageAdminServiceImpl extends AbstractServiceImpl<SiteImage, SiteImageCriteria, SiteImageDao> implements SiteImageAdminService {





    public SiteImage findByReferenceEntity(SiteImage t){
        return  dao.findByFilePath(t.getFilePath());
    }

    public List<SiteImage> findBySiteId(Long id){
        return dao.findBySiteId(id);
    }
    public int deleteBySiteId(Long id){
        return dao.deleteBySiteId(id);
    }
    public long countBySiteG2r(String g2r){
        return dao.countBySiteG2r(g2r);
    }






    public void configure() {
        super.configure(SiteImage.class, SiteImageSpecification.class);
    }


    @Autowired
    private SiteAdminService siteService ;

    public SiteImageAdminServiceImpl(SiteImageDao dao) {
        super(dao);
    }

}
