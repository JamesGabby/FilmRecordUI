<%@ page import="model.Film" %>
<%@ page import="model.FilmList" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.io.File" %>
<%@ page import="java.io.FileReader" %>
<%@ page import="java.io.IOException" %>
<%@ page import="javax.xml.bind.JAXBContext" %>
<%@ page import="javax.xml.bind.JAXBException" %>
<%@ page import="javax.xml.bind.Marshaller" %>
<%@ page import="javax.xml.bind.Unmarshaller" %>


<%
	ArrayList<Film> filmList = (ArrayList) request.getAttribute("films");
	String BOOKSTORE_XML = "./bookstore-jaxb.xml";
	// create bookstore, assigning book
	FilmList fl = new FilmList();
	fl.setName("MMU Books");
	fl.setLocation("Oxford Road, Manchester");
	fl.setFilmList(filmList);
	
	// create JAXB context and instantiate marshaller
	JAXBContext context = JAXBContext.newInstance(FilmList.class);
	Marshaller m = context.createMarshaller();
	m.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
	
	// Write to System.out
	//m.marshal(fl, System.out);
	
	m.marshal(fl, out);
	
	// Write to File
	//m.marshal(fl, new File(BOOKSTORE_XML));
	
	// get variables from our xml file, created before
	//System.out.println();
	//System.out.println("Output from our XML File: ");
	//Unmarshaller um = context.createUnmarshaller();
	//FilmList fl2 = (FilmList) um.unmarshal(new FileReader(BOOKSTORE_XML));
	//ArrayList<Film> list = fl2.getFilmsList();
	//System.out.println(fl2);
	//for (Film film : list) {
		//out.println(film);
		//System.out.println(film);
	//}
	
%>
 