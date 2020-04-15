package fy.com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @author fy
 * @date 2020/4/15 16:35
 */
@Controller
@RequestMapping("/view")
public class LoginController {


 @GetMapping("/login")
 public String toLogin(@RequestParam(required = false,defaultValue = "") String target, HttpSession session, @CookieValue(required = false,value = "TOKEN") Cookie cookie) throws IOException {
  return "login";
 }
}
