module.exports = {
    // Other webpack configuration settings...
  
    module: {
      rules: [
        // Other rules...
  
        {
          test: /\.(mp4|webm|ogg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // Embed files smaller than 8 KB
                name: 'videos/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
  