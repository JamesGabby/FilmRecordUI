<%@ page import="com.google.gson.Gson" %>
<%@ page trimDirectiveWhitespaces="true" %>

<%
	Gson gson = new Gson();
	String filmJson = gson.toJson(request.getAttribute("film"));
	out.println(filmJson);
	System.out.println(filmJson);
%>
