package  ma.maneo.khola.dao.specification.core.collaborateur;

import ma.maneo.khola.zynerator.specification.AbstractSpecification;
import ma.maneo.khola.dao.criteria.core.collaborateur.TechnicienCriteria;
import ma.maneo.khola.bean.core.collaborateur.Technicien;


public class TechnicienSpecification extends  AbstractSpecification<TechnicienCriteria, Technicien>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("nom", criteria.getNom(),criteria.getNomLike());
        addPredicate("prenom", criteria.getPrenom(),criteria.getPrenomLike());
        addPredicateBool("credentialsNonExpired", criteria.getCredentialsNonExpired());
        addPredicateBool("enabled", criteria.getEnabled());
        addPredicateBool("accountNonExpired", criteria.getAccountNonExpired());
        addPredicateBool("accountNonLocked", criteria.getAccountNonLocked());
        addPredicateBool("passwordChanged", criteria.getPasswordChanged());
        addPredicate("username", criteria.getUsername(),criteria.getUsernameLike());
        addPredicate("password", criteria.getPassword(),criteria.getPasswordLike());
    }

    public TechnicienSpecification(TechnicienCriteria criteria) {
        super(criteria);
    }

    public TechnicienSpecification(TechnicienCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
