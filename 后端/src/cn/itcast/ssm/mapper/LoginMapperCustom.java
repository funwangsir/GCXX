package cn.itcast.ssm.mapper;

import java.util.List;

import cn.itcast.ssm.po.AccountCustom;
import cn.itcast.ssm.po.AccountVo;

public interface LoginMapperCustom {

	public AccountCustom findlogin(AccountVo acountVo)throws Exception;

	
}
