# SVG Logo Generator

## Description
SVG Logo Generator is a simple Node.js command-line application that allows users to create customizable SVG logos. The application supports generating logos with different shapes (circle, triangle, square) and allows users to specify text, text color, and shape color.

## Example SVG

Below is an example SVG showing a pink circle and blue text centered within the rectangle:

```
<svg width="300" height="200">
      <circle cx="150" cy="100" r="50" fill="pink" />
      <text x="150" y="100" fill="blue" text-anchor="middle" dominant-baseline="middle">svg</text>
</svg>
```

## How It Works

For a quick demo of the SVG Logo Generator in action, watch the screencast below:

[Watch the Screencast](https://drive.google.com/file/d/1g_v_o04CarszJ9hvzgxg4-MumGwI5w8h/view)

## Installation

To install SVG Logo Generator, follow these steps:

```bash
git clone https://github.com/yourusername/svg-logo-generator.git
cd svg-logo-generator
npm install
```

## Usage

To run SVG Logo Generator, execute the following command in terminal

```bash
node index.js
```

You will be prompted to enter details such as text (up to three characters), text color, shape choice (circle, triangle, square), and shape color. The generated SVG will be saved as logo.svg in your current directory.

## Features

* Text Customization: Add custom text up to three characters to your logo.
* Color Choices: Specify colors for both text and shapes using keywords or hexadecimal values.
* Shape Options: Choose from three different shapes: circle, triangle, or square.
* Interactive Prompts: User-friendly command-line prompts to guide you through the logo creation process.

## Contributing

Contributions to the SVG Logo Generator are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request, or create an issue to discuss the changes.

```bash
git checkout -b your-feature-branch
git commit -am 'Add some feature'
git push origin your-feature-branch
```

Open a pull request with a clear title and description.

## License

This project is licensed under the MIT License - see [License.md](https://opensource.org/license/mit)