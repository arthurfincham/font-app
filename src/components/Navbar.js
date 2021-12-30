import NavButton from './NavButton';
import NavButtonContent from './NavButtonContent';
import ContentToggle from './ContentToggle';
import FontSlider from './FontSlider';
export default function Navbar({ setTheme, setFontSize }) {
  return (
    <nav class="bg-yellow-300 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <h1 className="text-black font-bold">The Only Fonts You Need</h1>
        <div className="flex space-x-12">
          <FontSlider setFontSize={setFontSize} />
          <NavButton name="Themes">
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
