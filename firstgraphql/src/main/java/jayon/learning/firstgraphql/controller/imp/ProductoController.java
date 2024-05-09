package jayon.learning.firstgraphql.controller.imp;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import jayon.learning.firstgraphql.controller.IProductoController;
import jayon.learning.firstgraphql.dto.ProductoRq;
import jayon.learning.firstgraphql.model.Categoria;
import jayon.learning.firstgraphql.model.Producto;
import jayon.learning.firstgraphql.repositoty.CategoriaRep;
import jayon.learning.firstgraphql.repositoty.ProductoRep;

@Controller
public class ProductoController implements IProductoController {
    @Autowired
    private ProductoRep productoRepository;
    @Autowired
    private CategoriaRep categoriaRepository;

    // Agregamos la anotación @QueryMapping para indicar que este método es un query
    // de GraphQL
    // Usualmente queryMapping se usara para obtener datos de la base de datos
    // el atributo name es el nombre del query que se usara en el archivo de
    // schema.graphqls
    @Override
    @QueryMapping(name = "getProductos")
    public List<Producto> getProductos() {
        return productoRepository.findAll();
    }

    @Override
    @QueryMapping
    public Producto getProductoById(@Argument String id) {
        return productoRepository.findById(id).orElseThrow(
                () -> new RuntimeException(String.format("No se encontro el producto con el id %s", id)));
    }

    // Por otro lado si queremos hacer una mutación, usaremos la anotación
    // @MutationMapping
    // Usualmente mutationMapping se usara para insertar, actualizar o eliminar
    // datos de la base de datos
    @Override
    @MutationMapping
    // Es importante que el nombre del argumento sea el mismo que el nombre del
    // objeto que se recibe
    public Producto addProducto(@Argument ProductoRq productoReq) {

        Categoria categoria = categoriaRepository.findById(productoReq.getCategoriaId())
                .orElseThrow(() -> new RuntimeException(String.format("No se encontro la categoria con el id %s",
                        productoReq.getCategoriaId())));

        Producto producto = Producto.builder()
                .id(UUID.randomUUID().toString())
                .nombre(productoReq.getNombre())
                .precio(productoReq.getPrecio())
                .cantidad(productoReq.getCantidad())
                .categoriaId(categoria)
                .build();

        return productoRepository.save(producto);
    }
}
