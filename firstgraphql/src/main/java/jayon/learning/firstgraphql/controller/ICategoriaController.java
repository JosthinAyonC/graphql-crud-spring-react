package jayon.learning.firstgraphql.controller;

import java.util.List;

import jayon.learning.firstgraphql.model.Categoria;

public interface ICategoriaController {

    public List<Categoria> getCategorias();

    public Categoria getCategoriaById(Long id);

    public Categoria addCategoria(String nombre);
}
