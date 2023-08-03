package org.example;

public class Point {
    int X;
    int Y;
    public Point(int a,int b){
        X = a;
        Y = b;
    }
    public String ToString(){
        return String.format("(%s,%s)",X,Y);
    }
}
