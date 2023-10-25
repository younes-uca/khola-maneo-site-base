package ma.maneo.khola.bean.core.site;

import java.util.Objects;







import com.fasterxml.jackson.annotation.JsonInclude;
import ma.maneo.khola.zynerator.audit.AuditBusinessObject;
import jakarta.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "mode_acces")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="mode_acces_seq",sequenceName="mode_acces_seq",allocationSize=1, initialValue = 1)
public class ModeAcces   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;



    public ModeAcces(){
        super();
    }

    public ModeAcces(Long id,String libelle){
        this.id = id;
        this.libelle = libelle ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy =  GenerationType.SEQUENCE,generator="mode_acces_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }

    @Transient
    public String getLabel() {
        label = libelle;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ModeAcces modeAcces = (ModeAcces) o;
        return id != null && id.equals(modeAcces.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

