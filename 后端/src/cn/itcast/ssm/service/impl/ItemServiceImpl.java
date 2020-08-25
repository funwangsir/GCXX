package cn.itcast.ssm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.itcast.ssm.mapper.ItemsMapperCustom;
import cn.itcast.ssm.mapper.LoginMapperCustom;
import cn.itcast.ssm.po.AccountCustom;
import cn.itcast.ssm.po.AccountVo;
import cn.itcast.ssm.po.Item;
import cn.itcast.ssm.po.ItemCustom;
import cn.itcast.ssm.po.ReceiveItemCustom;
import cn.itcast.ssm.service.ItemService;
import cn.itcast.ssm.service.LoginService;
import sun.util.logging.resources.logging;

@Service
public class ItemServiceImpl implements ItemService {

	@Autowired
	private ItemsMapperCustom itemsMapperCustom;
	//查询订单
	@Override
	public List<ItemCustom> findqueryItems(AccountVo accountVo) throws Exception {

		return itemsMapperCustom.findqueryItems(accountVo);
	}

	//下单
	@Override
	public void findInsertItems(Item item) throws Exception {
		itemsMapperCustom.findInsertItems(item);
	}

	//接单
	@Override
	public void findReceiveItems(ReceiveItemCustom receiveItemCustom) throws Exception {
		
		itemsMapperCustom.findReceiveItems(receiveItemCustom);
	}

}
