import React from 'react';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, specialty, img } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar online">
                <div className="w-24 mask mask-hexagon">
                    <img src={img} alt={name} />
                </div>
                {/* <div className="w-8 rounded">
                    <img src={img} alt={name} />
                </div> */}
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;