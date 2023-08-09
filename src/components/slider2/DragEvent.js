const isTouchScreen =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;

function registDragEvent({ onDragChange, stopPropagation }) {
  if (isTouchScreen) {
    return {
      onTouchStart: function (touchEvent) {
        if (stopPropagation) touchEvent.stopPropagation();

        const touchMoveHandler = function (moveEvent) {
          if (moveEvent.cancelable) moveEvent.preventDefault();

          const deltaX =
            moveEvent.touches[0].screenX - touchEvent.touches[0].screenX;
          const deltaY =
            moveEvent.touches[0].screenY - touchEvent.touches[0].screenY;
          if (typeof onDragChange === "function") {
            onDragChange(deltaX, deltaY);
          }
        };

        const touchEndHandler = function () {
          document.removeEventListener("touchmove", touchMoveHandler);
        };

        document.addEventListener("touchmove", touchMoveHandler, {
          passive: false,
        });
        document.addEventListener("touchend", touchEndHandler, { once: true });
      },
    };
  }

  return {
    onMouseDown: function (clickEvent) {
      if (stopPropagation) clickEvent.stopPropagation();

      const mouseMoveHandler = function (moveEvent) {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        const deltaY = moveEvent.screenY - clickEvent.screenY;

        onDragChange(deltaX, deltaY);
      };

      const mouseUpHandler = function () {
        document.removeEventListener("mousemove", mouseMoveHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
  };
}

export default registDragEvent;
