
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="cn.itcast.ssm.po.Item" %>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jstl/fmt_rt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form
		action="${pageContext.request.contextPath }/item/queryItem.action"
		method="post">
		查询条件:
		<table width="100%" border=1>
			<tr>

				<td><input type="submit" value="查询"></td>

			</tr>

			商品列表：
			<table width="100%" border=1>
				<tr>
					<td>商品名称</td>
					<td>商品价格</td>
					<td>生产日期</td>
					<td>商品描述</td>
					<td>操作</td>
				</tr>
				<!-- 获取domelandview传来的数据 -->

		 	<c:forEach items="${itemsList}" var="item">
		 	
				 	 <tr>
						<td>${item.title }</td>
						<td>${item.content }</td>
						<%-- <td><fmt:formatDate value="${item.createtime }"
								pattern="yyyy-MM-dd HH:mm:ss"/></td> --%>
						<td>${item.phone }</td>

						<%-- <td><a
							href="${pageContext.request.contextPath }/item/editItem.action?id=${item.id}">修改</a></td> --%>
					</tr>  

				</c:forEach> 
			</table>
		</table>
	</form>

</body>
</html>
