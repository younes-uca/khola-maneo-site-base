package ma.maneo.khola;

import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import java.util.*;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import org.springframework.cache.annotation.EnableCaching;
import com.fasterxml.jackson.databind.SerializationFeature;


import ma.maneo.khola.zynerator.security.common.AuthoritiesConstants;
import ma.maneo.khola.zynerator.security.bean.User;
import ma.maneo.khola.zynerator.security.bean.Permission;
import ma.maneo.khola.zynerator.security.bean.Role;
import ma.maneo.khola.zynerator.security.service.facade.UserService;
import ma.maneo.khola.zynerator.security.service.facade.RoleService;

//import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableCaching
//@EnableElasticsearchRepositories("ma.maneo.khola.dao")
//@EnableFeignClients("ma.maneo.khola.required.facade")
public class KholaApplication {
    public static ConfigurableApplicationContext ctx;

    public static void main(String[] args) {
        ctx=SpringApplication.run(KholaApplication.class, args);
    }

    @Bean
    RestTemplate restTemplate(){
        return new RestTemplate();
    }

    @Bean
    ObjectMapper objectMapper(){
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }

    @Bean
    public CommandLineRunner demo(UserService userService, RoleService roleService) {
    return (args) -> {
        if(true){



    // Role admin

        User userForAdmin = new User("admin");

        Role roleForAdmin = new Role();
        roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
        List<Permission> permissionsForAdmin = new ArrayList<>();
        addPermissionForAdmin(permissionsForAdmin);
        roleForAdmin.setPermissions(permissionsForAdmin);
        if(userForAdmin.getRoles()==null)
            userForAdmin.setRoles(new ArrayList<>());

        userForAdmin.getRoles().add(roleForAdmin);
        userService.save(userForAdmin);
            }
        };
    }




    private static String fakeString(String attributeName, int i) {
        return attributeName + i;
    }

    private static Long fakeLong(String attributeName, int i) {
        return  10L * i;
    }
    private static Integer fakeInteger(String attributeName, int i) {
        return  10 * i;
    }

    private static Double fakeDouble(String attributeName, int i) {
        return 10D * i;
    }

    private static BigDecimal fakeBigDecimal(String attributeName, int i) {
        return  BigDecimal.valueOf(i*1L*10);
    }

    private static Boolean fakeBoolean(String attributeName, int i) {
        return i % 2 == 0 ? true : false;
    }
    private static LocalDateTime fakeLocalDateTime(String attributeName, int i) {
        return LocalDateTime.now().plusDays(i);
    }
    private static void addPermissionForAdmin(List<Permission> permissions){
        permissions.add(new Permission("SiteImage.edit"));
        permissions.add(new Permission("SiteImage.list"));
        permissions.add(new Permission("SiteImage.view"));
        permissions.add(new Permission("SiteImage.add"));
        permissions.add(new Permission("SiteImage.delete"));
        permissions.add(new Permission("ModeAcces.edit"));
        permissions.add(new Permission("ModeAcces.list"));
        permissions.add(new Permission("ModeAcces.view"));
        permissions.add(new Permission("ModeAcces.add"));
        permissions.add(new Permission("ModeAcces.delete"));
        permissions.add(new Permission("Site.edit"));
        permissions.add(new Permission("Site.list"));
        permissions.add(new Permission("Site.view"));
        permissions.add(new Permission("Site.add"));
        permissions.add(new Permission("Site.delete"));
        permissions.add(new Permission("Technicien.edit"));
        permissions.add(new Permission("Technicien.list"));
        permissions.add(new Permission("Technicien.view"));
        permissions.add(new Permission("Technicien.add"));
        permissions.add(new Permission("Technicien.delete"));
    }

}


