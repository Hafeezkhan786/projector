import React, { Component } from 'react'


const ProductContext=React.createContext();

export default class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider>
                
            </ProductContext.Provider>
        )
    }
}
