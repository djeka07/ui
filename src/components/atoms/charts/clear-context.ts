const clearContext = (context: CanvasRenderingContext2D, width: number, height: number): CanvasRenderingContext2D => {
  context.clearRect(0, 0, width, height);
  return context;
};

export default clearContext;
