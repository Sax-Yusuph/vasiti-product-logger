import React from 'react'

export default function ProductForm() {
    return (
        <form>
            <div className="form-group">
                <label for="productName">Product name</label>
                <input type="text" className="form-control" id="productName"/>
            </div>
            <div className="form-group">
                <label for="productdescription">product_description</label>
                <textarea type="text" className="form-control" id="productdescription"/>
            </div>
            {/* <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    )
}

//  product_name, product_description, product_varieties, date_uploaded, date_edited, show