package ma.maneo.khola.dao.facade.core.site;

import org.springframework.data.jpa.repository.Query;
import ma.maneo.khola.zynerator.repository.AbstractRepository;
import ma.maneo.khola.bean.core.site.Site;
import org.springframework.stereotype.Repository;
import ma.maneo.khola.bean.core.site.Site;
import java.util.List;


@Repository
public interface SiteDao extends AbstractRepository<Site,Long>  {
    Site findByG2r(String g2r);
    int deleteByG2r(String g2r);

    List<Site> findByTechnicienId(Long id);
    int deleteByTechnicienId(Long id);
    long countByTechnicienPrenom(String prenom);
    List<Site> findByModeAccesId(Long id);
    int deleteByModeAccesId(Long id);
    long countByModeAccesCode(String code);

    @Query("SELECT NEW Site(item.id,item.nom) FROM Site item")
    List<Site> findAllOptimized();

}
