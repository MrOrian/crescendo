import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import Images from '../../Image'
const cx = classNames.bind(styles)

function Footer() {
    return(
        <footer>
            <div className={cx('left')}>
                <div className={cx('title')}>
                    <p>CRESCENDO SCHOOL</p>
                </div>

                <div className={cx('content')}>
                    <p>Điện thoại: 0844.816.110</p>
                    <p>Email: nguyenngoctan257@gmail.com</p>
                    <p>Địa chỉ: 
                    33 đường số 2, KDC Phú Mỹ, P.Phú Mỹ, Q.7, Ho Chi Minh City, Vietnam</p>
                </div>
            </div>

            <div className={cx('right')}>
                <div className={cx('title')}>
                    <p>MẠNG XÃ HỘI</p>
                </div>
                
                <div className={cx('content__link')}>
                    <a className={cx('link')} href='https://www.facebook.com/profile.php?id=61563557194629' target='_blank' rel="noopener noreferrer">
                        <img src={Images.facebook} alt='facebook'></img>
                    </a>

                    <a className={cx('link')} href='https://www.youtube.com/@crescendotruongamnhacnghet854' target='_blank' rel="noopener noreferrer">
                        <img src={Images.youtube} alt='youtube'></img>
                    </a>

                    <a className={cx('link')} href='https://zalo.me/0844816110' target='_blank' rel="noopener noreferrer">
                        <img src={Images.zalo} alt='zalo'></img>
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer