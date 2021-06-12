<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="model.Film" %>

<%
	String delimiter = "#";
	Film oneFilm = (Film) request.getAttribute("film");
	
	out.println(oneFilm.getId()+delimiter+oneFilm.getTitle()+delimiter+
			    oneFilm.getYear()+delimiter+oneFilm.getDirector()+delimiter+
			    oneFilm.getStars()+delimiter+oneFilm.getReview());
	
%>
