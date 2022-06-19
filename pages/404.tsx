import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import FourOhFourView from '../components/errors/404'

const FourOhFour = () => {
  const router = useRouter();
  console.log(router)
  return (
    <>
      <FourOhFourView>
        <div>
          <span>404 | </span>
          <span>Page not found</span>
          <div className="text-center uppercase">
            <button className="uppercase" type='button' onClick={() => router.back()}>Back is here</button>
          </div>
        </div>
      </FourOhFourView>
    </>
  );
}

export default React.memo(FourOhFour);