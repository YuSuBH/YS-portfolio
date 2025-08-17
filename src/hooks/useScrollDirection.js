import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Custom hook for tracking scroll direction and managing navbar visibility
 * Enhanced with mobile compatibility and edge case handling
 * @param {number} threshold - Minimum scroll distance to trigger hide (default: 50px)
 * @param {number} throttleMs - Throttle delay for scroll events (default: 16ms for 60fps)
 * @returns {Object} Scroll state object with visibility and position data
 */
const useScrollDirection = (threshold = 50, throttleMs = 16) => {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    previousScrollY: 0,
    direction: null,
    isVisible: true,
  });

  // Use refs to track throttling state without causing re-renders
  const lastScrollTime = useRef(0);
  const throttleTimeout = useRef(null);
  const isScrolling = useRef(false);
  const scrollEndTimeout = useRef(null);

  // Enhanced scroll handler with mobile compatibility and edge case handling
  const handleScroll = useCallback(() => {
    const currentTime = performance.now();

    // Mark that we're currently scrolling (for momentum scroll detection)
    isScrolling.current = true;

    // Clear any existing scroll end timeout
    if (scrollEndTimeout.current) {
      clearTimeout(scrollEndTimeout.current);
    }

    // Set a timeout to detect when scrolling has ended (important for iOS momentum scrolling)
    scrollEndTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 150); // 150ms delay to detect scroll end

    // Clear any existing throttle timeout
    if (throttleTimeout.current) {
      clearTimeout(throttleTimeout.current);
    }

    // Throttle scroll events to prevent excessive state updates
    if (currentTime - lastScrollTime.current < throttleMs) {
      // Schedule the scroll handler to run after the throttle period
      throttleTimeout.current = setTimeout(() => {
        handleScroll();
      }, throttleMs - (currentTime - lastScrollTime.current));
      return;
    }

    lastScrollTime.current = currentTime;
    const currentScrollY = Math.max(
      0,
      window.scrollY || window.pageYOffset || 0
    );

    setScrollState((prevState) => {
      const { previousScrollY } = prevState;

      // Calculate scroll difference for more accurate direction detection
      const scrollDiff = currentScrollY - previousScrollY;

      // Determine scroll direction with minimum threshold to avoid jitter
      let direction = null;
      if (Math.abs(scrollDiff) > 1) {
        // Minimum 1px difference to register direction change
        if (scrollDiff > 0) {
          direction = "down";
        } else {
          direction = "up";
        }
      }

      // Determine visibility based on scroll behavior with enhanced edge case handling
      let isVisible = true;

      // Edge case 1: Always show navbar at the top of the page (scroll position <= 10px)
      // Small buffer to handle iOS bounce scrolling and minor scroll variations
      if (currentScrollY <= 10) {
        isVisible = true;
      }
      // Edge case 2: Hide when scrolling down past threshold
      else if (direction === "down" && currentScrollY > threshold) {
        isVisible = false;
      }
      // Edge case 3: Show when scrolling up (any upward movement)
      else if (direction === "up") {
        isVisible = true;
      }
      // Edge case 4: Maintain current visibility state for small movements or no direction change
      else {
        isVisible = prevState.isVisible;
      }

      // Additional edge case: If we're very close to the top, always show
      // This handles cases where momentum scrolling might cause brief negative values
      if (currentScrollY < 5) {
        isVisible = true;
      }

      return {
        scrollY: currentScrollY,
        previousScrollY: currentScrollY,
        direction,
        isVisible,
      };
    });
  }, [threshold, throttleMs]);

  useEffect(() => {
    // Enhanced event listener setup for mobile compatibility
    const options = {
      passive: true, // Don't block the main thread
      capture: false, // Use bubbling phase for better mobile compatibility
    };

    // Add scroll event listener with enhanced mobile support
    window.addEventListener("scroll", handleScroll, options);

    // Additional touch event listeners for better mobile compatibility
    // These help detect touch-based scrolling on mobile devices
    const handleTouchStart = () => {
      // Reset scroll state when touch starts to handle momentum scrolling better
      isScrolling.current = true;
    };

    const handleTouchEnd = () => {
      // Set a longer timeout for touch end to handle iOS momentum scrolling
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }
      scrollEndTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 300); // Longer timeout for momentum scrolling
    };

    // Add touch event listeners for mobile devices
    window.addEventListener("touchstart", handleTouchStart, options);
    window.addEventListener("touchend", handleTouchEnd, options);

    // Handle orientation changes on mobile devices
    const handleOrientationChange = () => {
      // Recalculate scroll position after orientation change
      setTimeout(() => {
        handleScroll();
      }, 100);
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    // Cleanup function to remove all event listeners and clear timeouts
    return () => {
      window.removeEventListener("scroll", handleScroll, options);
      window.removeEventListener("touchstart", handleTouchStart, options);
      window.removeEventListener("touchend", handleTouchEnd, options);
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);

      // Clear any pending timeouts to prevent memory leaks
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
        throttleTimeout.current = null;
      }

      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
        scrollEndTimeout.current = null;
      }
    };
  }, [handleScroll]);

  // Return scroll state object
  return {
    isVisible: scrollState.isVisible,
    scrollY: scrollState.scrollY,
    scrollDirection: scrollState.direction,
  };
};

export default useScrollDirection;
