type TextSize = {
    lines: string[];
    lineHeight: number;
    width: number;
    height: number;
  };
  
  function wrapText(
    context: CanvasRenderingContext2D,
    text: string,
    maxWidth: number,
    font: string
  ): TextSize {
    const words = text.split(" ");
    const lines: string[] = [];
    let line = "";
  
    context.font = font;
    context.textBaseline = "top";
    const lineHeight = context.measureText("M").width * 1.2; // Approximate line height based on the width of the letter "M"
  
    for (const word of words) {
      const testLine = line + word + " ";
      const testLineWidth = context.measureText(testLine).width;
  
      if (testLineWidth > maxWidth) {
        lines.push(line.trim());
        line = word + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());
  
    const width = Math.max(...lines.map(line => context.measureText(line).width));
    const height = lineHeight * lines.length;
  
    return {
      lines,
      lineHeight,
      width,
      height
    };
  }
  

export function wrapTextToFit(
    context: CanvasRenderingContext2D,
    text: string,
    maxWidth: number,
    maxHeight: number,
    maxLines: number,
    font: string
  ): TextSize {
    let fontSize = parseInt(font.match(/\d+/)[0], 10);
    const fontFamily = font.match(/[a-zA-Z]+/)[0];
    
    let wrappedText: TextSize;
  
    do {
      context.font = `${fontSize}px ${fontFamily}`;
      wrappedText = wrapText(context, text, maxWidth, context.font);
  
      if (wrappedText.lines.length > maxLines) {
        fontSize--;
      } else {
        break;
      }
    } while (fontSize > 0 && wrappedText.height > maxHeight);
  
    return { text: wrappedText, fontSize, fontFamily };
  }

  export function downloadCanvasAsPng(canvas: HTMLCanvasElement, filename: string): void {
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  export function drawCircularImage(
    context: CanvasRenderingContext2D,
    img: HTMLImageElement,
    x: number,
    y: number,
    radius: number,
    overlayColor: string,
    overlayOpacity: number
  ): void {
    // Create an off-screen canvas
    const offscreenCanvas = new OffscreenCanvas(radius * 2, radius * 2);
    const offscreenCtx = offscreenCanvas.getContext("2d");
  
    offscreenCtx.save();
    offscreenCtx.beginPath();
    offscreenCtx.arc(radius, radius, radius, 0, 2 * Math.PI);
    offscreenCtx.closePath();
    offscreenCtx.clip();
    offscreenCtx.drawImage(img, 0, 0, radius * 2, radius * 2);
    offscreenCtx.restore();
  
    // Create an off-screen canvas for the colored overlay
    const overlayCanvas = new OffscreenCanvas(radius * 2, radius * 2);
    const overlayCtx = overlayCanvas.getContext("2d");
    overlayCtx.fillStyle = overlayColor;
    overlayCtx.globalAlpha = overlayOpacity;
    overlayCtx.fillRect(0, 0, radius * 2, radius * 2);
  
    // Clip the overlay canvas
    overlayCtx.globalCompositeOperation = 'destination-in';
    overlayCtx.beginPath();
    overlayCtx.arc(radius, radius, radius, 0, 2 * Math.PI);
    overlayCtx.closePath();
    overlayCtx.fill();
  
    // Blend the overlay canvas onto the off-screen canvas
    offscreenCtx.globalCompositeOperation = 'multiply';
    offscreenCtx.drawImage(overlayCanvas, 0, 0);
  
    // Create an off-screen canvas for the colored hue
    const hueCanvas = new OffscreenCanvas(radius * 2, radius * 2);
    const hueCtx = hueCanvas.getContext("2d");
    hueCtx.fillStyle = overlayColor;
    hueCtx.globalAlpha = overlayOpacity;
    hueCtx.fillRect(0, 0, radius * 2, radius * 2);
  
    // Clip the hue canvas
    hueCtx.globalCompositeOperation = 'destination-in';
    hueCtx.beginPath();
    hueCtx.arc(radius, radius, radius, 0, 2 * Math.PI);
    hueCtx.closePath();
    hueCtx.fill();
  
    // Blend the hue canvas onto the off-screen canvas
    offscreenCtx.globalCompositeOperation = 'hue';
    offscreenCtx.drawImage(hueCanvas, 0, 0);
  
    // Draw the resulting image on the main canvas
    context.drawImage(offscreenCanvas, x, y);
  }
  