import styles from './App.module.scss';
import Header from './Component/Header';
import Footer from './Component/Footer';
import classNames from 'classnames/bind';
import Page from './Component/Page';
import Images from './Image';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const cx = classNames.bind(styles)

function App() {
  const [pageTitle, setPageTitle] = useState('introduce');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Lấy hash từ URL, bỏ dấu '#' ở đầu
    const hash = window.location.hash.replace('#', '');

    // Dựa vào hash để set pageTitle
    switch (hash) {
      case '/introduce':
        setPageTitle('introduce');
        break;
      case '/course':
        setPageTitle('course');
        break;
      case '/abrsm':
        setPageTitle('abrsm');
        break;
      case '/conservatory':
        setPageTitle('conservatory');
        break;
      case '/shop':
        setPageTitle('shop');
        break;
      case '/recording':
        setPageTitle('recording');
        break;
      case '/library':
        setPageTitle('library');
        break;
      case '/atfu':
        setPageTitle('atfu');
        break;
      case '/activity':
        setPageTitle('activity');
        break;
      case '/contact':
        setPageTitle('contact');
        break;
      default:
        setPageTitle('home');
        break;
    }
  }, []);

  useEffect(() => {
    setLoading(true); // Kích hoạt loading khi route thay đổi
    const timeout = setTimeout(() => {
      setLoading(false); // Tắt loading sau một thời gian ngắn
    }, 100);

    return () => clearTimeout(timeout); // Xóa timeout khi component unmount
  }, [pageTitle]);

  return (
    <Router>
    <div className={cx('App')}>
      <div className={cx('zalo')}>
          <a href='https://zalo.me/0844816110' target='_blank' rel='noopener noreferrer'>
            <img src={Images.zalo}></img>
          </a>
      </div>
      <Header setPageTitle={setPageTitle}></Header>
      <div className={cx('content')}>
          {loading ? (
            <div className={cx('loading')}></div>
          ) : (
            <div className={cx('wrapper')}>
              <Routes>
                <Route exact path="/" element={<Page pageTitle="introduce" />} />
                <Route path="/introduce" element={<Page pageTitle="introduce" />} />
                <Route path="/home" element={<Page pageTitle="home" />} />
                <Route path="/course" element={<Page pageTitle="course" />} />
                <Route path="/contact" element={<Page pageTitle="contact" />} />
                <Route path="/atfu" element={<Page pageTitle="atfu" />} />
                <Route path="/activity" element={<Page pageTitle="activity" />} />
                <Route path="/recording" element={<Page pageTitle="recording" />} />
                <Route path="/library" element={<Page pageTitle="library" />} />
                <Route path="/shop" element={<Page pageTitle="shop" />} />
                <Route path="/abrsm" element={<Page pageTitle="abrsm" />} />
                <Route path="/conservatory" element={<Page pageTitle="conservatory" />} />
                {/* Route mặc định cho trang chính */}
                <Route path="*" element={<Page pageTitle="introduce" />} />
              </Routes>
            </div>
          )}
        </div>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
