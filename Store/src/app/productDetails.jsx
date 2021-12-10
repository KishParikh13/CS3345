import React from "react";
import ReviewForm from "./ReviewForm";
import { ReviewList } from "./ReviewList";
import { Link } from "react-router-dom";
import { ProductsRepository } from "../api/productRepository";
import CartService from "../services/cartService";

export class ProductDetails extends React.Component {
    productsRepository = new ProductsRepository();
    cartService = new CartService();

    state = {
        product: ''
    };

    componentDidMount() {
        this.getProductDetails();
    }

    getProductDetails () {
        let id = this.props.match.params.productId;
        
        if (id) {
            this.productsRepository.getProduct(id)
                .then(product =>
                    this.setState({product})
                );
        }
    }

    onReviewAdded (review) {
        let reviews = this.state.product.reviews;
        reviews.push(review);
        this.setState({reviews})
        this.productsRepository.addReview(this.state.product.id, review);
    }

    render () {
        return (
            
            <div className="product-details-wrapper">
                <div className="breadcrumbs">
                    <p><Link className="breadcrumb-highlight" to="/">Tasty Snacks</Link> / { this.state.product.name }</p>
                </div>
                {
                    this.state.product ?
                    <>
                        <div className="product-card">
                            <img alt="Product Shot" src={ this.state.product.imageUrl } className="product-img"></img>
                            <div className="product-info">
                                <h1 className="product-name">{ this.state.product.name }</h1>
                                <p className="product-price">${ this.state.product.price }</p>
                                <p className="product-text">{ this.state.product.description }</p>
                                <Link className="button yellow-btn ml-auto mt-auto" to="/cart" onClick= { event => this.cartService.addToCart(this.state.product)}>Add to Cart</Link>
                            </div>
                        </div>
                        {
                            this.state.product.reviews ?
                            <ReviewList reviews={ this.state.product.reviews } />
                            :
                            <></>
                        }
                        <ReviewForm onReviewAdded={ review => this.onReviewAdded(review) }/>
                    </>
                    :
                    <div>Loading Product....</div>
                }
            </div>

                
                
        )
    }
}