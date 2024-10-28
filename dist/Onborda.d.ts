import React from "react";
import { OnbordaProps } from "./types";
/**
 * Onborda Component
 * A guided tour component that highlights elements on the page and provides step-by-step instructions
 *
 * @param children - The content to be wrapped by the Onborda component
 * @param steps - Array of tour configurations and their steps
 * @param shadowRgb - RGB values for the overlay shadow (default: "0, 0, 0")
 * @param shadowOpacity - Opacity value for the overlay shadow (default: "0.2")
 * @param cardTransition - Animation transition settings for the card
 * @param cardComponent - Custom card component for displaying step content
 */
declare const Onborda: React.FC<OnbordaProps>;
export default Onborda;
