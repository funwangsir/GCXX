package cn.itcast.ssm.po;

public class Account {
	private String user_id;
	private String username;
	private String password;
	private int age;
	private String sex;
	private String information;
	private int release_count;
	private int solve_count;
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getInformation() {
		return information;
	}
	public void setInformation(String information) {
		this.information = information;
	}
	public int getRelease_count() {
		return release_count;
	}
	public void setRelease_count(int release_count) {
		this.release_count = release_count;
	}
	public int getSolve_count() {
		return solve_count;
	}
	public void setSolve_count(int solve_count) {
		this.solve_count = solve_count;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
