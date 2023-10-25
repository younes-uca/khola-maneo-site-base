package ma.maneo.khola.dao.facade.core.site;

import org.springframework.data.jpa.repository.Query;
import ma.maneo.khola.zynerator.repository.AbstractRepository;
import ma.maneo.khola.bean.core.site.ModeAcces;
import org.springframework.stereotype.Repository;
import ma.maneo.khola.bean.core.site.ModeAcces;
import java.util.List;


@Repository
public interface ModeAccesDao extends AbstractRepository<ModeAcces,Long>  {
    ModeAcces findByCode(String code);
    int deleteByCode(String code);


    @Query("SELECT NEW ModeAcces(item.id,item.libelle) FROM ModeAcces item")
    List<ModeAcces> findAllOptimized();

}
