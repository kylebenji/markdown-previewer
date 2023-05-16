import React from "react";
import ReactMarkdown from "react-markdown";

const initialMarkdown = `# Preview
Welcome to the markdown previewer, enter any valid GitHub style markdown here to see it in html on the preview on the right

## \`Code\` blocks
\`\`\`
let codeblock = "\`\`\`"
\`\`\`

See a great survey of **GitHub** markdown [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Why use it?
- see markdown as you write it
- satiate your curiosity
- breath easy knowing that computers will do work for you

## Reviews from users
> This tool is great!! I have never seen my html just appear while I wrote plain text like that!! \n
![generic user](https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: initialMarkdown };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    return (
      <div id="app-area" className="m-auto col-9">
        <h1 id="title" className="text-center">
          Markdown Preview
        </h1>
        <div id="preview-area" className="row justify-content-around">
          <textarea
            id="editor"
            onChange={this.handleChange}
            className="col-5 rounded"
            value={initialMarkdown}
          ></textarea>
          <div id="preview" className="col-5 border border-secondary rounded">
            <ReactMarkdown>{this.state.input}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
