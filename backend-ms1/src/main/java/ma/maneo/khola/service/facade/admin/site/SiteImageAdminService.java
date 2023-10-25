package ma.maneo.khola.service.facade.admin.site;

import java.util.List;
import ma.maneo.khola.bean.core.site.SiteImage;
import ma.maneo.khola.dao.criteria.core.site.SiteImageCriteria;
import ma.maneo.khola.zynerator.service.IService;



public interface SiteImageAdminService extends  IService<SiteImage,SiteImageCriteria>  {

    List<SiteImage> findBySiteId(Long id);
    int deleteBySiteId(Long id);
    long countBySiteG2r(String g2r);



}
