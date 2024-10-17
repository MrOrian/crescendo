import styles from './Shop.module.scss'
import classNames from 'classnames/bind'
import Images from '../../../Image'
const cx = classNames.bind(styles)

function Shop() {
    return(
        <div className={cx('shop')}>
            <div className={cx('card')}>
                <div className={cx('product__img')}>
                    <img src={Images.piano}></img>
                </div>

                <div className={cx('product__cost')}>
                    <p>Giá: Liên hệ</p>
                </div>

                <div className={cx('product__detail')}>
                    <p>Sản phẩm Piano ..............</p>
                </div>

                <div className={cx('detail__button')}>
                    <p>Ấn để xem chi tiết</p>
                </div>
            </div>

            <div className={cx('card')}>
                <div className={cx('product__img')}>
                    <img src={Images.piano}></img>
                </div>

                <div className={cx('product__cost')}>
                    <p>Giá: Liên hệ</p>
                </div>

                <div className={cx('product__detail')}>
                    <p>Sản phẩm Piano ..............</p>
                </div>

                <div className={cx('detail__button')}>
                    <p>Ấn để xem chi tiết</p>
                </div>
            </div>

            <div className={cx('card')}>
                <div className={cx('product__img')}>
                    <img src={Images.piano}></img>
                </div>

                <div className={cx('product__cost')}>
                    <p>Giá: Liên hệ</p>
                </div>

                <div className={cx('product__detail')}>
                    <p>Sản phẩm Piano ..............</p>
                </div>

                <div className={cx('detail__button')}>
                    <p>Ấn để xem chi tiết</p>
                </div>
            </div>
        </div>
    )
}

export default Shop