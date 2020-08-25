package cn.itcast.ssm.service;

import java.util.List;

import cn.itcast.ssm.po.AccountCustom;
import cn.itcast.ssm.po.AccountVo;
import cn.itcast.ssm.po.Item;
import cn.itcast.ssm.po.ItemCustom;
import cn.itcast.ssm.po.ReceiveItemCustom;

public interface ItemService {

	public List<ItemCustom> findqueryItems(AccountVo accountVo)throws Exception;
	
	public void findInsertItems(Item item)throws Exception;

	public void findReceiveItems(ReceiveItemCustom receiveItemCustom)throws Exception;

}
