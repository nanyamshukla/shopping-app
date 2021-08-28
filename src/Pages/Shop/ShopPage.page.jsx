import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import withSpinner from '../../HOC/withSpinner/withSpinner.hoc';

import CollectionPage from '../Collection/Collection.page';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview.component'; 

import { fetchCollectionsStartAsync } from '../../Redux/Shop/shop.actions';
import { selectIsCollectionsFetching } from '../../Redux/Shop/shop.selectors';

const CollectionPageWithSpinner = withSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching } = this.props;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={match.path} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isCollectionFetching: selectIsCollectionsFetching(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default withSpinner(connect(mapStateToProps, mapDispatchToProps)(ShopPage));