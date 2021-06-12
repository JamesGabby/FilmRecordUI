package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Film;
import model.FilmDAO;

/**
 * Servlet implementation class FilmController
 */
@WebServlet("/UpdateFilmControllerV2")
public class UpdateFilmControllerV2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateFilmControllerV2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache");
	    response.setHeader("Pragma", "no-cache");
	    
	    FilmDAO fd = new FilmDAO();
	    
	    ArrayList<Film> films = fd.getAllFilms();
	   
	    
	    request.setAttribute("films", films);
	   
	    String attribute = request.getParameter("attribute");
	    String filmToUpdate = request.getParameter("id-value");
	    String newValue = request.getParameter("new-value");
	    String format = request.getParameter("format");
	    if ("id".equals(attribute)) {
	    	fd.UpdateID(Integer.parseInt(filmToUpdate), Integer.parseInt(newValue));
	    } else if ("title".equals(attribute)) {
	    	fd.UpdateTitleV2(Integer.parseInt(filmToUpdate), newValue);
	    } else if ("year".equals(attribute)) {
	    	fd.UpdateYearV2(Integer.parseInt(filmToUpdate), Integer.parseInt(newValue));
	    } else if ("director".equals(attribute)) {
	    	fd.UpdateDirectorV2(Integer.parseInt(filmToUpdate), newValue);
	    } else if ("stars".equals(attribute)) {
	    	fd.UpdateStarsV2(Integer.parseInt(filmToUpdate), newValue);
	    } else {
	    	fd.UpdateReviewV2(Integer.parseInt(filmToUpdate), newValue);
	    }
	    
	    
	    PrintWriter out = response.getWriter();
	    if ("text".equals(format)) {
	    	out.println("Film updated, data sent in plain text.");
	    } else if ("json".equals(format)) {
	    	out.println("Film updated, data sent in parsed JSON.");
	    } else {
	    	out.println("Film updated, data sent in parsed XML.");
	    }
	    
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
