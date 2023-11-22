package mx.uv;

import static spark.Spark.*;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import spark.Request;
import spark.Spark;

import java.util.ArrayList;

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

        ArrayList<Cliente> listaCliente = new ArrayList<>();
        Cliente cliente = new Cliente("Miguel", "mv@gmail.com", "2299008877");
        Cliente cliente1 = new Cliente("Xanery", "xl@gmail.com", "2299887744");
        listaCliente.add(cliente);
        listaCliente.add(cliente1);

        App app = new App();
        Gson gson = new Gson();

        put("/editar", (request, response) -> {
            Cliente cEditar = app.getCliente(request, gson);
            for (Cliente cl : listaCliente){
                if (cl.getNombre().equals(cEditar.getNombre())){
                    cl.setNombre(cEditar.getNombre());
                    cl.setCorreo(cEditar.getCorreo());
                    cl.setTelefono(cEditar.getTelefono());
                    break;
                }
            }
            return "Editar";
        });

        delete("/eliminar", (request, response) -> {
            Cliente clN = app.deleteCliente(request);
            int pos = app.searchCliente(clN.getNombre(), listaCliente);
            listaCliente.remove(pos);
            return "Eliminar";
        });

        post("/agregar", (request, response) -> {
            if (app.getCliente(request, gson) != null){
                listaCliente.add(app.getCliente(request, gson));
                return "Agregado";
            }else{
                return  "No agregado";
            }
        });

        get("/todos", ((request, response) -> {
            app.seeUser(listaCliente);
            String json = gson.toJson(listaCliente);
            return json;
        }));

    }

    public Cliente deleteCliente(Request request){
        try{
            String nombre = request.queryParams("nombre");
            String correo = request.queryParams("correo");
            String telefono = request.queryParams("telefono");
            Cliente cEliminar = new Cliente(nombre, correo, telefono);
            return cEliminar;
        }catch (Exception e){
            System.out.println("Error al borrar: " + e.getMessage());
            return null;
        }
    }

    public Cliente getCliente(Request request, Gson gson){
        try{
            JsonParser jsonParser = new JsonParser();
            JsonObject jsonObject = jsonParser.parse(request.body()).getAsJsonObject();
            return gson.fromJson(jsonObject, Cliente.class);
        }catch (Exception e){
            System.out.println("Error al Convertir Cliente por: "+ e.getMessage());
            return null;
        }
    }

    public int searchCliente(String nombre, ArrayList<Cliente> listClient){
        int index = 0, i=0;
        for(Cliente cliente : listClient){
            if (cliente.getNombre().equals(nombre)){
                index = i;
                break;
            }else{
                index = -1;
            }
            i++;
        }
        return index;
    }

    public String seeUser(ArrayList<Cliente> lista){
        String clientes = "";
        for (Cliente c : lista){
            clientes += "\n"+c.toString();
        }
        return clientes;
    }


}
