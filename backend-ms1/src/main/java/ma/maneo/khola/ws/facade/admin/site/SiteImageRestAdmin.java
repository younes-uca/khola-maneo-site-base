package  ma.maneo.khola.ws.facade.admin.site;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.maneo.khola.bean.core.site.SiteImage;
import ma.maneo.khola.dao.criteria.core.site.SiteImageCriteria;
import ma.maneo.khola.service.facade.admin.site.SiteImageAdminService;
import ma.maneo.khola.ws.converter.site.SiteImageConverter;
import ma.maneo.khola.ws.dto.site.SiteImageDto;
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
@RequestMapping("/api/admin/siteImage/")
public class SiteImageRestAdmin  extends AbstractController<SiteImage, SiteImageDto, SiteImageCriteria, SiteImageAdminService, SiteImageConverter> {



    @Operation(summary = "upload one siteImage")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple siteImages")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all siteImages")
    @GetMapping("")
    public ResponseEntity<List<SiteImageDto>> findAll() throws Exception {
        return super.findAll();
    }

    @Operation(summary = "Finds an optimized list of all siteImages")
    @GetMapping("optimized")
    public ResponseEntity<List<SiteImageDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @Operation(summary = "Finds a siteImage by id")
    @GetMapping("id/{id}")
    public ResponseEntity<SiteImageDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @Operation(summary = "Saves the specified  siteImage")
    @PostMapping("")
    public ResponseEntity<SiteImageDto> save(@RequestBody SiteImageDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  siteImage")
    @PutMapping("")
    public ResponseEntity<SiteImageDto> update(@RequestBody SiteImageDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of siteImage")
    @PostMapping("multiple")
    public ResponseEntity<List<SiteImageDto>> delete(@RequestBody List<SiteImageDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified siteImage")
    @DeleteMapping("")
    public ResponseEntity<SiteImageDto> delete(@RequestBody SiteImageDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified siteImage")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple siteImages by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by site id")
    @GetMapping("site/id/{id}")
    public List<SiteImageDto> findBySiteId(@PathVariable Long id){
        return findDtos(service.findBySiteId(id));
    }
    @Operation(summary = "delete by site id")
    @DeleteMapping("site/id/{id}")
    public int deleteBySiteId(@PathVariable Long id){
        return service.deleteBySiteId(id);
    }
    @Operation(summary = "Finds siteImages by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<SiteImageDto>> findByCriteria(@RequestBody SiteImageCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated siteImages by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody SiteImageCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports siteImages by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody SiteImageCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets siteImage data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody SiteImageCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public SiteImageRestAdmin (SiteImageAdminService service, SiteImageConverter converter) {
        super(service, converter);
    }




}
