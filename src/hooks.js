import {useEffect} from "react";

const useComponentDidMount = (handler) => {
    useEffect(
        () => {
            handler();
        },
        []
    );
};

export {
    useComponentDidMount
};
