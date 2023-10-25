package  ma.maneo.khola.ws.facade.admin.site;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.maneo.khola.bean.core.site.Site;
import ma.maneo.khola.dao.criteria.core.site.SiteCriteria;
import ma.maneo.khola.service.facade.admin.site.SiteAdminService;
import ma.maneo.khola.ws.converter.site.SiteConverter;
import ma.maneo.khola.ws.dto.site.SiteDto;
import ma.maneo.khola.zynerator.controller.AbstractController;
import ma.maneo.khola.zynerator.dto.AuditEntityDto;
import ma.maneo.khola.zynerator.util.PaginatedList;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.maneo.khola.zynerator.process.Result;


import org.springframework.web.multipart.MultipartFile;
import ma.maneo.khola.zynerator.dto.FileTempDto;

@RestController
@RequestMapping("/api/admin/site/")
public class SiteRestAdmin  extends AbstractController<Site, SiteDto, SiteCriteria, SiteAdminService, SiteConverter> {



    @Operation(summary = "upload one site")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple sites")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all sites")
    @GetMapping("")
    public ResponseEntity<List<SiteDto>> findAll() throws Exception {
        return super.findAll();
    }

    @Operation(summary = "Finds an optimized list of all sites")
    @GetMapping("optimized")
    public ResponseEntity<List<SiteDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @Operation(summary = "Finds a site by id")
    @GetMapping("id/{id}")
    public ResponseEntity<SiteDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @Operation(summary = "Saves the specified  site")
    @PostMapping("")
    public ResponseEntity<SiteDto> save(@RequestBody SiteDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  site")
    @PutMapping("")
    public ResponseEntity<SiteDto> update(@RequestBody SiteDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of site")
    @PostMapping("multiple")
    public ResponseEntity<List<SiteDto>> delete(@RequestBody List<SiteDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified site")
    @DeleteMapping("")
    public ResponseEntity<SiteDto> delete(@RequestBody SiteDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified site")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple sites by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by technicien id")
    @GetMapping("technicien/id/{id}")
    public List<SiteDto> findByTechnicienId(@PathVariable Long id){
        return findDtos(service.findByTechnicienId(id));
    }
    @Operation(summary = "delete by technicien id")
    @DeleteMapping("technicien/id/{id}")
    public int deleteByTechnicienId(@PathVariable Long id){
        return service.deleteByTechnicienId(id);
    }
    @Operation(summary = "find by modeAcces id")
    @GetMapping("modeAcces/id/{id}")
    public List<SiteDto> findByModeAccesId(@PathVariable Long id){
        return findDtos(service.findByModeAccesId(id));
    }
    @Operation(summary = "delete by modeAcces id")
    @DeleteMapping("modeAcces/id/{id}")
    public int deleteByModeAccesId(@PathVariable Long id){
        return service.deleteByModeAccesId(id);
    }
    @Operation(summary = "Finds a site and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<SiteDto> findWithAssociatedLists(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @Operation(summary = "Finds sites by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<SiteDto>> findByCriteria(@RequestBody SiteCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated sites by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody SiteCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports sites by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody SiteCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets site data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody SiteCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public SiteRestAdmin (SiteAdminService service, SiteConverter converter) {
        super(service, converter);
    }




}
