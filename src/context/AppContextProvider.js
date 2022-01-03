import { SizeProvider } from './SizeContext';
import { WeightProvider } from './WeightContext';
import { BodyColorProvider } from './BodyColorContext';
import { TextColorProvider } from './TextColorContext';
import { ItalicProvider } from './ItalicContext';
import { CodeSnippetProvider } from './CodeSnippetContext';

export default function AppContextProvider({ children }) {
  return (
    <TextColorProvider>
      <BodyColorProvider>
        <CodeSnippetProvider>
          <ItalicProvider>
            <WeightProvider>
              <SizeProvider>{children}</SizeProvider>
            </WeightProvider>
          </ItalicProvider>
        </CodeSnippetProvider>
      </BodyColorProvider>
    </TextColorProvider>
  );
}
