import React              from 'react/addons';

import MainHeader         from 'app/main/main-layout-header';
import MainFooter         from 'app/main/main-layout-footer';

var MainLayout = React.createClass({

    render() {
        return (
            <div className="main-layout">

                <MainHeader />

                <div className="main-layout--content">
                    {this.props.children}
                </div>

                <MainFooter />

            </div>
        );
    }
});

export default MainLayout;