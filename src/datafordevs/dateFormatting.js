import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'

dayjs.extend(relativeTime)

export const dateFormat = (time) => { 
    const timeAgo = dayjs(time).fromNow()
    return timeAgo
 }
