import React from 'react';
import SHOP_DATA from './Shop.data';

import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={ 
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        )
    }
}

export default ShopPage;