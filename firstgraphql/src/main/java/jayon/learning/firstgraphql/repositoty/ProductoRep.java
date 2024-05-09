package jayon.learning.firstgraphql.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;

import jayon.learning.firstgraphql.model.Producto;

public interface ProductoRep extends JpaRepository<Producto, String> {

}