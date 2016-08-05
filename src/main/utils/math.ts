export function intersectRect(r1: ClientRect, r2: ClientRect) {
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

export function intersectMouse(r1: ClientRect, e: JQueryMouseEventObject) {
  let r2 = {left: e.pageX, right: e.pageX, top: e.pageY, bottom: e.pageY};
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}
