package ma.maneo.khola.dao.facade.core.site;

import org.springframework.data.jpa.repository.Query;
import ma.maneo.khola.zynerator.repository.AbstractRepository;
import ma.maneo.khola.bean.core.site.SiteImage;
import org.springframework.stereotype.Repository;
import ma.maneo.khola.bean.core.site.SiteImage;
import java.util.List;


@Repository
public interface SiteImageDao extends AbstractRepository<SiteImage,Long>  {
    SiteImage findByFilePath(String filePath);
    int deleteByFilePath(String filePath);

    List<SiteImage> findBySiteId(Long id);
    int deleteBySiteId(Long id);
    long countBySiteG2r(String g2r);

    @Query("SELECT NEW SiteImage(item.id,item.fileName) FROM SiteImage item")
    List<SiteImage> findAllOptimized();

}
