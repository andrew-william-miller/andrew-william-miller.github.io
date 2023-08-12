/* 
    The purpose of this Component is to automatically scroll to the top when browsing to a new page within the ReactJS
    Browser Router. From my testing, without this, when going from 1 page to another, e.g. the home to PHP overview page,
    the vertical scroll position from home would transfer to the PHP overview page, resulting in the PHP Overview page loading with the page
    scrolled down.
    
    From the testing I did, on tvs, monitors and mobile I only noticed this to be problem on mobile. Either way, it seems to be fixed with this implementation. 
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;