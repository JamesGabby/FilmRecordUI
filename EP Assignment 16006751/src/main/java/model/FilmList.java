package model;

import java.util.ArrayList;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(namespace = "model")
public class FilmList {

    // XmLElementWrapper generates a wrapper element around XML representation
    @XmlElementWrapper(name = "filmList")
    // XmlElement sets the name of the entities
    @XmlElement(name = "film")
    private ArrayList<Film> filmList;
    private String name;
    private String location;

    public void setFilmList(ArrayList<Film> filmList) {
        this.filmList = filmList;
    }

    public ArrayList<Film> getFilmsList() {
        return filmList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}