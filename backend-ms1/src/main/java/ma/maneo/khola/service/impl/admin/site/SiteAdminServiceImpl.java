package ma.maneo.khola.service.impl.admin.site;


import ma.maneo.khola.bean.core.site.Site;
import ma.maneo.khola.dao.criteria.core.site.SiteCriteria;
import ma.maneo.khola.dao.facade.core.site.SiteDao;
import ma.maneo.khola.dao.specification.core.site.SiteSpecification;
import ma.maneo.khola.service.facade.admin.site.SiteAdminService;
import ma.maneo.khola.zynerator.service.AbstractServiceImpl;
import ma.maneo.khola.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.maneo.khola.service.facade.admin.collaborateur.TechnicienAdminService ;
import ma.maneo.khola.bean.core.collaborateur.Technicien ;
import ma.maneo.khola.service.facade.admin.site.SiteImageAdminService ;
import ma.maneo.khola.bean.core.site.SiteImage ;
import ma.maneo.khola.service.facade.admin.site.ModeAccesAdminService ;
import ma.maneo.khola.bean.core.site.ModeAcces ;

import java.util.List;
@Service
public class SiteAdminServiceImpl extends AbstractServiceImpl<Site, SiteCriteria, SiteDao> implements SiteAdminService {


    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public Site create(Site t) {
        super.create(t);
        if (t.getSiteImages() != null) {
                t.getSiteImages().forEach(element-> {
                    element.setSite(t);
                    siteImageService.create(element);
            });
        }
        return t;
    }

    public Site findWithAssociatedLists(Long id){
        Site result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setSiteImages(siteImageService.findBySiteId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        siteImageService.deleteBySiteId(id);
    }


    public void updateWithAssociatedLists(Site site){
    if(site !=null && site.getId() != null){
            List<List<SiteImage>> resultSiteImages= siteImageService.getToBeSavedAndToBeDeleted(siteImageService.findBySiteId(site.getId()),site.getSiteImages());
            siteImageService.delete(resultSiteImages.get(1));
            ListUtil.emptyIfNull(resultSiteImages.get(0)).forEach(e -> e.setSite(site));
            siteImageService.update(resultSiteImages.get(0),true);
    }
    }



    public Site findByReferenceEntity(Site t){
        return  dao.findByG2r(t.getG2r());
    }

    public List<Site> findByTechnicienId(Long id){
        return dao.findByTechnicienId(id);
    }
    public int deleteByTechnicienId(Long id){
        return dao.deleteByTechnicienId(id);
    }
    public long countByTechnicienPrenom(String prenom){
        return dao.countByTechnicienPrenom(prenom);
    }
    public List<Site> findByModeAccesId(Long id){
        return dao.findByModeAccesId(id);
    }
    public int deleteByModeAccesId(Long id){
        return dao.deleteByModeAccesId(id);
    }
    public long countByModeAccesCode(String code){
        return dao.countByModeAccesCode(code);
    }






    public void configure() {
        super.configure(Site.class, SiteSpecification.class);
    }


    @Autowired
    private TechnicienAdminService technicienService ;
    @Autowired
    private SiteImageAdminService siteImageService ;
    @Autowired
    private ModeAccesAdminService modeAccesService ;

    public SiteAdminServiceImpl(SiteDao dao) {
        super(dao);
    }

}
