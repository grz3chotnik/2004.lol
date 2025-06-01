import {useState, useEffect} from "react";

function Mycomponent() {
    const [showComponent, setShowComponent] = useState(true);

    useEffect(() => {
        // This runs only once after the first render
        setShowComponent(false);
    } ); // Empty dependency array ensures it runs only on mount

    return (
        <div>
            {showComponent && <div>This shows only on first render!</div>}
        </div>
    );
}

export default Mycomponent