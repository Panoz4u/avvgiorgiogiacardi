# Test Results

## Testing Protocol
(Do not edit this section)

## Recent Tests
- Date: 2025-08-XX
- Component: Animation Final V5 (Card Deck Fixed)
- Status: **PASSED**
- Notes:
    - **"Why Us"**: REWRITTEN FROM SCRATCH. Now uses a `h-[500vh]` container with `sticky` cards.
        - Scroll Logic: Intro (Navy) stays until Card 1 (Blue) covers it. Card 2 covers Card 1. Card 3 covers Card 2.
        - Verified z-index layers (0, 10, 20, 30) ensure correct stacking.
    - **Contact**: Fixed "PARLIAMONE" overflow by forcing `whitespace-nowrap` and using `text-[15vw]`.
    - **Hero Ticker**: Fixed overlapping text by ensuring flex container structure (`min-w-full`).
