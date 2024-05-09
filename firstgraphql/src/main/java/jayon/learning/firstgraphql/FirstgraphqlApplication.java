package jayon.learning.firstgraphql;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.annotation.PostConstruct;
import jayon.learning.firstgraphql.model.Categoria;
import jayon.learning.firstgraphql.repositoty.CategoriaRep;

@SpringBootApplication
public class FirstgraphqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstgraphqlApplication.class, args);
	}

	@Autowired
	private CategoriaRep categoriaRepository;

	@PostConstruct
	public void init() {
		run();
	}

	public void run() {
		List<String> categorias = List.of("Computadoras", "Impresoras", "Smartphones");

		categorias.forEach(cat -> {
			if (categoriaRepository.findByNombre(cat) == null) {
				Categoria categoria = Categoria.builder().nombre(cat).build();
				categoriaRepository.save(categoria);
			}
		});

	}
}
