package newtest.testpage.controller;

import ch.qos.logback.classic.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

import newtest.testpage.controller.User;



@RestController
public class home {
    @GetMapping("/")
    public String home(){

        return "home";
    }

    @GetMapping("/UserInfo")
    public User hello(){
        User user1 = new User();
        User user2 = new User();

        user1.setName("박준서");
        user2.setName("이주환");

        return user2;
    }
}
