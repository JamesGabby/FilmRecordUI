package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import model.Film;
import model.FilmDAO;

/**
 * Servlet implementation class filmInsert
 */
@WebServlet("/filmInsert")
public class filmInsert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public filmInsert() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String format = request.getParameter("format");
		String filmID = request.getParameter("id");
	    String filmTitle = request.getParameter("title");
	    String filmYear = request.getParameter("year");
	    String filmDirector = request.getParameter("director");
	    String filmStars = request.getParameter("stars");
	    String filmReview = request.getParameter("review");
	    Film newFilm = new Film(filmID, filmTitle, filmYear, filmDirector, filmStars, filmReview);
	    FilmDAO fd = new FilmDAO();
	    try {
			fd.insertFilmRecord(newFilm);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    PrintWriter out = response.getWriter();
	    if ("text".equals(format)) {
	    	out.println("Film inserted, data sent in plain text.");
	    } else if ("json".equals(format)) {
	    	out.println("Film inserted, data sent in parsed JSON.");
	    } else {
	    	out.println("Film inserted, data sent in parsed XML.");
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
