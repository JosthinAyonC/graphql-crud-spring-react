package jayon.learning.firstgraphql.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import jayon.learning.firstgraphql.model.Categoria;

public interface CategoriaRep extends JpaRepository<Categoria, Long> {

    @Query("SELECT c FROM Categoria c WHERE c.nombre = ?1")
    Categoria findByNombre(String cat);

}