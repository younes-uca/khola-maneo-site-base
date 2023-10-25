package  ma.maneo.khola.ws.facade.admin.site;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.maneo.khola.bean.core.site.ModeAcces;
import ma.maneo.khola.dao.criteria.core.site.ModeAccesCriteria;
import ma.maneo.khola.service.facade.admin.site.ModeAccesAdminService;
import ma.maneo.khola.ws.converter.site.ModeAccesConverter;
import ma.maneo.khola.ws.dto.site.ModeAccesDto;
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
@RequestMapping("/api/admin/modeAcces/")
public class ModeAccesRestAdmin  extends AbstractController<ModeAcces, ModeAccesDto, ModeAccesCriteria, ModeAccesAdminService, ModeAccesConverter> {



    @Operation(summary = "upload one modeAcces")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple modeAccess")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all modeAccess")
    @GetMapping("")
    public ResponseEntity<List<ModeAccesDto>> findAll() throws Exception {
        return super.findAll();
    }

    @Operation(summary = "Finds an optimized list of all modeAccess")
    @GetMapping("optimized")
    public ResponseEntity<List<ModeAccesDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @Operation(summary = "Finds a modeAcces by id")
    @GetMapping("id/{id}")
    public ResponseEntity<ModeAccesDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @Operation(summary = "Saves the specified  modeAcces")
    @PostMapping("")
    public ResponseEntity<ModeAccesDto> save(@RequestBody ModeAccesDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  modeAcces")
    @PutMapping("")
    public ResponseEntity<ModeAccesDto> update(@RequestBody ModeAccesDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of modeAcces")
    @PostMapping("multiple")
    public ResponseEntity<List<ModeAccesDto>> delete(@RequestBody List<ModeAccesDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified modeAcces")
    @DeleteMapping("")
    public ResponseEntity<ModeAccesDto> delete(@RequestBody ModeAccesDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified modeAcces")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple modeAccess by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "Finds modeAccess by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<ModeAccesDto>> findByCriteria(@RequestBody ModeAccesCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated modeAccess by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody ModeAccesCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports modeAccess by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody ModeAccesCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets modeAcces data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody ModeAccesCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public ModeAccesRestAdmin (ModeAccesAdminService service, ModeAccesConverter converter) {
        super(service, converter);
    }




}
