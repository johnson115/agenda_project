const GetDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          johnson: {
            main: "#1e88e5",
            light: "rgb(17, 38, 229)",
          },
          favcolor: {
            main: "#64b5f6",
          },
        }
      : {
          // palette values for dark mode
          johnson: {
            main: "#f44336",
            light: "#e64a19",
            contrastText: "#fff",
          },
          favcolor: {
            main: "#c62828",
          },
        }),
  },
});
export default GetDesignTokens
