package jayon.learning.firstgraphql.controller.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import jayon.learning.firstgraphql.controller.ICategoriaController;
import jayon.learning.firstgraphql.model.Categoria;
import jayon.learning.firstgraphql.repositoty.CategoriaRep;

@Controller
public class CategoriaController implements ICategoriaController {

    @Autowired
    private CategoriaRep categoriaRepository;

    @Override
    @QueryMapping
    public List<Categoria> getCategorias() {
        return categoriaRepository.findAll();
    }

    @Override
    @QueryMapping
    public Categoria getCategoriaById(@Argument Long id) {
        if (id == null) {
            throw new DataIntegrityViolationException("El id no puede ser nulo");
        }
        return categoriaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("No se encontro la categoria con el id %s", id)));
    }

    @Override
    @MutationMapping
    public Categoria addCategoria(String nombre) {
        Categoria categoria = Categoria.builder().nombre(nombre).build();
        return categoriaRepository.save(categoria);
    }

}
