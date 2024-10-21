import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import Images from '../../Image'
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles)

function Header({setPageTitle}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <header>
        
            <div className={cx('logo')}>
                <Link to='/introduce' onClick={() => setPageTitle('introduce')}>
                    <div className={cx('container__logo')}>
                        <img src={Images.logo_black} alt='logo'></img>
                        <div className={cx('logo__name')}>
                            <p className={cx('title__name')}>CRESCENDO</p>
                            <p className={cx('more__name')}>School Music and Arts</p>
                        </div>
                    </div>
                </Link>
            </div>
        


            <div className={cx('menu')}>
                <Link to='/home' className={cx('regular')} onClick={() => setPageTitle('home')}>
                    <div className={cx('')}>
                        <ion-icon name="home-outline"></ion-icon>
                        <p>GIỚI THIỆU</p>
                    </div>
                </Link>

                <div className={cx('course')}>     
                <Link to='/course' className={cx('title__menu')} onClick={() => setPageTitle('course')}>
                    <div className={cx('')}>
                        <ion-icon name="book-outline"></ion-icon>
                        <p>KHÓA HỌC</p> 
                    </div>
                </Link>   

                    <div className={cx('option')}>
                        
                        <Link to='/abrsm' className={cx('')} onClick={() => setPageTitle('abrsm')}>
                            <div>
                                <p>Luyện thi ABRSM</p>
                            </div>
                        </Link>

                        <Link to='/conservatory' className={cx('')} onClick={() => setPageTitle('conservatory')}>
                            <div>
                                <p>Luyện thi nhạc viện</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <Link to='/shop' className={cx('regular')} onClick={() => setPageTitle('shop')}>
                    <div className={cx('')}>
                        <ion-icon name="cart-outline"></ion-icon>                    
                        <p>SHOP NHẠC CỤ</p>
                    </div>
                </Link>

                <Link to='/recording' className={cx('regular')} onClick={() => setPageTitle('shop')}>
                    <div className={cx('')}>
                        <ion-icon name="mic-outline"></ion-icon>
                        <p>THU ÂM</p>
                    </div>
                </Link>

                <Link to='/library' className={cx('regular')} onClick={() => setPageTitle('library')}>
                    <div className={cx('')}>
                        <ion-icon name="library-outline"></ion-icon>
                        <p>THƯ VIỆN</p>
                    </div>
                </Link>

                <Link to='/atfu' className={cx('regular')} onClick={() => setPageTitle('atfu')}>
                    <div className={cx('')}>
                        <ion-icon name="fitness-outline"></ion-icon>
                        <p>A TIME FOR US</p>
                    </div>
                </Link>

                <Link to='/activity' className={cx('regular')} onClick={() => setPageTitle('activity')}>
                    <div className={cx('')}>
                        <ion-icon name="accessibility-outline"></ion-icon>
                        <p>CÁC HOẠT ĐỘNG</p>
                    </div>
                </Link>

                <Link to='/contact' className={cx('regular')} onClick={() => setPageTitle('contact')}>
                    <div className={cx('')}>
                        <ion-icon name="information-circle-outline"></ion-icon>
                        <p>LIÊN HỆ</p>
                    </div>
                </Link>
            </div>

            <div className={cx('menu__mobile')}>
                <div className={cx('collapse')} onClick={toggleMenu}>
                    <ion-icon name="menu-outline" ></ion-icon>

                    <div className={cx('mobile', {open: isOpen})}>
                        <Link to='/home' className={cx('regular__mobile')} onClick={() => setPageTitle('home')}>
                            <div className={cx('')}>
                                <ion-icon name="home-outline"></ion-icon>
                                <p className={cx('button__mobile')}>GIỚI THIỆU</p>
                            </div>
                        </Link>

                        <div className={cx('course__mobile')}>     
                        <Link to='/course' className={cx('title__menu')} onClick={() => setPageTitle('course')}>
                            <div className={cx('')}>
                                <ion-icon name="book-outline"></ion-icon>
                                <p className={cx('button__mobile')}>KHÓA HỌC</p> 
                            </div>
                        </Link>   

                            <div className={cx('option__mobile')}>
                                
                                <Link to='/abrsm' className={cx('link__mobile')} onClick={() => setPageTitle('abrsm')}>
                                    <div>
                                        <p className={cx('button__mobile')}>Luyện thi ABRSM</p>
                                    </div>
                                </Link>

                                <Link to='/conservatory' className={cx('link__mobile')} onClick={() => setPageTitle('conservatory')}>
                                    <div>
                                        <p className={cx('button__mobile')}>Luyện thi nhạc viện</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <Link to='/shop' className={cx('regular__mobile')} onClick={() => setPageTitle('shop')}>
                            <div className={cx('')}>
                                <ion-icon name="cart-outline"></ion-icon>                    
                                <p className={cx('button__mobile')}>SHOP NHẠC CỤ</p>
                            </div>
                        </Link>

                        <Link to='/recording' className={cx('regular__mobile')} onClick={() => setPageTitle('shop')}>
                            <div className={cx('')}>
                                <ion-icon name="mic-outline"></ion-icon>
                                <p className={cx('button__mobile')}>THU ÂM</p>
                            </div>
                        </Link>

                        <Link to='/library' className={cx('regular__mobile')} onClick={() => setPageTitle('library')}>
                            <div className={cx('')}>
                                <ion-icon name="library-outline"></ion-icon>
                                <p className={cx('button__mobile')}>THƯ VIỆN</p>
                            </div>
                        </Link>

                        <Link to='/atfu' className={cx('regular__mobile')} onClick={() => setPageTitle('atfu')}>
                            <div className={cx('')}>
                                <ion-icon name="fitness-outline"></ion-icon>
                                <p className={cx('button__mobile')}>A TIME FOR US</p>
                            </div>
                        </Link>

                        <Link to='/activity' className={cx('regular__mobile')} onClick={() => setPageTitle('activity')}>
                            <div className={cx('')}>
                                <ion-icon name="accessibility-outline"></ion-icon>
                                <p className={cx('button__mobile')}>CÁC HOẠT ĐỘNG</p>
                            </div>
                        </Link>

                        <Link to='/contact' className={cx('regular__mobile')} onClick={() => setPageTitle('contact')}>
                            <div className={cx('')}>
                                <ion-icon name="information-circle-outline"></ion-icon>
                                <p className={cx('button__mobile')}>LIÊN HỆ</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header