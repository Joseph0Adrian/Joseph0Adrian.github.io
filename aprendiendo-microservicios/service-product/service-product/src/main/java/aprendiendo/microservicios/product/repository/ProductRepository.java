package aprendiendo.microservicios.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import aprendiendo.microservicios.product.entity.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long>{

    // public List<Product> findByCategory(Category category);
    public List<Product> findByCategory(Product product01);
    
}
