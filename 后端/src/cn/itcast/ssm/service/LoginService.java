package cn.itcast.ssm.service;

import java.util.List;

import cn.itcast.ssm.po.AccountCustom;
import cn.itcast.ssm.po.AccountVo;

public interface LoginService {

	public AccountCustom findlogin(AccountVo acountVo)throws Exception;

}
