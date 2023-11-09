package mx.uv;

import static spark.Spark.*;

import com.google.gson.JsonObject;

public class App {
    public static void main(String[] args) {

        // fuente:https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf
        //  
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


        // No se puede tener el mismo Path
        System.out.println("Hello World!");
        get("/", (request, response) -> "<h1>Bienvenido</h1>");

        get("/hola", (request, response) -> "<h1>Hola mundo</h1>");
        get("/adios", (request, response) -> "<h1>Adios mundo</h1>");

        get("/alumno",
                (request, response) -> "{'alumno': 'john', 'matricula': 'zs2103902', 'carrera':'tc'}");

        // get("/", (request, response)->"hola");

        post("/alumno",
                (request, response) -> {
                    System.out.println(request.contentLength());
                    System.out.println(request.contentType());
                    System.out.println(request.contextPath());
                    return "Hola" + request.queryParams("nombre");
                });

        get("/tipo-usuario",
                (request, response) -> {
                    System.out.println(request.queryParams("email") + " " + request.queryParams("password"));
                    System.out.println(request.body());
                    response.status(200);

                    JsonObject oRespuesta = new JsonObject();
                    oRespuesta.addProperty("tipo_usuario", "profesor");
                    oRespuesta.addProperty("nombre", request.queryParams("nombre"));
                    oRespuesta.addProperty("paterno", request.queryParams("paterno"));
                    oRespuesta.addProperty("materno", request.queryParams("Materno"));
                    return oRespuesta;
                });        

    }
}
