import React from "react";
import "./Loader.scss";
import {createPortal} from "react-dom";
import {IconLoading} from "@Assets/icons/Index";

export type TLoaderRef = {
  show: () => void,
  hide: () => void,
  hideImmediately: () => void,
  setText: (text: string) => void,
  setTop: (top: number) => void,
  setLeft: (left: number) => void,
}

export default React.forwardRef<TLoaderRef>(function Loader(_, ref) {
  const ele = React.useRef<HTMLDivElement | null>(null);
  const eleText = React.useRef<HTMLSpanElement | null>(null);
  const hideTimeout = React.useRef<NodeJS.Timeout>();

  const hideImmediately = React.useCallback(() => {
    ele.current?.classList.remove("c-loader--hiding");

    if (ele.current?.classList.contains("c-loader--show")) {
      ele.current?.classList.remove("c-loader--show");
    }

    if (eleText.current) {
      eleText.current.innerText = "";
    }
  }, []);

  React.useImperativeHandle(ref, () => ({
    show: () => {
      clearTimeout(hideTimeout.current);

      if (ele.current?.classList.contains("c-loader--show")) {
        return;
      }

      ele.current?.classList.add("c-loader--show");
    },
    hide: () => {
      if (ele.current?.classList.contains("c-loader--hiding")) {
        return;
      }

      ele.current?.classList.add("c-loader--hiding");
      hideTimeout.current = setTimeout(hideImmediately, 350);
    },
    hideImmediately: hideImmediately,
    setText: (text: string) => {
      if (!eleText.current) {
        return;
      }

      eleText.current.innerHTML = text;
    },
    setTop: (top: number) => {
      if (!ele.current) {
        return;
      }

      ele.current.style.top = top + "px";
    },
    setLeft: (left: number) => {
      if (!ele.current) {
        return;
      }

      ele.current.style.left = left + "px";
    },
  }), [hideImmediately]);

  return createPortal(
    <div className="c-loader" ref={e => ele.current = e} style={{left: 0, top: 0}}>
      <IconLoading />
      <span className="c-loader__text" ref={e => eleText.current = e}></span>
    </div>,
    document.body
  );
});
