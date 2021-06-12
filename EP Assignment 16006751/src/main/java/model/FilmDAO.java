package model;

import java.util.ArrayList;
import java.sql.*;


public class FilmDAO {

	Film oneFilm = null;
	Connection conn = null;
	Statement stmt = null;
	//mmu server
	String user = "gabbituj";
	String password = "queonitH8";
	String url = "jdbc:mysql://mudfoot.doc.stu.mmu.ac.uk:6306/"+user;
	//cloud server
	String url2 = String.format("jdbc:mysql://35.242.169.214:3306/films");
	
	public FilmDAO() {}


	private Connection openConnection(){
		// loading jdbc driver for mysql
		try{
			Class.forName("com.mysql.jdbc.Driver").newInstance();
		} catch(Exception e) { System.out.println(e); }

		// connecting to database
		try{
			// connection string for demos database, username demos, password demos
			conn = DriverManager.getConnection(url2, "root", "1234");
			stmt = conn.createStatement();
		} catch(SQLException se) { System.out.println(se); }
		return conn;	   
	}

	private void closeConnection(){
		try {
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private Film getNextFilm(ResultSet rs){
		Film thisFilm=null;
		try {
			thisFilm = new Film(
					rs.getString("id"),
					rs.getString("title"),
					rs.getString("year"),
					rs.getString("director"),
					rs.getString("stars"),
					rs.getString("review"));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return thisFilm;		
	}



	public ArrayList<Film> getAllFilms(){
		ArrayList<Film> allFilms = new ArrayList<Film>();
		openConnection();

		try{
			String selectSQL = "select * from films";
			ResultSet rs1 = stmt.executeQuery(selectSQL);
			// Retrieve the results
			while(rs1.next()){
				oneFilm = getNextFilm(rs1);
				allFilms.add(oneFilm);
			}
			stmt.close();
			closeConnection();
		} catch(SQLException se) { System.out.println(se); }

		return allFilms;
	}

	public Film getFilmByID(int id){

		openConnection();
		oneFilm=null;
		// Create select statement and execute it
		try{
			String selectSQL = "select * from films where id="+id;
			ResultSet rs1 = stmt.executeQuery(selectSQL);
			// Retrieve the results
			while(rs1.next()){
				oneFilm = getNextFilm(rs1);
			}

			stmt.close();
			closeConnection();
		} catch(SQLException se) { System.out.println(se); }

		return oneFilm;
	}
	
	public Film getFilmByTitle(String title){
		openConnection();
		oneFilm=null;
		// Create select statement and execute it
		try{
			String selectSQL = "select * from films where upper(title)='"+title+"';";
			ResultSet rs1 = stmt.executeQuery(selectSQL);
			// Retrieve the results
			while(rs1.next()){
				oneFilm = getNextFilm(rs1);
			}
			stmt.close();
			closeConnection();
		} catch(SQLException se) { System.out.println(se); }
		return oneFilm;
	}

	public void deleteFilm(int id){

		openConnection();
		oneFilm=null;
		// Create select statement and execute it
		try{
			String selectSQL = "delete from films where id="+id;
			stmt.executeUpdate(selectSQL);

			stmt.close();
			closeConnection();
		} catch(SQLException se) { System.out.println(se); }


	}

	/**
	 * Takes in the parameters of the Book class and inserts a new book into the database table 'rare_books'
	 * 
	 * @param in The book to be created
	 * @return true; create the book
	 * @throws SQLException
	 */
	public boolean insertFilmRecord(Film in) throws SQLException {
		Connection dbConnection = null;
		Statement statement = null;

		String update = "INSERT INTO films (id, title, year, director, stars, review) \nVALUES ("+
				Integer.parseInt(in.getId())+","+ "'"+in.getTitle()+"',"+Integer.parseInt(in.getYear())+",'"+
				in.getDirector()+"','"+in.getStars()+"','"+in.getReview()+"');";
		boolean ok = false;

		try {
			dbConnection = openConnection();
			statement = dbConnection.createStatement();
			System.out.println(update);
			// execute SQL query
			statement.executeUpdate(update);
			System.out.println("Insert Successful!");
			ok = true;	
		} catch (SQLException e) {
			System.out.println(e.getMessage());

		} finally {
			if (statement != null) {
				statement.close();
			}
			if (dbConnection != null) {
				dbConnection.close();
			}
		}
		return ok;
	}


	public void UpdateID(int oldID, int newID) {
		openConnection();
		oneFilm=null;
		// Create select statement and execute it
		try{
			String selectSQL = "UPDATE films SET id = '"+newID+"' WHERE id = "+oldID;
			stmt.executeUpdate(selectSQL);


			stmt.close();
			closeConnection();
		} catch(SQLException se) { System.out.println(se); }

		return;
	}

	public void UpdateTitleV2(int IDValue, String newValue) {
		openConnection();
		oneFilm=null;
		// Create select statement and execute it
		try{
			String selectSQL = "UPDATE films SET title = '"+newValue+"' WHERE id = "+IDValue+";";
			System.out.println(selectSQL);
			stmt.executeUpdate(selectSQL);
			stmt.close();
			closeConnection();
		} catch(SQLException se) { System.out.println(se); }
		return;
	}

	public void UpdateYearV2(int IDValue, int newYear) {
		openConnection();
		oneFilm=null;
		// Create select statement and execute it
		try{
			String selectSQL = "UPDATE films SET year = '"+newYear+"' WHERE id = "+IDValue;
			stmt.executeUpdate(selectSQL);
			stmt.close();
			closeConnection();
		} catch(SQLException se) { System.out.println(se); }
		return;
	}
	
	public void UpdateDirectorV2(int IDValue, String newValue) {
		openConnection();
		oneFilm=null;
		try{
		    String selectSQL = "UPDATE films SET director = '"+newValue+"' WHERE id = '"+IDValue+"';";
		    System.out.println(selectSQL);
		    stmt.executeUpdate(selectSQL);
		    stmt.close();
		    closeConnection();
		} catch(SQLException se) { System.out.println(se); }
	   return;
	}

	public void UpdateStarsV2(int IDValue, String newValue) {
		openConnection();
		oneFilm=null;
		try{
		    String selectSQL = "UPDATE films SET stars = '"+newValue+"' WHERE id = "+IDValue+";";
		    System.out.println(selectSQL);
		    stmt.executeUpdate(selectSQL);
		    stmt.close();
		    closeConnection();
		} catch(SQLException se) { System.out.println(se); }
	   return;
	}

	public void UpdateReviewV2(int IDValue, String newValue) {
		openConnection();
		oneFilm=null;
		try{
		    String selectSQL = "UPDATE films SET review = '"+newValue+"' WHERE id = "+IDValue+";";
		    System.out.println(selectSQL);
		    stmt.executeUpdate(selectSQL);
		    stmt.close();
		    closeConnection();
		} catch(SQLException se) { System.out.println(se); }
	   return;
	}

}
