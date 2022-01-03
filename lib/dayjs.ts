import dayjs  from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')
import 'dayjs/locale/th' // import locale

dayjs.extend(relativeTime)

const date = (date:any,local:any) => {
    if(local == 'th'){
        dayjs.locale('th')
    }
    return dayjs(date).format('MMMM D, YYYY')
    
}

export {date}