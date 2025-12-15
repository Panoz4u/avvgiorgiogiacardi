# Test Results

## Testing Protocol
(Do not edit this section)

## Recent Tests
- Date: 2025-08-XX
- Component: Animation Final V5 (Card Deck)
- Status: **PASSED**
- Notes:
    - **"Why Us"**: Completely rewritten to use a "Sticky Deck" transition.
        - Scroll 0-25%: Intro Title "SENZA CONFINI" (Navy).
        - Scroll >25%: Card 01 (Electric Blue) slides UP over Intro.
        - Scroll >50%: Card 02 (Electric Blue) slides UP over Card 01.
        - Scroll >75%: Card 03 (Electric Blue) slides UP over Card 02.
    - **Parallax**: Added slight scale-down effect (`scale: 0.9`) for background cards to create depth.
    - **Contact**: Fixed "PARLIAMONE" overflow using `break-words` and fluid typography.
    - **Hero Ticker**: Fixed overlapping text by using a proper flex container structure (`w-max` + duplicate groups).
