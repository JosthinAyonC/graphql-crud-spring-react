import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCTO } from "../graphql/querys.graphql";

interface ProductoRq {
    nombre: string;
    precio: number;
    cantidad: number;
    categoriaId: number;
}

export const NuevoProducto: React.FC = () => {
    const [formState, setFormState] = useState<ProductoRq>({
        nombre: "",
        precio: 0,
        cantidad: 0,
        categoriaId: 0
    });

    const [addProducto] = useMutation(ADD_PRODUCTO);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: name === "precio" || name === "cantidad" || name === "categoriaId" ? Number(value) : value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addProducto({ variables: { productoReq: formState } });
        setFormState({
            nombre: "",
            precio: 0,
            cantidad: 0,
            categoriaId: 0
        });
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        id="nombre"
                        name="nombre"
                        value={formState.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input
                        id="precio"
                        name="precio"
                        type="number"
                        value={formState.precio}
                        onChange={handleChange}
                        placeholder="Precio"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cantidad" className="form-label">Cantidad</label>
                    <input
                        id="cantidad"
                        name="cantidad"
                        type="number"
                        value={formState.cantidad}
                        onChange={handleChange}
                        placeholder="Cantidad"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="categoriaId" className="form-label">ID de Categoría</label>
                    <input
                        id="categoriaId"
                        name="categoriaId"
                        type="number"
                        value={formState.categoriaId}
                        onChange={handleChange}
                        placeholder="ID de Categoría"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Producto</button>
            </form>
        </div>
    );
};
