import React from 'react';
import { connect } from 'react-redux';

import './CollectionsOverview.styles.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

import { selectCollectionsForPreview } from '../../Redux/Shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview" >
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview);