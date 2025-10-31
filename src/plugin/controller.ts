// Show the plugin UI
figma.showUI(__html__, { 
  width: 316, 
  height: 640,
  title: 'Prompt Builder'
});

// Handle messages from the UI
figma.ui.onmessage = (msg) => {
  if (msg.type === 'close-plugin') {
    figma.closePlugin();
  }
  
  if (msg.type === 'resize-ui') {
    const { width, height } = msg;
    if (typeof width === 'number' && typeof height === 'number') {
      figma.ui.resize(Math.max(316, width), Math.max(300, height));
    }
  }
  
  // Add any other message handlers here if needed
  // For now, this plugin is primarily UI-based for generating JSON prompts
};

// Optional: Close plugin when user presses Escape
figma.on('close', () => {
  // Cleanup if needed
});
