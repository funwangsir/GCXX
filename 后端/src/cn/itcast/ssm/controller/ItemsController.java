package cn.itcast.ssm.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import cn.itcast.ssm.po.AccountCustom;
import cn.itcast.ssm.po.AccountVo;
import cn.itcast.ssm.po.Item;
import cn.itcast.ssm.po.ItemCustom;
import cn.itcast.ssm.po.ReceiveItemCustom;
import cn.itcast.ssm.service.ItemService;
import cn.itcast.ssm.service.LoginService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@CrossOrigin
@Controller
@RequestMapping("/Items")
public class ItemsController {

	@Autowired
	private ItemService itemService;

	@RequestMapping(value = "/queryItems" ,method={RequestMethod.POST,RequestMethod.GET})
	public void queryItems(HttpServletRequest request,HttpServletResponse response) throws Exception {
		AccountVo accountVo = new AccountVo();
		ItemCustom itemCustom = new ItemCustom();
		
		itemCustom.setFlag(request.getParameter("flag"));
		accountVo.setItemCustom(itemCustom);

		List<ItemCustom> itemsList = itemService.findqueryItems(accountVo);

		JSONArray jsonArray = new JSONArray();
		for (int i = 0; i < itemsList.size(); i++) {

			ItemCustom item = itemsList.get(i);
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("user_id", item.getUser_id());
			jsonObject.put("title", item.getTitle());
			jsonObject.put("content", item.getContent());
			jsonObject.put("phone", item.getPhone());
			jsonObject.put("address", item.getAddress());
			jsonObject.put("money", item.getMoeny());
			jsonObject.put("state", item.getState());
			jsonObject.put("date", item.getDate());

			jsonArray.add(jsonObject);
		}
		
		response.getOutputStream().write(jsonArray.toString().getBytes("UTF-8"));

	}

	@RequestMapping(value = "/insertItems")
	public void insertItems(Item item,HttpServletResponse response) throws Exception {

//		Item item = new Item();
//		item.setUser_id(user_id);
//		item.setTitle(title);
//		item.setContent(content);
//		item.setPhone(phone);
//		item.setAddress(address);
//		item.setFlag(flag);
//		item.setState(state);

		itemService.findInsertItems(item);
		response.getOutputStream().write(item.getId());


	}

	@RequestMapping(value = "/receiveItems")
	public String receiveItems(String user_id, String item_id, String receivedate) throws Exception {

		ReceiveItemCustom receiveItemCustom = new ReceiveItemCustom();
		receiveItemCustom.setUser_id(user_id);
		receiveItemCustom.setItem_id(item_id);
		receiveItemCustom.setReceivedate(receivedate);

		itemService.findReceiveItems(receiveItemCustom);

		return "SUCCESS";

	}

}
