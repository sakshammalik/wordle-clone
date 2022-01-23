import React from "react";

const SquareGridElement = ({ element, error }) => {

    const [classes, setClasses] = React.useState('square-grid-element');

    React.useEffect(() => {
        if (element) {
            setClasses(classes + ' active');
        } else {
            setClasses("square-grid-element");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [element]);

    React.useEffect(() => {
        if (error) {
            setClasses(classes + ' ' + error);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    return (
        <div style={{ transformOrigin: '100% center', position: 'relative' }}>
            <div className={classes}>{element}</div>
            {/* <div className={classes + ' error'}>{element}</div> */}
        </div>
    );
};

export default SquareGridElement;