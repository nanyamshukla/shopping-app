import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../Redux/Directory/directory.selectors';

import './Directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem.component';

const Directory = ({ sections }) => (
    <div className="directory-menu">
    {
        sections.map( ({ id, ...otherSectionProps }) => (
            <MenuItem key={ id } {...otherSectionProps} />
        ))
    }
    </div>
);

const mapStateToProps = state => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);