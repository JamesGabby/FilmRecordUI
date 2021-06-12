<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="model.Film" %>

<%
	String delimiter = "#";
	ArrayList<Film> filmList = (ArrayList) request.getAttribute("films");
	for (Film oneFilm : filmList) {
		out.println(oneFilm.getId()+delimiter+oneFilm.getTitle()+delimiter+
				    oneFilm.getYear()+delimiter+oneFilm.getDirector()+delimiter+
				    oneFilm.getStars()+delimiter+oneFilm.getReview()+delimiter);
	}
%>
