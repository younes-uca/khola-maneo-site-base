package ma.maneo.khola.dao.facade.core.collaborateur;

import org.springframework.data.jpa.repository.Query;
import ma.maneo.khola.zynerator.repository.AbstractRepository;
import ma.maneo.khola.bean.core.collaborateur.Technicien;
import org.springframework.stereotype.Repository;
import ma.maneo.khola.bean.core.collaborateur.Technicien;
import java.util.List;


@Repository
public interface TechnicienDao extends AbstractRepository<Technicien,Long>  {
    Technicien findByPrenom(String prenom);
    int deleteByPrenom(String prenom);

    Technicien findByUsername(String username);

    @Query("SELECT NEW Technicien(item.id,item.nom) FROM Technicien item")
    List<Technicien> findAllOptimized();

}
