package ma.maneo.khola.service.facade.admin.collaborateur;

import java.util.List;
import ma.maneo.khola.bean.core.collaborateur.Technicien;
import ma.maneo.khola.dao.criteria.core.collaborateur.TechnicienCriteria;
import ma.maneo.khola.zynerator.service.IService;



public interface TechnicienAdminService extends  IService<Technicien,TechnicienCriteria>  {
    Technicien findByUsername(String username);
    boolean changePassword(String username, String newPassword);




}
