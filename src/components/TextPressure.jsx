// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ

import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Roboto Flex',
  fontUrl = 'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap',

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 2,
  className = '',

  minFontSize = 24,
  interactionDelay = 2000
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const isPointerOverRef = useRef(false);
  const isVisibleRef = useRef(false);
  const isInteractionEnabledRef = useRef(false);

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split('');

  useEffect(() => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }
  }, []);

  const resetPressure = useCallback(() => {
    if (!isPointerOverRef.current) return;
    isPointerOverRef.current = false;
    spansRef.current.forEach(span => {
      if (!span) return;
      span.style.fontVariationSettings = "'wght' 400, 'wdth' 100, 'ital' 0";
      if (alpha) span.style.opacity = '1';
    });
  }, [alpha]);

  const updatePointer = useCallback(event => {
    // Do not use a pointer position captured while the page is still loading
    // or being scrolled into place. This prevents the footer text from jumping
    // to an off-screen/stale cursor position.
    if (!isInteractionEnabledRef.current) return;

    // The effect begins in the lower half of the screen once this footer is
    // visible, giving it a larger, deliberate interaction area.
    if (!isVisibleRef.current || event.clientY < window.innerHeight / 100) {
      resetPressure();
      return;
    }

    isPointerOverRef.current = true;
    cursorRef.current.x = event.clientX;
    cursorRef.current.y = event.clientY;
  }, [resetPressure]);

  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
      if (!entry.isIntersecting) resetPressure();
    }, { threshold: 0.1 });

    if (containerRef.current) visibilityObserver.observe(containerRef.current);

    const interactionTimer = window.setTimeout(() => {
      isInteractionEnabledRef.current = true;
    }, interactionDelay);

    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('scroll', resetPressure, { passive: true });
    return () => {
      visibilityObserver.disconnect();
      window.clearTimeout(interactionTimer);
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('scroll', resetPressure);
    };
  }, [interactionDelay, resetPressure, updatePointer]);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    // Size against the full character count so longer words stay inside the
    // container even when the variable font expands near the cursor.
    let newFontSize = containerW / chars.length;
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  }, [chars.length, minFontSize, scale]);

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100);
    debouncedSetSize();
    window.addEventListener('resize', debouncedSetSize);

    const resizeObserver = new ResizeObserver(debouncedSetSize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => {
      window.removeEventListener('resize', debouncedSetSize);
      resizeObserver.disconnect();
    };
  }, [setSize]);

  useEffect(() => {
    let rafId;
    const animate = () => {
      if (!isPointerOverRef.current) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach(span => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };

          const d = dist(mouseRef.current, charCenter);

          const wdth = width ? Math.floor(getAttr(d, maxDist, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : 0;
          const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : 1;

          const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;

          if (span.style.fontVariationSettings !== newFontVariationSettings) {
            span.style.fontVariationSettings = newFontVariationSettings;
          }
          if (alpha && span.style.opacity !== alphaVal) {
            span.style.opacity = alphaVal;
          }
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha]);

  const styleElement = useMemo(() => {
    return (
      <style>{`
          @import url('${fontUrl}');
          .stroke span {
            position: relative;
            color: ${textColor};
          }
          .stroke span::after {
            content: attr(data-char);
            position: absolute;
            left: 0;
            top: 0;
            color: transparent;
            z-index: -1;
            -webkit-text-stroke-width: ${strokeWidth}px;
            -webkit-text-stroke-color: ${strokeColor};
          }
        `}</style>
    );
  }, [fontFamily, fontUrl, textColor, strokeColor, strokeWidth]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-transparent">
      {styleElement}
      <h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${
          flex ? 'flex justify-between' : ''
        } ${stroke ? 'stroke' : ''} uppercase text-center`}
        style={{
          fontFamily,
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor,
          transition: 'font-variation-settings 120ms ease-out, opacity 120ms ease-out'
        }}>
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => {
                spansRef.current[i] = el;
              }}
            data-char={char}
            className="inline-block">
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
