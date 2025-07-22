**You are an expert fullstack developer especially building websites. You task is to build the Socials page for the SoulGate website, matching the Figma design exactly (referenced below). This will be the first page of the website that we build and it needs to be compatible for all formats (web, mobile, tablet, etc.).**

### **Figma Reference**
- Socials slide: [https://www.figma.com/design/VZoMNUDvRqQts6To4vGNJR/SoulGate-Litepaper-Copy?node-id=1-4&m=dev](https://www.figma.com/design/VZoMNUDvRqQts6To4vGNJR/SoulGate-Litepaper-Copy?node-id=1-4&m=dev)

## Technical Stack

  - **Framework**: Next.js 14 with App Router
  - **Language**: TypeScript
  - **Styling**: Tailwind CSS with custom design tokens
  - **Deployment**: Optimized for Vercel

### **Assets**
- All component images and GIFs are in the `public/` directory:
  - `Background.gif` (animated background)
  - `Background.png` (static background for reference)
  - `Twitter Button.png` (Twitter icon button)
  - `Discord Button.png` (Discord icon button)
  - `Logo.png` (SoulGate logo)
  - `Socials.png` (A static PNG of the full design is also available for reference)

### **Data Structure**
- The layout, asset references, and links are defined in `socials.json`.
- Each component includes its type, asset path, size, position, and link (if applicable).
- The two social buttons are defined as a horizontally centered row above the logo, with even spacing.

### **Design Tokens**
- Use the Figma MCP tool to store all of the design tokens in `design-tokens.json`.
- Use the design tokens exported from the Figma MCP tool in `design-tokens.json`.
- If not available, use these defaults (update as needed):

```json
{
  "colors": {
    "background": "#FFFFFF",
    "primary": "#5865F2",
    "accent": "#1DA1F2"
  },
  "fonts": {
    "primary": "Inter, sans-serif",
    "size": "16px",
    "weight": "400"
  },
  "borderRadius": {
    "button": "8px"
  }
}
```

### **Responsiveness**
- The site must be fully responsive (web and mobile compatible).
- **Mobile layout guidance:**
  - The two social buttons should remain centered above the logo.
  - On mobile, stack the buttons vertically with a smaller gap (e.g., 16px) and ensure the logo remains centered below them.
  - All images should scale proportionally to fit smaller screens.
- If using Tailwind CSS, use responsive classes (e.g., `flex-col md:flex-row`, `gap-4 md:gap-8`, `w-full max-w-xs mx-auto`).

### **Accessibility**
- All buttons and images include `ariaLabel` fields in the JSON for accessibility.
- Ensure `alt` text or `aria-label` is set in the rendered HTML.

### **Links**
- Twitter: `https://x.com/PlaySoulGate`
- Discord: `discord.gg/soulgatediscord.gg/soulgate`

### **How to Use**
1. Use `socials.json` for layout, asset, and link data.
2. Use `design-tokens.json` for colors, fonts, and spacing.
3. Use all assets from the `public/` directory.
4. Follow the responsiveness and accessibility guidelines above.
5. Reference the Figma file for any visual or spacing questions.

##**Process:**  
1. **Analyze the exact design**  
   - Reference the Figma Socials slide for layout, spacing, and visual details.
2. **Build the page to match precisely**  
   - Use the provided `socials.json` for structure and asset references.
   - Use all images and GIFs from the `public/` directory.
3. **Add responsive breakpoints**  
   - Ensure the layout adapts for mobile and desktop as described in the README.
   - Center the two social buttons above the logo on all screen sizes; stack vertically on mobile.
4. **Integrate animations/GIFs**  
   - Use the animated background GIF as specified.
5. **Apply design tokens**  
   - Use `design-tokens.json` for colors, fonts, and spacing.
6. **Ensure accessibility**  
   - Set `aria-label` or `alt` text for all interactive elements and images.
   - Ensure keyboard navigation works for all buttons.
7. **Test against the original Figma design**  
   - Compare the built page to the Figma reference at all breakpoints.
   - Confirm all links, layout, and visuals match the design.

---

**Build the page to match the Figma design exactly, ensure it is fully responsive, and use the provided assets and tokens. If you have any questions about layout or spacing, refer to the Figma file.**

**DO NOT interpret or add creative elements. This is a 1:1 recreation of the Figma designs.**