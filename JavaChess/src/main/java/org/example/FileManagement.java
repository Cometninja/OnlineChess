package org.example;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.File;
import java.lang.reflect.Type;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import java.lang.reflect.Type;
import java.util.List;
import com.google.gson.reflect.TypeToken;

public class FileManagement {
    public FileManagement(){

    }
    public static Gson gson = new Gson();
    public String filename;
    static Path path = Path.of("C:\\Users\\danie\\Desktop\\OnlineChessJavaLogic\\serverSideNode.js\\OnlineChess\\game1.json");

    public static void Run()throws IOException, InterruptedException{

        WatchService watchService = FileSystems.getDefault().newWatchService();
        boolean first = false;
        path.getParent().register(watchService,StandardWatchEventKinds.ENTRY_MODIFY);
        while(true){
            WatchKey key = watchService.take();
            for(WatchEvent<?> event : key.pollEvents()){
                WatchEvent.Kind<?> kind = event.kind();

                if (kind == StandardWatchEventKinds.ENTRY_MODIFY && event.context().equals(path.getFileName())){
                    System.out.println("file has been modified!");
                       ChangeFile(GetFile());
                }
            }
            boolean valid = key.reset();

            if (!valid){
                System.out.println("exiting system");
                break;
            }
        }
    }

    public static void ChangeFile(String fileContent){

        Type listType = new TypeToken<List<ChessBoardTile>>(){}.getType();
        List<ChessBoardTile> boards = gson.fromJson(fileContent, listType);
        if(boards != null){
            for (ChessBoardTile tile :boards) {
                if (tile._selected){
                    System.out.println(tile.GetInformation());
                }
            }
        }
        else {
            System.out.println("boards is null");
        }

    }

    public static String GetFile() throws IOException{
        File file =  new File(path.toString());
        try {
            BufferedReader br = new BufferedReader((new FileReader(path.toString())));
            return br.readLine();
        }catch (IOException e){
            e.printStackTrace();
            return null;
        }
    }
}
