import NavButton from './NavButton';
import NavButtonContent from './NavButtonContent';
import ContentToggle from './ContentToggle';
import FontSlider from './FontSlider';
import PreviewInput from './PreviewInput';
export default function Navbar({ setTheme, setFontSize, updatePreviewText, setFontWeight }) {
  return (
    <nav class="bg-yellow-300 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <PreviewInput updatePreviewText={updatePreviewText} />
        <div className="flex space-x-2 md:space-x-8">
          <NavButton name="Size">
            <NavButtonContent>
              <FontSlider setFontSize={setFontSize} />
            </NavButtonContent>
          </NavButton>
          <NavButton name="Weight">
            <NavButtonContent>
              <ContentToggle name="400" bgColor="white" fontColor="black" stateToggle={setFontWeight} />
              <ContentToggle name="600" bgColor="white" fontColor="black" stateToggle={setFontWeight} />
              <ContentToggle name="800" bgColor="white" fontColor="black" stateToggle={setFontWeight} />
            </NavButtonContent>
          </NavButton>
          <NavButton name="Themes" id="themeToggleButton">
            <NavButtonContent>
              <ContentToggle name="Dark" bgColor="#222223" fontColor="white" stateToggle={setTheme} />
              <ContentToggle name="Light" bgColor="white" fontColor="black" stateToggle={setTheme} />
              <ContentToggle name="Yellow" bgColor="#FEF3C7" fontColor="#372FA3" stateToggle={setTheme} />
            </NavButtonContent>
          </NavButton>
        </div>
      </div>
    </nav>
  );
}
