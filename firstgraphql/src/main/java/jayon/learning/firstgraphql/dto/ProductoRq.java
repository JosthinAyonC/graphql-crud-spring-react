package jayon.learning.firstgraphql.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductoRq {
    private String nombre;
    private Double precio;
    private Integer cantidad;
    private Long categoriaId;
}
