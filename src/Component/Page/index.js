import ATFU from './ATFU'
import Home from './Home'
import styles from './Page.module.scss'
import classNames from 'classnames/bind'
import Shop from './Shop'
import Course from './Course'
import Introduce from './Introduce'
import ABRSM from './Course/ABRSM'
import Conservatory from './Course/Conservatory'
import Recording from './Recording'
import Library from './Library'
import Activity from './Activity'
import Contact from './Contact'
const cx = classNames.bind(styles)

function Page({pageTitle}) {
    let content;

    switch(pageTitle){

        case 'introduce':
            content = <Introduce></Introduce>
            break; 

        case 'home':
            content = <Home></Home>
            break; 

        case 'course':
            content = <Course></Course>
            break; 

        case 'abrsm':
            content = <ABRSM></ABRSM>
            break; 

        case 'conservatory':
            content = <Conservatory></Conservatory>
            break; 


        case 'shop':
            content = <Shop></Shop>
            break; 

        case 'recording':
            content = <Recording></Recording>
            break; 

        case 'library':
            content = <Library></Library>
            break; 

        case 'atfu':
            content = <ATFU></ATFU>
            break;

        case 'activity':
            content = <Activity></Activity>
            break; 

        case 'contact':
            content = <Contact></Contact>
            break; 

        default:
                content = <div>'404'</div>;
    }
    

    return(
        <div className={cx('page')}>
            {content}
        </div>
    )
}
export default Page