package ma.maneo.khola.zynerator.service;

import ma.maneo.khola.zynerator.audit.AuditBusinessObjectEnhanced;
import ma.maneo.khola.zynerator.criteria.BaseCriteria;
import ma.maneo.khola.zynerator.repository.AbstractRepository;

public abstract class AbstractReferentielServiceImpl<T extends AuditBusinessObjectEnhanced, CRITERIA extends BaseCriteria, REPO extends AbstractRepository<T, Long>> extends AbstractServiceImpl<T, CRITERIA, REPO> {

    public AbstractReferentielServiceImpl(REPO dao) {
        super(dao);
    }

}
