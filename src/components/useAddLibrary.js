import { useEffect, useState } from 'react';

function useAddLibrary(url, objectToFind) {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if(window[objectToFind]) {
            return setSuccess(true);
        } else {
            let myScript = document.createElement('script');
            myScript.setAttribute("src", url);
            document.head.appendChild(myScript);
            document.head.removeChild(myScript);
            myScript.addEventListener("load", scriptLoaded, false);
            return () => {
                myScript.removeEventListener("load", scriptLoaded);
            }
        }
        
    }, [url, objectToFind]);

    function scriptLoaded() {
        setSuccess(true);
    }

    return [success];
}

export default useAddLibrary;