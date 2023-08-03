package org.example;

public class ChessBoardTile  extends Object{
         String _colour;
         Point _point;
         boolean _containsPiece;
         String _piece;
         boolean _selected;
    public ChessBoardTile() {
    }

    // Getters and Setters
    public String getColour() {
        return _colour;
    }

    public void setColour(String colour) {
        this._colour = colour;
    }

    public Point getPoint() {
        return _point;
    }

    public void setPoint(Point point) {

        this._point.X = point.X;
        this._point.Y = point.Y;
    }

    public boolean isContainsPiece() {
        return _containsPiece;
    }

    public void setContainsPiece(boolean containsPiece) {
        this._containsPiece = containsPiece;
    }

    public String getPiece() {
        return _piece;
    }

    public void setPiece(String piece) {
        this._piece = piece;
    }

    public boolean isSelected() {
        return _selected;
    }

    public void setSelected(boolean selected) {
        this._selected = selected;
    }

    public String GetInformation(){
        return this._piece +" "+ this._colour +" ,("+ this._point.X +"," +this._point.Y +")";
    }
        // Constructors, getters, and setters
}


