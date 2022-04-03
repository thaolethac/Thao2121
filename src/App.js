import './App.css';
import Fifthcontent from './contents/fifthcontent';
import Firstcontent from './contents/first_content';
import Fourthcontent from './contents/fourthcontent';
import Secoundcontent from './contents/secoundcontent';
import Thirdcontent from './contents/thirdcontent';
import Nextcontent from './nextcontent/nextcontent';
import Images from './Header/image';
import Lastcontent from './lastcontent/lastcontent';
import Footer from './footer/footer';
import Scroll from './scroll/scroll';
function App() {
  return (
    <>
      <Scroll/>
      <Images />
      <Firstcontent/>
      <Secoundcontent />
      <Thirdcontent />
      <Fourthcontent />
      <Fifthcontent />
      <Nextcontent />
      <Lastcontent />
      <Footer/>
    </>
  );
}

export default App;
