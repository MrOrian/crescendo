import Images from '../../../Image'
import styles from './ATFU.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function ATFU() {
    return(
        <div className={cx('ATFU')}>
            <p className={cx('title')}>A TIME FOR US Concert</p>
            <div className={cx('container')}>
                <div className={cx('image')}>
                    <img src={Images.ATFU1} alt='a time for us'></img>
                </div>

                <div className={cx('content')}></div>
            </div>

            <div className={cx('container')}>
                <div className={cx('content')}></div>

                <div className={cx('image')}>
                    <img src={Images.ATFU2} alt='a time for us'></img>
                </div>    
            </div>

            <div className={cx('container')}>
                <div className={cx('image')}>
                    <img src={Images.ATFU3} alt='a time for us'></img>
                </div>

                <div className={cx('content')}></div>
            </div>

            <div className={cx('container')}>
                <div className={cx('content')}></div>

                <div className={cx('image')}>
                    <img src={Images.ATFU4} alt='a time for us'></img>
                </div>
            </div>
        </div>
    )
}

export default ATFU