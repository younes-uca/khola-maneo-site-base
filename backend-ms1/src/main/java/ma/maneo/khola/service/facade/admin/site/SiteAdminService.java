package ma.maneo.khola.service.facade.admin.site;

import java.util.List;
import ma.maneo.khola.bean.core.site.Site;
import ma.maneo.khola.dao.criteria.core.site.SiteCriteria;
import ma.maneo.khola.zynerator.service.IService;



public interface SiteAdminService extends  IService<Site,SiteCriteria>  {

    List<Site> findByTechnicienId(Long id);
    int deleteByTechnicienId(Long id);
    long countByTechnicienPrenom(String prenom);
    List<Site> findByModeAccesId(Long id);
    int deleteByModeAccesId(Long id);
    long countByModeAccesCode(String code);



}
