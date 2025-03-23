# Social Share Component

A lightweight, customizable React component that provides a clean modal interface for sharing content across multiple social platforms. Features include social media buttons, URL copying functionality with visual feedback.


## Features

- Simple share button that opens a modal with sharing options
- Support for multiple social media platforms:
  - Facebook
  - YouTube
  - Twitter
  - Pinterest
  - Spotify
  - Instagram
- Copy to clipboard functionality
- Visual feedback upon successful copy ("Kopyalandı!")
- Responsive design that works on all devices
- Clean, modern UI

## Installation

```bash
npm install social-share-component
# or
yarn add social-share-component
```

## Usage

```jsx
import React from 'react';
import SocialShareComponent from 'social-share-component';

function App() {
  return (
    <div className="app">
      <h1>My Awesome Content</h1>
      <p>Check out this amazing content I want to share!</p>
      
      <SocialShareComponent 
        url="https://open.spotify.com/" 
        title="Check out this amazing content!"
      />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | string | `window.location.href` | The URL to share |
| `title` | string | `''` | Title to use when sharing (supported by some platforms) |
| `buttonText` | string | `'Share'` | Text to display on the share button |
| `buttonStyle` | object | `{}` | Custom styles for the share button |
| `platforms` | array | `['facebook', 'youtube', 'twitter', 'pinterest', 'spotify', 'instagram']` | Platforms to display |
| `copyText` | string | `'Copy'` | Text for the copy button |
| `copiedText` | string | `'Kopyalandı!'` | Text to display after successful copy |

## Customization

You can customize the appearance of the component by passing style objects via props:

```jsx
<SocialShareComponent 
  url="https://example.com" 
  buttonStyle={{
    backgroundColor: '#ff5722',
    color: 'white',
    borderRadius: '8px'
  }}
/>
```

## Browser Support

The component works on all modern browsers: Chrome, Firefox, Safari, and Edge.

## License

MIT

## Author

[elifbaskurt](https://github.com/elifbaskurt)
