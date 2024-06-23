import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";

interface CodeBlockProps {
  codeString: string;
};

const Monitor = styled.div`
  width: 95%;
  min-height: 60vh;
  margin: auto;
  border: 15px solid #4f4f4f;
  border-radius: 10px;
`

export const CodeBlock: React.FC<CodeBlockProps> = ({ codeString }) => {
  return (
    <Monitor>
      <SyntaxHighlighter
        customStyle={{
          minHeight: "60vh",
          width: "100%",
          fontSize: 18,
          padding: "25px",
          margin: "0px"
        }}
        language="javascript"
        style={monokai}>
        {codeString}
      </SyntaxHighlighter>
    </Monitor>

  )
}