<%@ page import="com.google.gson.Gson" %>
<%@ page trimDirectiveWhitespaces="true" %>

<%
	Gson gson = new Gson();
	String filmsJson = gson.toJson(request.getAttribute("films"));
	out.println(filmsJson);
	System.out.println(filmsJson);
%>
