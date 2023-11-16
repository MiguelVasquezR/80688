package mx.uv;

import static spark.Spark.*;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class App {
    public static void main(String[] args) {

        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }
            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }
            return "OK";
        });
        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        get("/", (res, req) -> {
            return "Hola";
        });

        get("/agregar", (res, req) -> {
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(req.body());
            JsonObject object = new JsonObject();

            object.addProperty("usernae", "");
            object.addProperty("", "");
            return element.getAsJsonObject().get("nombre").getAsString();                        
        });

        get("/editar", (res, req) -> {
            return "Editar";
        });

        get("/eliminar", (res, req) -> {
            return "Eliminar";
        });

        post("/recibir", (response, request) -> {
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(request.body());
            JsonObject object = new JsonObject();

            object.addProperty("usernae", "");
            object.addProperty("", "");
            return element.getAsJsonObject().get("nombre").getAsString();            
        });

    }
}
