package jayon.learning.firstgraphql.controller;

import java.util.List;

import jayon.learning.firstgraphql.dto.ProductoRq;
import jayon.learning.firstgraphql.model.Producto;

public interface IProductoController {
    public List<Producto> getProductos();

    public Producto getProductoById(String id);

    public Producto addProducto(ProductoRq producto);


}
