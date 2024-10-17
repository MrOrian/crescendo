import styles from './Home.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Home() {
    return(
        <div className={cx('home')}>
            <p className={cx('name')}>C R E S C E N D O</p>
            <p className={cx('detail')}>Trường Âm nhạc & Nghệ thuật CRESCENDO là nơi đào tạo chuyên nghiệp các môn: 
                <br></br>
                PIANO - GUITAR - UKULELE - VIOLIN - VOCAL - ABRSM - LUYỆN THI CÁC TRƯỜNG ĐẠI HỌC ÂM NHẠC.
            </p>
        </div>
    )
}

export default Home