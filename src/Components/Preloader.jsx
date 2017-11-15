import React from "react";
export default function({type='default',transparent=false,fixed=false}) {
  const transparentClass = transparent ? 'transparent' : '';
  const fixedClass = fixed ? 'fixed' : ''
  const preloaderClass = `preloader ${type}`;

  const preloadContainerClass = `preload-container ${transparentClass} ${fixedClass}`;
  return (
    <div className={preloadContainerClass}>
    <div className={preloaderClass}>
      <div className="circles">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
        <div className="circle circle-3" />
      </div>
    </div>
    </div>
  );
}
