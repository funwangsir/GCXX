package cn.itcast.ssm.po;

public class AccountVo {

	private Account account;
	private AccountCustom accountCustom;
	
	private ReceiveItem receiveItem;
	private ReceiveItemCustom receiveItemCustom;
	
	private Item item;
	private ItemCustom itemCustom;
	
	
	public Item getItem() {
		return item;
	}
	public void setItem(Item item) {
		this.item = item;
	}
	public ItemCustom getItemCustom() {
		return itemCustom;
	}
	public void setItemCustom(ItemCustom itemCustom) {
		this.itemCustom = itemCustom;
	}
	public ReceiveItem getReceiveItem() {
		return receiveItem;
	}
	public void setReceiveItem(ReceiveItem receiveItem) {
		this.receiveItem = receiveItem;
	}
	public ReceiveItemCustom getReceiveItemCustom() {
		return receiveItemCustom;
	}
	public void setReceiveItemCustom(ReceiveItemCustom receiveItemCustom) {
		this.receiveItemCustom = receiveItemCustom;
	}
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	public AccountCustom getAccountCustom() {
		return accountCustom;
	}
	public void setAccountCustom(AccountCustom accountCustom) {
		this.accountCustom = accountCustom;
	}
	
}
