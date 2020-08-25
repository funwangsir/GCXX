package cn.itcast.ssm.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import cn.itcast.ssm.po.AccountCustom;
import cn.itcast.ssm.po.AccountVo;
import cn.itcast.ssm.po.ItemCustom;
import cn.itcast.ssm.service.LoginService;

@CrossOrigin
@Controller
public class LoginController {

	@Autowired
	private LoginService loginService;

	@RequestMapping(value = "/Login", method = { RequestMethod.POST })
	public void queryItems(HttpServletRequest request,HttpServletResponse response) throws Exception {

		
		AccountVo accountVo = new AccountVo();
		AccountCustom accountCustom = new AccountCustom();
		accountCustom.setUser_id(request.getParameter("user_id"));
		accountCustom.setPassword(request.getParameter("password"));
		accountVo.setAccountCustom(accountCustom);
		System.out.println(request.getParameter("user_id"));

		if (accountCustom.getUser_id() != "" && accountCustom.getUser_id() != null
				&& accountCustom.getPassword() != null && accountCustom.getPassword() != "") {

			AccountCustom loginCustom = loginService.findlogin(accountVo);
			if (loginCustom != null) {
//				response.getOutputStream().write(accountCustom.getUser_id().getBytes("UTF-8"));
				response.getOutputStream().write("SUCCESS".getBytes("UTF-8"));
			}else {
				response.getOutputStream().write("FAIL".getBytes("UTF-8"));
			}
		}else {
			response.getOutputStream().write("请输入账号和密码".getBytes("UTF-8"));

		}


	}
}
