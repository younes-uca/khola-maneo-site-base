package  ma.maneo.khola.dao.specification.core.site;

import ma.maneo.khola.zynerator.specification.AbstractSpecification;
import ma.maneo.khola.dao.criteria.core.site.SiteCriteria;
import ma.maneo.khola.bean.core.site.Site;


public class SiteSpecification extends  AbstractSpecification<SiteCriteria, Site>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("g2r", criteria.getG2r(),criteria.getG2rLike());
        addPredicate("nom", criteria.getNom(),criteria.getNomLike());
        addPredicateBigDecimal("latitude", criteria.getLatitude(), criteria.getLatitudeMin(), criteria.getLatitudeMax());
        addPredicateBigDecimal("longitude", criteria.getLongitude(), criteria.getLongitudeMin(), criteria.getLongitudeMax());
        addPredicateFk("technicien","id", criteria.getTechnicien()==null?null:criteria.getTechnicien().getId());
        addPredicateFk("technicien","id", criteria.getTechniciens());
        addPredicateFk("technicien","prenom", criteria.getTechnicien()==null?null:criteria.getTechnicien().getPrenom());
        addPredicateFk("modeAcces","id", criteria.getModeAcces()==null?null:criteria.getModeAcces().getId());
        addPredicateFk("modeAcces","id", criteria.getModeAccess());
        addPredicateFk("modeAcces","code", criteria.getModeAcces()==null?null:criteria.getModeAcces().getCode());
    }

    public SiteSpecification(SiteCriteria criteria) {
        super(criteria);
    }

    public SiteSpecification(SiteCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
