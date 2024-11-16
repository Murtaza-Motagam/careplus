import React from 'react'

const PageLoader: React.FC = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            {/* <div className="boxes">
                 <div className="box">
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                 </div>
                 <div className="box">
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                 </div>
                 <div className="box">
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                 </div>
                 <div className="box">
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                 </div>
             </div> */}
               <div className="loading">
                <div className="loading-wide">
                    <div className="l1 color"></div>
                    <div className="l2 color"></div>
                    <div className="e1 color animation-effect-light"></div>
                    <div className="e2 color animation-effect-light-d"></div>
                    <div className="e3 animation-effect-rot">X</div>
                    <div className="e4 color animation-effect-light"></div>
                    <div className="e5 color animation-effect-light-d"></div>
                    <div className="e6 animation-effect-scale">*</div>
                    <div className="e7 color"></div>
                    <div className="e8 color"></div>
                </div>
            </div>
        </div>
    )
}

export default PageLoader
