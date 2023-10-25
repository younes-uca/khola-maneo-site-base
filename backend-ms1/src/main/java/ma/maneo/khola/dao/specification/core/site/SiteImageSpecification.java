package  ma.maneo.khola.dao.specification.core.site;

import ma.maneo.khola.zynerator.specification.AbstractSpecification;
import ma.maneo.khola.dao.criteria.core.site.SiteImageCriteria;
import ma.maneo.khola.bean.core.site.SiteImage;


public class SiteImageSpecification extends  AbstractSpecification<SiteImageCriteria, SiteImage>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("fileName", criteria.getFileName(),criteria.getFileNameLike());
        addPredicate("filePath", criteria.getFilePath(),criteria.getFilePathLike());
        addPredicateFk("site","id", criteria.getSite()==null?null:criteria.getSite().getId());
        addPredicateFk("site","id", criteria.getSites());
        addPredicateFk("site","g2r", criteria.getSite()==null?null:criteria.getSite().getG2r());
    }

    public SiteImageSpecification(SiteImageCriteria criteria) {
        super(criteria);
    }

    public SiteImageSpecification(SiteImageCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
