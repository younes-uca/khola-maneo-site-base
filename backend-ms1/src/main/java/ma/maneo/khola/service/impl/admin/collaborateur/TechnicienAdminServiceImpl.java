package ma.maneo.khola.service.impl.admin.collaborateur;


import ma.maneo.khola.bean.core.collaborateur.Technicien;
import ma.maneo.khola.dao.criteria.core.collaborateur.TechnicienCriteria;
import ma.maneo.khola.dao.facade.core.collaborateur.TechnicienDao;
import ma.maneo.khola.dao.specification.core.collaborateur.TechnicienSpecification;
import ma.maneo.khola.service.facade.admin.collaborateur.TechnicienAdminService;
import ma.maneo.khola.zynerator.service.AbstractServiceImpl;
import ma.maneo.khola.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;





import org.springframework.beans.factory.annotation.Autowired;


import ma.maneo.khola.zynerator.security.service.facade.UserService;
import ma.maneo.khola.zynerator.security.service.facade.RoleService;
import ma.maneo.khola.zynerator.security.bean.Role;
import java.util.Collection;
import java.util.List;
@Service
public class TechnicienAdminServiceImpl extends AbstractServiceImpl<Technicien, TechnicienCriteria, TechnicienDao> implements TechnicienAdminService {





    public Technicien findByReferenceEntity(Technicien t){
        return  dao.findByPrenom(t.getPrenom());
    }






    @Override
    public Technicien create(Technicien t) {
        if (findByUsername(t.getUsername()) != null || t.getPassword() == null) return null;
        t.setPassword(userService.cryptPassword(t.getPassword()));
        t.setEnabled(true);
        t.setAccountNonExpired(true);
        t.setAccountNonLocked(true);
        t.setCredentialsNonExpired(true);
        t.setPasswordChanged(false);
        if (t.getRoles() != null) {
            Collection<Role> roles = new ArrayList<Role>();
            for (Role role : t.getRoles()) {
                roles.add(roleService.save(role));
            }
            t.setRoles(roles);
        }
        Technicien mySaved = super.create(t);

        return mySaved;
     }

    public Technicien findByUsername(String username){
    return dao.findByUsername(username);
    }

    public boolean changePassword(String username, String newPassword) {
    return userService.changePassword(username, newPassword);
    }

    public void configure() {
        super.configure(Technicien.class, TechnicienSpecification.class);
    }

    @Autowired
    private UserService userService;


    @Autowired
    private RoleService roleService;


    public TechnicienAdminServiceImpl(TechnicienDao dao) {
        super(dao);
    }

}
