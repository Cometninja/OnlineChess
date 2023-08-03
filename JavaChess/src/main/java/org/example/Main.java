package org.example;
import com.google.gson.Gson;

import javax.naming.spi.DirectoryManager;
import java.io.File;
import java.io.IOException;
import java.io.FileWriter;
import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws IOException,InterruptedException{
        System.out.println("hello and welcome to chess");

        FileManagement fm = new FileManagement();
        Gson gson = new Gson();
        writeToFile("./chessboard.json",gson.toJson(CreateChessBoard()));
        fm.Run();

    }


    public static ChessBoardTile[] CreateChessBoard(){
        ChessBoardTile[] boards = new ChessBoardTile[64];
        int count = 0;


        for (int i = 0; i < 8;i++){
            for(int j = 0; j< 8;j++){
                boards[count] = new ChessBoardTile();
                boards[count]._point = new Point(i,j);

                if (i == 0 || i == 1){
                    boards[count]._colour = "black";
                    boards[count]._containsPiece = true;
                } else if (i == 6 || i == 7) {
                    boards[count]._colour = "white";
                    boards[count]._containsPiece = true;
                }
                if (i == 1 || i == 6){
                    boards[count]._piece = Pieces.Pawn.toString();
                }

                if (i == 0||i == 7){
                    if (j == 0 || j == 7){
                        boards[count]._piece = Pieces.Rook.toString();
                    }
                    else if (j == 1 || j == 6){
                        boards[count]._piece = Pieces.Knight.toString();
                    } else if (j == 2 || j ==5) {
                        boards[count]._piece = Pieces.Bishop.toString();
                    } else if (j == 3) {
                        boards[count]._piece = Pieces.King.toString();
                    }
                    else {
                        boards[count]._piece =  Pieces.Queen.toString();
                    }


                }
                count++;
            }
        }
        return boards;
    }
    public void checkFile(){
        while (true){

            try{
                Path path = Path.of("C:\\Users\\danie\\Desktop\\OnlineChessJavaLogic\\serverSideNode.js\\OnlineChess\\game1.json");
                File file = new File(path.toString());
                long test = Files.size(path);
                System.out.println(
                        file.lastModified()
            );
            }catch (IOException e){
                System.out.println(e.toString());
            }

        }
    }
    public void createFile(String filename){
        try {
            File myObj =new File("chessboard.json");
            if(myObj.createNewFile()){
                System.out.println("created file " + myObj.getName());

            } else {
                System.out.println("file already exists!!");
            }
        }
        catch (Exception e){
            System.out.println("ERROR!!!!");
            e.printStackTrace();
        }
    }
    public static void writeToFile(String Filename,String data){
        try {
            FileWriter myWriter = new FileWriter(Filename);
            myWriter.write(data);
            myWriter.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}