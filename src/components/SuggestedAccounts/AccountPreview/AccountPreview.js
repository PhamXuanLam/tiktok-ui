import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://lh3.googleusercontent.com/ogw/ANLem4asEdlSkwj7LGK8g_Vy14PyC-b07y_U-LXo6_xr4w=s32-c-mo"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>bossbaby</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p classNames={cx('name')}>Lâm Xóm Miếu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')} >Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')} >Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
