package  ma.maneo.khola.dao.specification.core.site;

import ma.maneo.khola.zynerator.specification.AbstractSpecification;
import ma.maneo.khola.dao.criteria.core.site.ModeAccesCriteria;
import ma.maneo.khola.bean.core.site.ModeAcces;


public class ModeAccesSpecification extends  AbstractSpecification<ModeAccesCriteria, ModeAcces>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("libelle", criteria.getLibelle(),criteria.getLibelleLike());
        addPredicate("code", criteria.getCode(),criteria.getCodeLike());
    }

    public ModeAccesSpecification(ModeAccesCriteria criteria) {
        super(criteria);
    }

    public ModeAccesSpecification(ModeAccesCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
