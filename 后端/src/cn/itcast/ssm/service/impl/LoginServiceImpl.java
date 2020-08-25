package cn.itcast.ssm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.itcast.ssm.mapper.ItemsMapperCustom;
import cn.itcast.ssm.mapper.LoginMapperCustom;
import cn.itcast.ssm.po.AccountCustom;
import cn.itcast.ssm.po.AccountVo;
import cn.itcast.ssm.po.ItemCustom;
import cn.itcast.ssm.service.ItemService;
import cn.itcast.ssm.service.LoginService;
import sun.util.logging.resources.logging;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	private LoginMapperCustom loginMapperCustom;

	@Override
	public AccountCustom findlogin(AccountVo acountVo) throws Exception {
		
		return loginMapperCustom.findlogin(acountVo);
	}



}
